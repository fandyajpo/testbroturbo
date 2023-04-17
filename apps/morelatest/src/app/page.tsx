"use client";

import { useState } from "react";

export default function Home() {
  const [s, setS] = useState(0);
  return <div>{s}</div>;
}
