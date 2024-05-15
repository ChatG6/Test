import type { Metadata } from "next";
import "./main.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A sample to test autoscaling group functionality of instance refresh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header>
          <p>Test</p>
          <div>
            <a href="/">Home</a>
            <a href="/db/">Database</a>
            <a href="/pages/About">About</a>
            <a href="/pages/Support">Support</a>
          </div>
        </Header>
        {children}
      </body>
    </html>
  );
}
