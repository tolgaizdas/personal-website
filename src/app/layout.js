import "./globals.css";

export const metadata = {
  title: "Tolga Izdas",
  description:
    "Tolga Izdas is a computer science master's student and machine learning researcher at the University of Southern California.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
