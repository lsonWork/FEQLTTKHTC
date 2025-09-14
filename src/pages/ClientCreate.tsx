import { Button, TextInput } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as htmlDocx from "html-docx-js-typescript";
import { saveAs } from "file-saver";

export default function ClientCreate() {
  const navigate = useNavigate();
  const [formData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const printRef = useRef<HTMLDivElement>(null);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleExportDocx = async () => {
    if (!printRef.current) return;

    const htmlString = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              * {
                font-family: "Times New Roman", Times, serif !important;
              }
            </style>
          </head>
          <body>
            ${printRef.current.innerHTML}
          </body>
        </html>
      `;

    const blob = await htmlDocx.asBlob(htmlString);
    saveAs(blob, "report.docx");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Record created:", formData);
  };

  return (
    <div className="container mx-auto p-10">
      <div
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-2 cursor-pointer hover:scale-[1.01] duration-300 transition-all p-4">
        <IconArrowLeft />
        <span>Về trang quản lý</span>
      </div>
      <div className="w-full">
        <div className="w-full bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.2)] p-8">
          <form className="w-full" onSubmit={handleSubmit}>
            <div ref={printRef}>
              <div className="flex items-center gap-2">
                <span
                  className="text-[16px]"
                  style={{ fontFamily: "Times New Roman, Times, serif" }}>
                  Mã khách hàng:
                </span>
                <TextInput></TextInput>
              </div>
              <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
                Tạo phiếu thông tin khách hàng khách hàng tổ chức
              </h2>

              <div>
                <h2 className="text-xl font-bold my-4">
                  A. THÔNG TIN VỀ QUẢN LÝ
                </h2>
              </div>
              <div>
                <h2 className="text-xl font-bold my-4">
                  B. THÔNG TIN VỀ KHÁCH HÀNG
                </h2>
              </div>
              <div>
                <h2 className="text-xl font-bold my-4">C. QUAN HỆ TÍN DỤNG</h2>
              </div>
              <div>
                <h2 className="text-xl font-bold my-4">
                  D. TÌNH HÌNH GIAO DỊCH
                </h2>
              </div>
              <div>
                <h2 className="text-xl font-bold my-4">
                  E. PHÊ DUYỆT CỦA LÃNH ĐẠO PHÒNG KHDN
                </h2>
              </div>
              <div>
                <h2 className="text-xl font-bold my-4">
                  F. PHÊ DUYỆT CỦA GIÁM ĐỐC/PHÓ GIÁM ĐỐC PHỤ TRÁCH
                </h2>
              </div>
            </div>
            <Button variant="filled" className="mt-8">
              Tạo
            </Button>
            <Button className="mt-4" onClick={handleExportDocx}>
              Xuất DOCX
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
