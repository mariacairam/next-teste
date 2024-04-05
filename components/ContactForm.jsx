"use client";

import { createEmailAction } from "@/app/contact/actions";
import { useState } from "react";

export function ContactForm(){
    const [state, setState] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        setState(true);
        const form = event.currentTarget;
        const formData = new FormData(form);
        const result = createEmailAction(formData);
        form.reset();
        setState(false);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-2/5">
            <div className="flex flex-row gap-4 justify-between">
                <div className="w-full">
                    <input type="text" name="first" placeholder="First name" className="bg-black px-2 py-1 border w-full"/>
                </div>
                <div className="w-full"> 
                    <input type="text" name="last" placeholder="Last name" className="bg-black px-2 py-1 border w-full"/>
                </div>
            </div>
            <div>
                <input type="text" name="email" placeholder="Email" className="bg-black px-2 py-1 border w-full"/>
            </div>
            <div className="w-full">
                <textarea type="text" name="message" placeholder="Message..." className="h-24 resize-none bg-black px-2 py-1 border w-full"/>
            </div>
            <button type="submit" disabled={state}
                className="bg-white text-black px-2 py-1 rounded-full w-24">
                Submit
            </button>
        </form>
    );
}