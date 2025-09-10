import { TextInput, Button, Title, Paper } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function SignIn() {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      username: (value) =>
        value.trim().length < 3
          ? "Tên đăng nhập phải có ít nhất 3 ký tự"
          : null,
      password: (value) =>
        value.length < 6 ? "Mật khẩu phải có ít nhất 6 ký tự" : null,
    },
  });

  const handleSubmit = (values: { username: string; password: string }) => {
    console.log("Đăng nhập với:", values);
    // Gọi API hoặc xử lý logic ở đây
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-gray-100 bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <Paper
        shadow="xl"
        radius="lg"
        p="xl"
        className="w-[500px] bg-white backdrop-blur-md rounded-md"
      >
        <Title order={2} className="text-center text-xl text-gray-800 py-6">
          Đăng nhập vào hệ thống
        </Title>

        <form
          className="w-full flex flex-col gap-4 items-center"
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <TextInput
            type="text"
            size="md"
            label="Tên đăng nhập"
            placeholder="Nhập username"
            {...form.getInputProps("username")}
            className="w-[80%]"
            classNames={{
              input:
                "w-full rounded-md border-2 border-gray-300 py-2 px-6 focus:border-blue-500 focus:ring-1 focus:ring-blue-300",
              label: "mb-4 font-medium text-gray-700",
              error: "text-red-500 text-sm mt-1",
            }}
          />

          <TextInput
            type="password"
            size="md"
            label="Mật khẩu"
            placeholder="Nhập password"
            {...form.getInputProps("password")}
            className="w-[80%]"
            classNames={{
              input:
                "w-full rounded-md border-2 border-gray-300 py-2 px-6 focus:border-blue-500 focus:ring-1 focus:ring-blue-300",
              label: "mb-4 font-medium text-gray-700",
              error: "text-red-500 text-sm mt-1",
            }}
          />

          <Button
            type="submit"
            radius="md"
            size="md"
            className="mt-2 w-[80%] bg-green-700 text-white mb-2 font-medium transition-all duration-200 hover:scale-[1.02]"
            fullWidth
          >
            Đăng nhập
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600 pb-6 cursor-pointer">
          Gửi yêu cầu reset mật khẩu
        </div>
      </Paper>
    </div>
  );
}
