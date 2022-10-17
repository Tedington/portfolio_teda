import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Fetching metadata of the admin . . .", 
      "Hi, The name's Teda",
      "Guy_Who_Loves_Computers :)",
      "<butLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
        <BackgroundCircles/>
      <h1><span>{text}</span>
      <Cursor cursorColor="aqua"/>
      </h1>
      
    </div>
  );
}
