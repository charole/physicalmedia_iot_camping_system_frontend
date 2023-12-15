import { ReactNode } from "react";
import { Header, HeaderProps } from "../Header";
import { PADDING_TOP_HEADER_HEIGHT } from "@/app/constant";

interface FrameProps {
  children: ReactNode;
  header?: HeaderProps;
}

export function Frame({ children, header }: FrameProps) {
  return (
    <main
      className={`max-w-[430px] mx-auto bg-white ${
        header && PADDING_TOP_HEADER_HEIGHT
      }`}
    >
      {header && <Header {...header} />}
      {children}
    </main>
  );
}
