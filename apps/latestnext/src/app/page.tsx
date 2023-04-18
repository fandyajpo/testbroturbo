import Link from "next/link";
import { Button } from "ui";

export default function Home() {
  return (
    <>
      <Link href={"/billing"}>Go</Link>
      <Button size={"sm"} variant={"subtle"}>
        Hai
      </Button>

      <div className="w-full h-screen">csacsacs</div>
    </>
  );
}
