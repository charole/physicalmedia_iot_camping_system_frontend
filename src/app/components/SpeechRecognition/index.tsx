"use client";

import { useState, useEffect } from "react";

export default function SpeechRecognition() {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");

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
      console.info("text?", text);
      if (text.replace(/\s/g, "").includes("빨간불")) {
        fetch("http://192.168.1.248/ledon");
      } else if (text.replace(/\s/g, "").includes("불꺼줘")) {
        fetch("http://192.168.1.248/ledoff");
      } else if (!!text) {
        fetch(`/api/qna?question=${text}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.info("data?", data);
            setColor(data.color);
          });
      }
    }
  }, [text, isListening]);

  return (
    <div>
      <button onClick={() => setIsListening((prevState) => !prevState)}>
        {isListening ? "Stop" : "Start"}
      </button>
      <p>{text}</p>
      <button type="button" onClick={() => setText("test")}>
        test
      </button>
      {error && <p>Error: {error}</p>}
      {color && <p style={{ background: `#${color}` }}>test color.</p>}
    </div>
  );
}
