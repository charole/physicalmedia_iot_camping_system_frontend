"use client";

import { useRouter } from "next/navigation";

import HomeIcon from "/public/icon/home.svg";
import BackIcon from "/public/icon/back.svg";

export interface HeaderProps {
  text: string;
  useBack?: boolean;
  useHome?: boolean;
}

function HeaderLeftButton({
  useHome,
  useBack,
}: {
  useHome: boolean;
  useBack: boolean;
}) {
  const router = useRouter();

  if (useHome) {
    return (
      <HomeIcon
        className="w-[24px] h-[24px]"
        onClick={() => router.push("/")}
      />
    );
  }
  if (useBack) {
    return (
      <BackIcon className="w-[24px] h-[24px]" onClick={() => router.back()} />
    );
  }
  return <div className="w-5" />;
}

export function Header({ text, useBack = true, useHome = false }: HeaderProps) {
  return (
    <header className="bg-white text-gray-900 shadow-md w-full fixed top-0 left-0">
      <div className="container mx-auto flex justify-between p-4 items-center">
        <HeaderLeftButton useHome={useHome} useBack={useBack} />
        <h1 className="text-xl font-medium">{text}</h1>
        <div className="w-5" />
      </div>
    </header>
  );
}
