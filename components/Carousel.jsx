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
        <div className="flex flex-row justify-center">
          <button onClick={prevSlide}>
            <ChevronLeftIcon className="h-12 w-12"></ChevronLeftIcon>
          </button>
          <div className="relative w-3/4 h-96 rounded">
            <Image src={urls[currentIndex]} alt={`Slide ${currentIndex}`} fill ={true} className="absolute w-full h-auto object-cover rounded"/>
          </div>
          <button onClick={nextSlide}>
            <ChevronRightIcon className="h-12 w-12"></ChevronRightIcon>
          </button>
        </div>
      );
}