"use client";

import useColorStore from "@/app/stores/color";
import { Card } from "../Card";

export function TestComponent() {
  const { color } = useColorStore();

  return (
    <Card title="테스트 카드">
      <p style={{ color: `#${color}` }}>여기 내용 색상이 달라져요~!</p>
    </Card>
  );
}
