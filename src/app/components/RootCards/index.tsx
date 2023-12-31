import { DoorCard } from "./DoorCard";
import { GasCard } from "./GasCard";
import { LedCard } from "./LedCard";
import { SafeCard } from "./SafeCard";
import { TempCard } from "./TempCard";
import { WindowCard } from "./WindowCard";

export const ROOT_CARD_LIST = [
  { component: LedCard, key: "led" },
  { component: GasCard, key: "gas" },
  { component: TempCard, key: "temp" },
  { component: SafeCard, key: "safe" },
  { component: DoorCard, key: "door" },
  { component: WindowCard, key: "window" },
];
