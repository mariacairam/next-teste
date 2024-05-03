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
        <div className=" grid grid-cols-12 gap-1 col-start-1 col-end-13 justify-center">
          <button onClick={prevSlide} className="grid-start-1">
            <ChevronLeftIcon className="h-12 w-12"></ChevronLeftIcon>
          </button>
          <div className="relative w-full h-96 rounded grid-start-2 grid-end-12">
            <Image src={urls[currentIndex]} alt={`Slide ${currentIndex}`} fill ={true} className="absolute w-full h-96 object-cover rounded"/>
          </div>
          <button onClick={nextSlide} className="grid-start-12 grid-end-13">
            <ChevronRightIcon className="h-12 w-12"></ChevronRightIcon>
          </button>
        </div>
      );
}