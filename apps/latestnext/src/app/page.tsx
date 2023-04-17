import { Inter } from "next/font/google";
import { MoreButton } from "ui";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MoreButton />
    </>
  );
}
