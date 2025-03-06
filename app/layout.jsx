import localFont from "next/font/local";
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import "./globals.css";

const dekko = localFont({
  src: "./Dekko-Regular.ttf",
  display: "swap",
});
export const metadata = {
  title: "PartFunds",
  description:
    "Easily allocate, track, and visualize funds dedicated to others or specific purposes within your account—all in one simple web app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={dekko.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
