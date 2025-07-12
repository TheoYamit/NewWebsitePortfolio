import { React, useState, useEffect } from 'react';
import { AppWindow } from 'lucide-react';
import { TerminalControlSvg } from '../../assets/TerminalSvgs/TerminalSvgs';



export function AboutMe() {

  const AnimatedTerminal = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = 'print("Hi! I am a filipino who practically lived in Canada my whole life. Starting University back in 2021, I am currently in my 4th year of Computer Science at the University of Calgary. Over the years, I became very interested in Artifical Intelligence as well as Medicine, so some of my projects became tailored to those. I am also planning on taking the MCAT, which I wanted to keep track of my study progress on the progress page, for that!")';
    const typingSpeed = 30;
    const deletingSpeed = 4;
    const pauseTime = 500;

    useEffect(() => {
      let timeout;
      if (!isDeleting && text !== fullText) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, typingSpeed);
      } 
      else if (!isDeleting && text === fullText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
      else if (isDeleting && text !== "") {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length - 1))
        }, deletingSpeed);
      }
      else if (isDeleting && text === "") {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, pauseTime)
      }
      return () => clearTimeout(timeout)
    }, [text, isDeleting]);

    return (
      <>
        <div className="flex flex-row w-full border p-1 rounded-tl-lg rounded-tr-lg bg-white">
          <TerminalControlSvg/>
        </div>
        <div className="sm:w-full bg-black rounded-bl-lg rounded-br-lg p-5 sm:h-44 md:h-44">
          <div className="text-green-500">
            <span>python &gt;&gt;&gt; </span>
            <span className="text-white">{text}</span>
          </div>
        </div>
      </>
    )

  };
  return (
    <>
      <div className="sm:block md:hidden mb-48 bg-gray-300 pb-28 pt-28">
        <div className="flex flex-col justify-center items-center p-10 gap-4">
          <div className="font-proximaBold text-6xl text-center w-full">About Me</div>
          <div className="flex flex-col justify-center items-center w-full">
            <AnimatedTerminal/>
          </div>

        </div>

      </div>

      <div className="sm:hidden md:block mb-48 bg-gray-300 pb-28 pt-28">
        <div className="flex flex-row justify-center items-center p-10">
          <div className="flex flex-col justify-center items-center w-1/2">
            <AnimatedTerminal/>
          </div>
          <div className="font-proximaBold text-6xl text-center w-1/2">About Me</div>
        </div>
      </div>
    </>
  )
}