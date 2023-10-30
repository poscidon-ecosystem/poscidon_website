'use client';

import { useState } from "react";

export default function AccordionItem({title, content}) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
      setIsShowing(!isShowing);
    };
  
    return (
      <>
        <button
        className="border-slate-100 border-2 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-proximaSemiBold transition-all ease-in"
        onClick={toggle}
        type="button"
        >
          <span className="
          bg-gradient-to-r from-seaBlue-700 via-steelBlue to-seaBlue-500 inline-block text-transparent bg-clip-text
          ">{title}</span>
        </button>
        <div
        className="p-4 text-sm leading-normal text-black"
          style={{ display: isShowing ? "block" : "none" }}
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </>
    );
}