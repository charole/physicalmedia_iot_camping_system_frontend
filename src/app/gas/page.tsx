"use client";

import { useState } from "react";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Frame } from "../components/Frame";
import { SSRSafeSuspense } from "../components/SSRSafeSuspense";
import { useEffectOnce } from "../common/hooks/useEffectOnce";
import { Skeleton } from "../components/Skeleton";

export default function GasPage() {
  const [gas, setGas] = useState("");

  const getGas = () => {
    fetch(`${process.env.NEXT_PUBLIC_ARDUINO_API_URL}/gas`)
      .then((res) => res.text())
      .then((res) => {
        setGas(res);
      });
  };

  useEffectOnce(() => {
    getGas();
    const interval = setInterval(() => {
      getGas();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Frame header={{ text: "일산화탄소 수치", useHome: true }}>
      <Container>
        <SSRSafeSuspense>
          <Card title="현재 일산화탄소 수치">{gas ? gas : <Skeleton />}</Card>
        </SSRSafeSuspense>
      </Container>
    </Frame>
  );
}
