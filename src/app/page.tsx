import { Suspense } from "react";
import { Container } from "./components/Container";
import { Frame } from "./components/Frame";
import SpeechRecognition from "./components/SpeechRecognition";
import { TestComponent } from "./components/TestComponent";
import { SSRSafeSuspense } from "./components/SSRSafeSuspense";

export default function Home() {
  return (
    <Frame header={{ text: "캠핑 IOT 시스템", useBack: false }}>
      <Container>
        <SSRSafeSuspense>
          <TestComponent />
          <SpeechRecognition />
        </SSRSafeSuspense>
      </Container>
    </Frame>
  );
}
