import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col space-y-4 mx-auto items-center mt-20">
      <h1 className="text-xl text-right md:text-center lg:text-3xl text-lime-500">
        !به دنیای هیجان‌انگیز بلاگ‌نویسی خوش آمدید
      </h1>
      <p className="w-full text-right md:text-center md:text-xl px-8 md:px-16">
        در اینجا می‌توانید ایده‌ها، تجربیات و داستان‌های خود را به اشتراک
        بگذارید. هر نوشته فرصتی برای تاثیرگذاری است
      </p>
      <Link
        href="/create-blog"
        className="bg-lime-500 hover:bg-lime-400 text-black py-2 px-4 rounded-xl"
      >
        نوشتن بلاگ
      </Link>
    </main>
  );
}
