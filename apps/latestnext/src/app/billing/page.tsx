import { Suspense } from "react";
import Loading from "./loading";
export default async function Home() {
  const fetcher = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json",
    {
      method: "GET",
    }
  );

  const a = await fetcher.json();

  return (
    <>
      <Suspense fallback={<Loading />}>{JSON.stringify(a, null, 2)}</Suspense>
    </>
  );
}
