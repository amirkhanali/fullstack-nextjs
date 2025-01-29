import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-4xl font-bold text-gray-900">
        صفحه مورد نظر یافت نشد
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        متأسفیم، اما بلاگ مورد نظر شما وجود ندارد یا حذف شده است.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        بازگشت به صفحه اصلی
      </Link>
    </main>
  );
};

export default NotFound;
