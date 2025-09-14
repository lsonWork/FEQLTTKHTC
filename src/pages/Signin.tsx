import { TextInput, Button, Title, Paper, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { usePostLoginApi } from "../api/usePostSigninApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { userStore } from "../store/user-store";
import { showNotification } from "@mantine/notifications";

export default function SignIn() {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      username: (value) => {
        if (!value.trim()) {
          return "Tên đăng nhập không được để trống";
        }
        return null;
      },
      password: (value) => {
        if (!value.trim()) {
          return "Mật khẩu không được để trống";
        }
        if (value.length < 6 || value.length > 20) {
          return "Mật khẩu phải từ 6 đến 20 ký tự";
        }
        return null;
      },
    },
  });
  const { mutateAsync } = usePostLoginApi();
  const navigate = useNavigate();
  const setUser = userStore((s) => s.setUser);
  const user = userStore((s) => s.user);

  const handleSubmit = async (values: any) => {
    try {
      const data = await mutateAsync(values);
      Cookies.set("access_token", data.data.access_token);
      setUser(data.data.user);
      showNotification({
        title: "Thành công",
        message: "Đăng nhập thành công",
        color: "green",
      });
      if (data.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      showNotification({
        title: "Thất bại",
        message: "Đăng nhập thất bại",
        color: "red",
      });
    }
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-gray-100 bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
      }}>
      <Paper
        shadow="xl"
        radius="lg"
        p="xl"
        className="w-[500px] bg-white backdrop-blur-md rounded-md">
        <Title order={2} className="text-center text-xl text-gray-800 py-6">
          Đăng nhập vào hệ thống
        </Title>

        <form
          className="w-full flex flex-col gap-4 items-center"
          onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            type="text"
            size="md"
            label="Tên đăng nhập"
            placeholder="Nhập username"
            {...form.getInputProps("username")}
            className="w-[80%]"
            classNames={{
              input:
                "w-full rounded-md border-2 border-gray-300 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300",
              label: "mb-4 font-medium text-gray-700",
              error: "text-red-500 text-sm mt-1",
            }}
            onKeyDown={(e) => {
              if (e.key === " ") {
                e.preventDefault();
              }
            }}
          />

          <PasswordInput
            size="md"
            label="Mật khẩu"
            onKeyDown={(e) => {
              if (e.key === " ") {
                e.preventDefault(); // chặn nhập space
              }
            }}
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
            fullWidth>
            Đăng nhập
          </Button>
        </form>
      </Paper>
    </div>
  );
}
