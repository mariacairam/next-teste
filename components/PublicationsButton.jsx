'use client';
import { useState } from "react";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

export default function PublicationsButton(){
    const [activeSection, setActiveSection] = useState('books');

  const handleChangeBooks = () => {
    let showBooks = document.getElementById('books');
    let showResearches = document.getElementById('researches');
    if (activeSection === 'researches'){
        showResearches.classList.remove('flex');
        showResearches.classList.add('hidden');
        showBooks.classList.remove('hidden');
        showBooks.classList.add('flex');
        setActiveSection('books');
    }
  };

  const handleChangeResearches = () => {
    let showBooks = document.getElementById('books');
    let showResearches = document.getElementById('researches');
    if (activeSection === 'books'){
        showBooks.classList.remove('flex');
        showBooks.classList.add('hidden');
        showResearches.classList.remove('hidden');
        showResearches.classList.add('flex');
        setActiveSection('researches');
    }
  };

    return (
    <div className="grid border-neutral-500 grid-cols-10 gap-1 md:gap-5 text-base md:text-xl border-y h-10 md:h-14 mt-0 md:mt-2 mb-4 md:mb-0">
        <button onClick={handleChangeBooks} className="text-neutral-500 col-span-2 md:col-span-1 flex flex-row gap-1 items-center">
            {activeSection === 'books' ? <ArrowDownIcon className="h-6 w-6"></ArrowDownIcon> : <ArrowRightIcon className="h-6 w-6"></ArrowRightIcon>}
            Books
        </button>
        <button onClick={handleChangeResearches} className="text-neutral-500 col-span-3 md:col-span-2 flex flex-row gap-1 items-center">
            {activeSection === 'researches' ? <ArrowDownIcon className="h-6 w-6"></ArrowDownIcon> : <ArrowRightIcon className="h-6 w-6"></ArrowRightIcon>}
            Research
        </button>
      </div>
    )
}