import { MarkdownTheme } from "@/components/MarkdownTheme";
import PageHeader from "@/components/PageHeader";

const mdxctx = require("./index.mdx");

export default function Page() {
  const MarkdownComponent = mdxctx.default;

  return (
    <>
      <PageHeader>About</PageHeader>
      <MarkdownTheme>
        <MarkdownComponent />
      </MarkdownTheme>
    </>
  );
}
