import "./_styles/globals.css";
import "@radix-ui/themes/styles.css";
import QueryProvider from "./queryProvider";
import Header from "./_common/components/header/Header";
import { Theme } from "@radix-ui/themes";

export const metadata = {
  title: "RepoScope",
  description: "A GitHub repository search engine",
};
// #19202c dark
// #f1f3f4 light

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-[#f1f3f4] dark:bg-[#19202c] dark:text-white">
        <Theme className="flex flex-col h-auto sm:w-full md:w-full lg:w-[1024px]">
          <QueryProvider>
            <Header />
            <div className="px-4">{children}</div>
          </QueryProvider>
        </Theme>
      </body>
    </html>
  );
}
