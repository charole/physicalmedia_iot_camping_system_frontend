"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TextAlert } from "./TextAlert";
import useVoiceStore from "@/app/stores/voice";
import useColorStore from "@/app/stores/color";

export default function SpeechRecognition() {
  const [isListening, setIsListening] = useState(false);
  const { text, setError, setText } = useVoiceStore();
  const { setColor } = useColorStore();

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (typeof window !== "undefined" && SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = "ko-KR";

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        setText(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        setError(event.error);
      };

      if (isListening) {
        recognition.start();
      } else {
        recognition.stop();
      }

      return () => recognition.abort();
    }
  }, [isListening]);

  useEffect(() => {
    if (!isListening) {
      if (text.replace(/\s/g, "").includes("불꺼줘")) {
        fetch(`${process.env.NEXT_PUBLIC_ARDUINO_API_URL}/led/off`);
      } else if (!!text) {
        fetch(`/api/qna?question=${text}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            fetch(
              `${process.env.NEXT_PUBLIC_ARDUINO_API_URL}/led/on?color=%23${data.color}`
            );
            setColor(data.color);
            setTimeout(() => {
              setText("");
            }, 1500);
          });
      }
    }
  }, [text, isListening]);

  return (
    <div className="absolute bottom-4 right-4">
      <button
        type="button"
        onClick={() => setIsListening((prevState) => !prevState)}
        className={`rounded-full bg-white p-2 drop-shadow ${
          isListening && "animate-pulse"
        }`}
      >
        <Image
          src="/icon/microphone.png"
          alt="microphone"
          width={32}
          height={32}
        />
      </button>
      {isListening && (
        <div className="absolute top-0 right-0 bottom-0 left-0 rounded-full border-4 border-t-transparent border-blue-400 animate-spin" />
      )}
      <TextAlert text={text} />
    </div>
  );
}
