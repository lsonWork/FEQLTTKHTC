import { Button, TextInput } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientCreate() {
  const navigate = useNavigate();
  const [formData, ] = useState({
    name: "",
    email: "",
    age: "",
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Record created:", formData);
  };

  return (
    <div className="container mx-auto p-10">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer hover:scale-[1.01] duration-300 transition-all p-4"
      >
        <IconArrowLeft />
        <span>Về trang quản lý</span>
      </div>
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Tạo thông tin khách hàng
        </h2>
        <div className="w-full bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.2)] p-8">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full flex items-center gap-10">
              <TextInput
                className="w-1/5"
                label="Tên khách hàng"
                placeholder="Input placeholder"
              />
              <TextInput
                className="w-1/5"
                label="Email"
                placeholder="Input placeholder"
              />
              <TextInput
                className="w-1/5"
                label="Số điện thoại"
                placeholder="Input placeholder"
              />
            </div>
            <Button variant="filled" className="mt-8">
              Tạo
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
