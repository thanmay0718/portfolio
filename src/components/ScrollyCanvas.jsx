import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 120;

export default function ScrollyCanvas({ scrollContainerRef }) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  
  // Use scroll on the parent relative element (the 500vh container)
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const num = i.toString().padStart(3, '0');
        img.src = `/sequence/ezgif-frame-${num}.png`;
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // initial draw
  useEffect(() => {
    if (images.length > 0 && images[0].complete) {
        renderFrame(0);
    } else if (images.length > 0) {
        images[0].onload = () => renderFrame(0);
    }
  }, [images]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map progress 0-1 to frame index
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    );
    renderFrame(frameIndex);
  });

  const renderFrame = (index) => {
    if (!canvasRef.current || !images[index]) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const img = images[index];
    if (!img.complete || img.naturalWidth === 0) return;
    
    // Canvas dimensions are already handled by the resize event listener
    // This prevents severe lag on mobile when scrolling.
    
    // Calculate object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;
    
    if (imgRatio > canvasRatio) {
        // Image is wider than canvas -> crop sides
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
    } else {
        // Image is taller than canvas -> crop top/bottom
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Fill with background colour defined in tailwind to avoid flashes
    ctx.fillStyle = "#121212"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Re-render on resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
      
      // Re-trigger the current frame draw
      const latest = scrollYProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(latest * FRAME_COUNT))
      );
      renderFrame(frameIndex);
    };
    
    handleResize(); // Initial sizing
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress]);

  return (
    <div className="sticky top-0 h-[100vh] w-full overflow-hidden bg-background">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
