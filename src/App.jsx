import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <>
      <div className="flex-center h-[100vh]">
        <h1 className="text-3xl text-indigo-300">HELLO GSAP</h1>
      </div>
    </>
  );
}
