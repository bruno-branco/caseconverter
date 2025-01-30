"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const textArray = text.split("");
    console.log(textArray);
    const result = textArray.map((char, index) =>
      index % 2 === 0 ? char.toLowerCase() : char.toUpperCase(),
    );

    setConvertedText(result.join(""));
    console.log(result);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 max-w-[500px] mx-auto">
      <p className="text-6xl font-bold">Insert your text below</p>
      <Input
        className="mt-8 border-2 border-black rounded-md p-4 w-full"
        placeholder="Insert your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        className="mt-8 bg-black text-white rounded-md p-4"
        onClick={handleSubmit}
      >
        Convert
      </Button>
      <div className="mt-8 flex items-center justify-center">
        <p className="text-xl font-bold text-black">{convertedText}</p>
      </div>
    </div>
  );
}
