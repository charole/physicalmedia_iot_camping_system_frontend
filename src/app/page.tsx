import { Container } from "./components/Container";
import { Frame } from "./components/Frame";
import { SSRSafeSuspense } from "./components/SSRSafeSuspense";
import { ROOT_CARD_LIST } from "./components/RootCards";

export default function Home() {
  return (
    <Frame header={{ text: "캠핑 IOT 시스템", useBack: false }}>
      <Container>
        <SSRSafeSuspense>
          <div className="flex flex-col gap-4">
            {ROOT_CARD_LIST.map(({ component: Component, key }) => (
              <Component key={key} />
            ))}
          </div>
        </SSRSafeSuspense>
      </Container>
    </Frame>
  );
}
