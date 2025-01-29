import { createBlog } from "@/actions/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Form = () => {
  return (
    <form action={createBlog} className="grid gap-4">
      <Input
        dir="rtl"
        className="border border-gray-300 rounded-lg p-3 text-right text-gray-700 focus:ring-2 focus:ring-blue-400"
        name="title"
        required
        placeholder="عنوان بلاگ خود را بنویسید"
      />
      <Textarea
        dir="rtl"
        className="border border-gray-300 rounded-lg p-3 text-right text-gray-700 focus:ring-2 focus:ring-blue-400"
        name="body"
        required
        rows={6}
        placeholder="بلاگ خود را بنویسید"
      />
      <Button className="w-full bg-lime-300 hover:bg-lime-400 text-black py-2 rounded-lg font-semibold transition duration-300">
        ثبت بلاگ
      </Button>
    </form>
  );
};

export default Form;
