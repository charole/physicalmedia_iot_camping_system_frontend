"use client";

import { useRouter } from "next/navigation";
import { Card } from "../../Card";

export function GasCard() {
  const router = useRouter();

  return (
    <Card title="일산화탄소" onClick={() => router.push("/gas")}>
      <p>현재 일산화탄소 수치 확인하러 가기</p>
    </Card>
  );
}
