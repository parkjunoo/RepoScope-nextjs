import "./_styles/globals.css";
import "@radix-ui/themes/styles.css";
import QueryProvider from "./queryProvider";
import Header from "./_common/components/header/header";
import { Theme } from "@radix-ui/themes";

export const metadata = {
  title: "RepoScope",
  description: "A GitHub repository search engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="indigo" className="flex flex-col">
          <QueryProvider>
            <Header />
            <div
              className="
              flex-1
              dark:bg-gray-800
              dark:text-white
            "
            >
              {children}
            </div>
          </QueryProvider>
        </Theme>
      </body>
    </html>
  );
}
