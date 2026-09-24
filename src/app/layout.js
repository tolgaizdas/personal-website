import "./globals.css";

export const metadata = {
  title: "Tolga Izdas",
  description:
    "Tolga Izdas is a computer science master's student and machine learning researcher at the University of Southern California.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            const saved = localStorage.getItem('theme');
            document.documentElement.dataset.theme = saved === 'dark' ? 'dark' : 'light';
          } catch {
            document.documentElement.dataset.theme = 'light';
          }
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
