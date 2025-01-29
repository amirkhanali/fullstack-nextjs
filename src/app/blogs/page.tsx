import PostList from "@/components/PostList";
import { Suspense } from "react";

const Blogs = async () => {
  return (
    <main className="flex flex-col justify-center mt-20 items-center">
      <h2 className="font-extrabold text-5xl text-lime-500  text-center">
        تمام بلاگ ها
      </h2>
      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </main>
  );
};

export default Blogs;
