"use client";
import { useCtx } from "ui";

export default function Home() {
  const { state } = useCtx();
  return <div>{JSON.stringify(state.id, null, 2)}</div>;
}
