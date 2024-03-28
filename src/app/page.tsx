import { Metadata } from "next";
import Echo from "@/app/components/Echo";

const postUrl = `${process.env["HOST"]}/api/echo`;

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `https://storage.googleapis.com/papyrus_images/ca02afacca6e22c8cd739469ffecf355.gif`;
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
      "fc:frame:input:text": "Enter address or Eth Address...",
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
