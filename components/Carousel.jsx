'use client';

import Image from "next/image";
import { useState } from "react";
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/20/solid'

export default function Carousel({images}){

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 +images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    const urls = images.map((image) => image.url);
    console.log(urls);

    return (
        <div className="grid grid-cols-12 gap-5 w-full justify-start">
          <button onClick={prevSlide} className="col-start-1 col-end-2 w-full h-full">
          <div className="relative w-full h-full object-cover">
            <Image src={urls[(currentIndex - 1 +images.length) % images.length]} alt={`Slide ${(currentIndex - 1 +images.length) % images.length}`} fill ={true} className="absolute aspect-video h-full object-cover opacity-50"/>
          </div>
          </button>
          <div className="relative aspect-video w-full col-start-2 col-end-12">
            <Image src={urls[currentIndex]} alt={`Slide ${currentIndex}`} fill ={true} className="absolute w-full h-auto object-cover"/>
          </div>
          <button onClick={nextSlide} className="col-start-12 col-end-13 w-full h-full">
          <div className="relative w-full h-full object-cover">
            <Image src={urls[(currentIndex + 1) % images.length]} alt={`Slide ${(currentIndex + 1) % images.length}`} fill ={true} className="absolute aspect-video h-full object-cover opacity-50"/>
          </div>
          </button>
        </div>
      );
}