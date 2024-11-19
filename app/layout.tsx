import "./_styles/globals.css";
import QueryProviders from "./query-provider";
import "@radix-ui/themes/styles.css";
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
      <body className="bg-gray-800">
        <QueryProviders>
          <MainHeader />
          <div>{children}</div>
        </QueryProviders>
      </body>
    </html>
  );
}
