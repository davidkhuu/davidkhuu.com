import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

import { MarkdownTheme } from "@/components/MarkdownTheme";
import PostTitle from "@/components/PostTitle";

const mdxctx = require.context("../../../posts", true, /\.mdx$/);
function useData(postId: string) {
  const MDKey = React.useMemo(
    () => mdxctx.keys().find((key) => key === `./${postId}.mdx`),
    [postId],
  );
  const MD = MDKey ? mdxctx(MDKey).default : null;
  const metadata = MDKey ? mdxctx(MDKey).metadata : null;

  if (!MD || !metadata) {
    return null;
  }
  return { MarkdownComponent: MD, metadata };
}

export default function Page() {
  const { post: postId } = useLocalSearchParams<{ post: string }>();
  const data = useData(postId);

  if (!data) {
    return <Text>Post not found</Text>;
  }

  const { MarkdownComponent, metadata } = data;
  return (
    <>
      <div className="pb-4">
        <PostTitle>{metadata.title}</PostTitle>
        <p className="text-slate-50">
          {new Date(metadata.date).toLocaleDateString("en-CA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <MarkdownTheme>
        <MarkdownComponent />
      </MarkdownTheme>
    </>
  );
}
