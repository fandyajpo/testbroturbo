"use client";

import { useEffect } from "react";
import { useCtx } from "ui";
export default function Home() {
  const { state, dispatch } = useCtx();
  useEffect(() => {
    console.log("HAHAHAH");
  }, []);

  return (
    <div className="w-full h-screen">
      <button
        onClick={() =>
          dispatch({
            type: "ID",
            payload: {
              id: "fasf",
            },
          })
        }
      >
        Press
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>More Latest</p>
    </div>
  );
}
