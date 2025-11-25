import { Inter } from "next/font/google";
import "./globals.css";
import { sanitizeHtml } from "../utils/sanitize";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tolga Izdas",
  description: "Personal website of Tolga Izdas",
};

// Theme script for dark/light mode switching
// This is trusted static content that we control, not user-generated content
const themeScript = `
  (function() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(themeScript),
          }}
        />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
