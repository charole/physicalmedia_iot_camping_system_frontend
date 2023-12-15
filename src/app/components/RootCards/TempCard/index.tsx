"use client";

import { useRouter } from "next/navigation";
import { Card } from "../../Card";

export function TempCard() {
  const router = useRouter();

  return (
    <Card title="온습도" onClick={() => router.push("/temp")}>
      <p>현재 온습도 수치 확인하러 가기</p>
    </Card>
  );
}
