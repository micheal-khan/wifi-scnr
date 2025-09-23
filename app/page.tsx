"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function Page() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchHello = async () => {
      try {
        const response = await invoke<string>("hello_world");
        setMessage(response);
      } catch (err) {
        console.error("Error calling Tauri:", err);
        setMessage("Failed to fetch from Tauri");
      }
    };

    fetchHello();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Tauri + Next.js Demo</h1>
      <p className="mt-4 text-lg">{message || "Loading..."}</p>
    </div>
  );
}