declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    webkitSpeechRecognition: typeof SpeechRecognition;
    SpeechRecognition: typeof SpeechRecognition;
  }
}

export {};
