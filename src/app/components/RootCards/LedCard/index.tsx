"use client";

import useColorStore from "@/app/stores/color";
import { Card } from "../../Card";
import { useRouter } from "next/navigation";

export function LedCard() {
  const router = useRouter();

  return (
    <Card title="조명 제어" onClick={() => router.push("/led")}>
      <p>조명 변경하러 가기</p>
    </Card>
  );
}
