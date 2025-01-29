import Form from "@/components/Form";

const CreatePost = async () => {
  return (
    <main className="w-full flex flex-col items-center justify-center mt-20 px-4">
      <section className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-lime-500 text-center mb-4">
          ایجاد بلاگ جدید
        </h1>
        <Form />
      </section>
    </main>
  );
};

export default CreatePost;
