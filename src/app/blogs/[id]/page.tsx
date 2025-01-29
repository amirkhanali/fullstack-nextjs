import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col text-right items-center justify-center mt-20 px-4">
      <article className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-right text-gray-700 leading-relaxed ">
          {post.body}
        </p>
      </article>
    </main>
  );
};

export default Page;
