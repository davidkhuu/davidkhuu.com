const upstreamTransformer = require('@expo/metro-config/babel-transformer');
const MdxTransformer = require("@bacons/mdx/metro-transformer");

module.exports.transform = async (props) => {
  const remarkFrontmatter = await import("remark-frontmatter");
  const remarkMdxFrontmatter = await import("remark-mdx-frontmatter");

  const mdxTransformer = MdxTransformer.createTransformer({
    remarkPlugins: [[
      remarkFrontmatter,
      remarkMdxFrontmatter,
      { name: 'meta' },
    ]],
  });

  // Then pass it to the upstream transformer.
  return upstreamTransformer.transform(
    // Transpile MDX first.
    await mdxTransformer.transform(props)
  );
};