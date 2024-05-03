'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { p5Sketch } from '@/lib/sketch';

export default function P5jsContainer() {
  
  const [Sketch, setSketch] = useState(null);
  const [mounted, setMounted] = useState(false);
  let sketch = null;
  const parentRef = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('react-p5').then((module) => {
        const SketchComponent = module.default;
        setSketch(() => SketchComponent);
        setMounted(true);
      });
    }
  }, []);

  useEffect(() => {
    if (mounted && parentRef.current) {
      sketch = p5Sketch(parentRef.current);
    }
  }, [mounted]);
  
  return ( 
    <>
      <div ref={parentRef} className="flex justify-center items-center w-full">
        {mounted && sketch && (
          <Sketch setup={sketch.setup} draw={sketch.draw} windowResized = {sketch.windowResized} />
      )}
      </div>
    </>
  );
} 