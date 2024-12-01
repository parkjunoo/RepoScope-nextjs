import "./_styles/globals.css";
import "@radix-ui/themes/styles.css";
import QueryProvider from "./queryProvider";
import Header from "./_common/components/header/Header";
import { Theme } from "@radix-ui/themes";

export const metadata = {
  title: "RepoScope",
  description: "A GitHub repository search engine",
};
// #19202c
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="flex justify-center bg-slate-400"
        style={{
          backgroundColor: "#19202c",
        }}
      >
        <Theme
          accentColor="indigo"
          className="flex flex-col h-auto
          sm:w-full md:w-full lg:w-[1024px]"
          // width 고저
        >
          <QueryProvider>
            <Header />
            <div className="flex-auto bg-red-400">{children}</div>
          </QueryProvider>
        </Theme>
      </body>
    </html>
  );
}
