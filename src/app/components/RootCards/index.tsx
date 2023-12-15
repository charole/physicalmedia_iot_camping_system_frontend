import { GasCard } from "./GasCard";
import { LedCard } from "./LedCard";
import { TempCard } from "./TempCard";

export const ROOT_CARD_LIST = [
  { component: LedCard, key: "led" },
  { component: GasCard, key: "gas" },
  { component: TempCard, key: "temp" },
];
