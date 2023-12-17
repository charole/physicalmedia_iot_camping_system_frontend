"use client";

import { Container } from "../components/Container";
import { Frame } from "../components/Frame";
import { SSRSafeSuspense } from "../components/SSRSafeSuspense";
import SpeechRecognition from "../components/SpeechRecognition";
import useColorStore from "../stores/color";

export default function LedPage() {
  const { color } = useColorStore();

  return (
    <Frame header={{ text: "조명 제어", useHome: true }}>
      <Container>
        <SSRSafeSuspense>
          <p style={{ color: `#${color}` }} className="font-bold">
            현재 적용된 조명 색상
          </p>
          <SpeechRecognition />
        </SSRSafeSuspense>
      </Container>
    </Frame>
  );
}
