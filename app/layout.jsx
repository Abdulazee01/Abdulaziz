import "./globals.css";
import PortfolioShell from "@/components/PortfolioShell";

export const metadata = {
  title: "Abdul Aziz: Product Designer & UI/UX Team Lead",
  description:
    "Product Designer & UI/UX Team Lead. Based in Pakistan, working globally.",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
