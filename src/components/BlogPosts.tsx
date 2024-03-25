import { Link } from "expo-router";
import { FlatList } from "react-native";

import { getPosts } from "@/utils/usePosts";

export function BlogPosts({ showAll = true }: { showAll?: boolean }) {
  const posts = getPosts();
  const postsToDisplay = showAll ? posts : posts.slice(0, 3);
  // console.log("posts", postsToDisplay);
  return (
    <>
      <FlatList data={postsToDisplay} renderItem={BlogPost} />
      {!showAll && posts.length > postsToDisplay.length ? (
        <div className="flex pl-2">
          <Link push href="/blog/" className="text-white p-2 hover:underline">
            See all posts
          </Link>
        </div>
      ) : null}
    </>
  );
}

function BlogPost({ item }) {
  const date = new Date(item.metadata.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <Link
      href={{
        pathname: "/blog/[post]",
        params: { post: item.metadata.slug },
      }}
      className="rounded-lg  px-4 py-2 text-white mb-2 hover:bg-sky-800 hover:transition duration-1000"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="">
          <b className="text-lg text-slate-50">
            {item.metadata.title}
            {"\n"}
          </b>
          <p className="text-slate-50">{item.metadata.description}</p>
        </div>
        <p className="text-slate-50">{date}</p>
      </div>
    </Link>
  );
}
