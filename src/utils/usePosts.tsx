const mdxctx = require.context("../posts", true, /\.mdx$/);
export const getPosts = () => {
  return mdxctx
    .keys()
    .map((key) => mdxctx(key))
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
};

export const getPostsCount = () => {
  return mdxctx.keys().length;
};
