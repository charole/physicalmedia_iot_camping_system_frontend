"use client";

import { useEffect, useState } from "react";
import { Card } from "../../Card";
import ToggleButton from "../../ToggleButton";

export function WindowCard() {
  const [isToggled, setIsToggled] = useState(false);

  const onChangeHandler = (toggled: boolean) => setIsToggled(toggled);

  useEffect(() => {
    if (isToggled) {
      fetch(`${process.env.NEXT_PUBLIC_ARDUINO_API_URL}/window/open`);
    } else {
      fetch(`${process.env.NEXT_PUBLIC_ARDUINO_API_URL}/window/close`);
    }
  }, [isToggled]);

  return (
    <Card title="창문 제어">
      <ToggleButton
        id="windowToggle"
        isToggled={isToggled}
        onChangeHandler={onChangeHandler}
      />
    </Card>
  );
}
