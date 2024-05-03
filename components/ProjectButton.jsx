'use client'
import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    let showCredidts = document.getElementById('credits');
    let showLead = document.getElementById('lead');
    showCredidts.classList.toggle('hidden');
    showLead.classList.toggle('hidden');
    setIsToggled(!isToggled);
  };
  
  return (
    <button
      onClick={handleChange}
      className="text-neutral-400 block md:hidden mb-2">
        <div className="flex flex-row gap-1 justify-center">
        {isToggled ? <ArrowUpIcon className="h-6 w-6"></ArrowUpIcon> : <ArrowDownIcon className="h-6 w-6"></ArrowDownIcon>}
        {isToggled ? "View less" : "View more"}
        </div>
    </button>
  );
}
