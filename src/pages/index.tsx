"use client";
import { lazy, Suspense, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import ChatBot from "react-chatbotify";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ChatBot = lazy(() => import("react-chatbotify"));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {isLoaded && (
        <Suspense fallback={<div>Loading...</div>}>
          <ChatBot />
        </Suspense>
      )}
    </main>
  );
}
