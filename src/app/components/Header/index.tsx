"use client";

import { useRouter } from "next/navigation";

export interface HeaderProps {
  text: string;
  useBack?: boolean;
}

export function Header({ text, useBack = true }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="bg-white text-gray-900 shadow-md w-full fixed top-0 left-0">
      <div className="container mx-auto flex justify-between p-4 items-center">
        {useBack ? (
          <button
            type="button"
            className="flex items-center focus:outline-none"
            onClick={() => router.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        ) : (
          <div className="w-5" />
        )}
        <h1 className="text-xl font-medium">{text}</h1>
        <div className="w-5" />
      </div>
    </header>
  );
}
