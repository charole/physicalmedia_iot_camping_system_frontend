"use client";

import { useEffect, useState } from "react";
import { Card } from "../../Card";
import ToggleButton from "../../ToggleButton";

export function DoorCard() {
  const [isToggled, setIsToggled] = useState(false);

  const onChangeHandler = (toggled: boolean) => setIsToggled(toggled);

  useEffect(() => {
    if (isToggled) {
      fetch(`${process.env.NEXT_PUBLIC_ARDUINO_API_URL}/door/open`);
    } else {
      fetch(`${process.env.NEXT_PUBLIC_ARDUINO_API_URL}/door/close`);
    }
  }, [isToggled]);

  return (
    <Card title="문 제어">
      <ToggleButton
        id="doorToggle"
        isToggled={isToggled}
        onChangeHandler={onChangeHandler}
      />
    </Card>
  );
}
