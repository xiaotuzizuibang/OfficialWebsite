import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BugLive - 直播技术与数字人技术研发",
  description:
    "专注直播技术和数字人技术的研发，注重扩散模型在音视频技术中的应用。",
  keywords: ["直播技术", "数字人", "扩散模型", "音视频技术", "AI"],
  openGraph: {
    title: "BugLive - 直播技术与数字人技术研发",
    description:
      "专注直播技术和数字人技术的研发，注重扩散模型在音视频技术中的应用。",
    url: "https://buglive.icu",
    siteName: "BugLive",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
