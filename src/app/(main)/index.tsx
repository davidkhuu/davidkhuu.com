import { Link } from "expo-router";

import { BlogPosts } from "@/components/BlogPosts";
import PageHeader from "@/components/PageHeader";

export default function App() {
  return (
    <>
      <Intro />
      <LatestPosts />
    </>
  );
}

function Intro() {
  return (
    <p className="text-white text-xl pb-4">
      Welcome to my little corner of the Internet.
    </p>
  );
}

function LatestPosts() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-50 pb-4">Latest Posts</h2>
      <BlogPosts showAll={false} />
    </>
  );
}
