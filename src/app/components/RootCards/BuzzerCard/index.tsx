"use client";

import { useEffect, useState } from "react";
import { Card } from "../../Card";
import ToggleButton from "../../ToggleButton";

export function BuzzerCard() {
  const [isToggled, setIsToggled] = useState(false);

  const onChangeHandler = (toggled: boolean) => setIsToggled(toggled);

  useEffect(() => {
    if (isToggled) {
      fetch(`${process.env.NEXT_PUBLIC_ARDUINO_API_URL}/buzzer/on`);
    } else {
      fetch(`${process.env.NEXT_PUBLIC_ARDUINO_API_URL}/buzzer/off`);
    }
  }, [isToggled]);

  return (
    <Card title="부저">
      <ToggleButton
        id="buzzerToggle"
        isToggled={isToggled}
        onChangeHandler={onChangeHandler}
      />
    </Card>
  );
}
