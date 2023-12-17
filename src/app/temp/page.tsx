"use client";

import { useState } from "react";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Frame } from "../components/Frame";
import { SSRSafeSuspense } from "../components/SSRSafeSuspense";
import { useEffectOnce } from "../common/hooks/useEffectOnce";
import { Skeleton } from "../components/Skeleton";

export default function GasPage() {
  const [temp, setTemp] = useState(0);
  const [humi, setHumi] = useState(0);

  const getTemp = () => {
    fetch(`${process.env.NEXT_PUBLIC_ARDUINO_API_URL}/temp`)
      .then((res) => res.json())
      .then((res) => {
        if (res.temp !== 255 || res.humi !== 255) {
          setTemp(res.temp);
          setHumi(res.humi);
        } else {
          setTemp(0);
          setHumi(0);
        }
      });
  };

  useEffectOnce(() => {
    getTemp();
    const interval = setInterval(() => {
      getTemp();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Frame header={{ text: "온습도 수치", useHome: true }}>
      <Container>
        <SSRSafeSuspense>
          <Card title="현재 온습도 수치">
            <p className="flex items-center mb-2">
              현재 온도 : {temp ? temp : <Skeleton />}
            </p>
            <p className="flex items-center">
              현재 습도 : {humi ? humi : <Skeleton />}
            </p>
          </Card>
        </SSRSafeSuspense>
      </Container>
    </Frame>
  );
}
