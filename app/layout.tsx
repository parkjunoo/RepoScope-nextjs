import "./_styles/globals.css";
import "@radix-ui/themes/styles.css";
import QueryProviders from "./query-provider";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import MainHeader from "./_components/MainHeader";

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
        <ThemeProvider>
          <Theme
            accentColor="mint"
            grayColor="gray"
            panelBackground="solid"
            scaling="100%"
            radius="full"
            style={{
              backgroundColor: "#1f2937",
            }}
          >
            <QueryProviders>
              <MainHeader />
              <div>{children}</div>
            </QueryProviders>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
