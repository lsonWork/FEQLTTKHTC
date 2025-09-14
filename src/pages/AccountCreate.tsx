import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { usePostAccountApi } from "../api/usePostAccountApi";
import { showNotification } from "@mantine/notifications";
import { loaderStore } from "../store/loader-store";

export default function AccountCreate() {
  const { mutateAsync } = usePostAccountApi();
  const navigate = useNavigate();
  const { setIsLoading } = loaderStore();
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      username: (value) =>
        value.trim().length === 0 ? "Tên đăng nhập không được để trống" : null,
      password: (value) => {
        if (value.trim().length === 0) return "Mật khẩu không được để trống";
        if (value.length < 6) return "Mật khẩu phải ít nhất 6 ký tự";
        if (value.length > 20) return "Mật khẩu tối đa 20 ký tự";
        return null;
      },
    },
  });

  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      await mutateAsync(values);
      showNotification({
        title: "Thành công",
        message: "Tạo tài khoản mới thành công",
        color: "green",
      });
    } catch (error) {
      showNotification({
        title: "Thất bại",
        message: "Tạo tài khoản mới thất bại",
        color: "red",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-10">
      <div
        onClick={() => navigate("/admin")}
        className="inline-flex items-center gap-2 cursor-pointer hover:scale-[1.01] duration-300 transition-all p-4">
        <IconArrowLeft />
        <span>Về trang quản lý tài khoản</span>
      </div>
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Tạo tài khoản mới
        </h2>
        <div className="w-full bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.2)] p-8">
          <form className="w-full" onSubmit={form.onSubmit(handleSubmit)}>
            <div className="w-full flex flex-col gap-4">
              <TextInput
                className="w-1/5"
                label="Username"
                placeholder="Nhập tên đăng nhập"
                {...form.getInputProps("username")}
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                  }
                }}
              />
              <PasswordInput
                className="w-1/5"
                label="Password"
                placeholder="Nhập mật khẩu"
                {...form.getInputProps("password")}
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                  }
                }}
              />
            </div>
            <Button variant="filled" type="submit" className="mt-8">
              Tạo tài khoản mới
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
