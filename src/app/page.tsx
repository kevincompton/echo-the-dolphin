import { Metadata } from "next";
import Echo from "@/app/components/Echo";

const postUrl = `${process.env["HOST"]}/api/echo`;

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `${process.env["HOST"]}/intro.gif`;
  return {
    title: "Echo the Dolphin",
    description: "Type something and Echo will say it back!",
    openGraph: {
      title: "Echo the Dolphin",
      images: [imageUrl],
    },
    other: {
      "fc:frame": "vNext",
      "fc:frame:image": imageUrl,
      "fc:frame:post_url": postUrl,
      "fc:frame:input:text": "Enter address or ENS...",
      "fc:frame:button:1": "Fetch NFTs",
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col text-center lg:p-16">
      <Echo />
    </main>
  );
}
