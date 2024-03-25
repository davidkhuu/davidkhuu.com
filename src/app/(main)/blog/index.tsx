import { BlogPosts } from "@/components/BlogPosts";
import PageHeader from "@/components/PageHeader";
import { getPosts } from "@/utils/usePosts";

export default function Blog() {
  const posts = getPosts();

  return (
    <>
      <PageHeader>Blog</PageHeader>
      <BlogPosts posts={posts} />
    </>
  );
}
