"use client";

import Typewriter from "typewriter-effect";

export const TypewriterComponent = () => (
  <Typewriter
    options={{
        loop: true
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString("Hello World!")
        .pauseFor(1000)
        .deleteAll()
        .typeString(
          "This website was developed with <strong>Nextjs</strong> framework"
        )
        .pauseFor(2500)
        .deleteChars(16)
        .typeString("<strong>React</strong>")
        .pauseFor(2500)
        .deleteChars(5)
        .typeString("<strong>Tailwind</strong>")
        .pauseFor(2500)
        .deleteChars(14)
        .typeString("using <strong>Typescript</strong>")
        .pauseFor(2500)
        .deleteChars(16)
        .typeString("with arts made in <strong>Photoshop</strong>")
        .pauseFor(2500)
        .deleteChars(27)
        .typeString("by <strong>@andresinho20049</strong>")
        .pauseFor(3000)
        .start();
    }}
  />
);
