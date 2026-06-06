import "./globals.css";
import { AppProvider } from "@/lib/AppProvider";
import localFont from "next/font/local";
const nexa = localFont({
  src: [
    {
      path: "../public/fonts/NexaPro_Trial_Variable-Regular.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/NexaPro_Trial_Variable-Italic.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-nexa",
  display: "swap",
});
export const metadata = {
  title: "Business Setup SaaS Landing",
  description:
    "A modern landing website for business setup management software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${nexa.variable} font-nexa`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
