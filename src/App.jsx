import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Cocktails/>
    </main>
  );
}
