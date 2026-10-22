
"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.length >= 3 ? "." : prev + "."
      );
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-semibold">
        Loading{dots}
      </h1>
    </main>
  );
}
