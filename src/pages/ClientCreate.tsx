import { Button, Tabs, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientCreate() {
  const navigate = useNavigate();
  const form = useForm({
    // Giá trị mặc định
    initialValues: {
      aCode: "",
      aUnit: "",
      aRoom: "",
      aPeople: "",
      aLeader: "",
      aDebtGroup: "",
      aXHTD: "",
      aClientGroup: "",
      aDebtAbility: "",
      aWarning1: "",
      aWarning2: "",
      aWarning3: "",
      bClientName: "",
      bCIF: "",
      bClientCentreAddress: "",
      bClientOfficeAddress: "",
      bNumberDKKD: "",
    },

    // Validate
    // validate: {
    //   username: (value) =>
    //     value.trim().length < 3 ? "Username phải ít nhất 3 ký tự" : null,
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email không hợp lệ"),
    //   age: (value) => (value < 18 ? "Phải >= 18 tuổi" : null),
    // },
  });

  const printRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (values: any) => {
    console.log("Record created:", values);
  };

  return (
    <div className="container mx-auto">
      <div
        onClick={() => navigate("/")}
        className="no-print inline-flex items-center gap-2 cursor-pointer hover:scale-[1.01] duration-300 transition-all p-4">
        <IconArrowLeft />
        <span>Về trang quản lý</span>
      </div>
      <div className="w-full">
        <div className="w-full h-auto bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.2)] p-8">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <button type="submit">Submit</button>
            <div
              ref={printRef}
              id="print-area"
              style={{ fontFamily: "Times New Roman, Times, serif" }}>
              <div className="flex items-center gap-2">
                <span className="text-[12pt]">Mã khách hàng:</span>
                <TextInput {...form.getInputProps("aCode")} />
              </div>
              <h2 className="text-[13pt] font-bold text-center my-8">
                PHIẾU QUẢN LÝ THÔNG TIN KHÁCH HÀNG TỔ CHỨC
              </h2>
              <div id="a-thong-tin-quan-ly">
                <h2 className="text-[13pt] font-bold my-4">
                  A. THÔNG TIN QUẢN LÝ
                </h2>
                <div>
                  <table
                    style={{
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      tableLayout: "fixed",
                      width: "100%",
                    }}>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}>
                          Đơn vị quản lý
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <input
                            {...form.getInputProps("aUnit")}
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              lineHeight: "1",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </td>
                        <td
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}>
                          Phòng KH quản lý
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <input
                            {...form.getInputProps("aRoom")}
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              lineHeight: "1",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ border: "1px solid black" }}>
                          Cán bộ Phòng KH quản lý
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <input
                            {...form.getInputProps("aPeople")}
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              lineHeight: "1",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          Lãnh đạo Phòng KH
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <input
                            {...form.getInputProps("aLeader")}
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              lineHeight: "1",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ border: "1px solid black" }}>Nhóm nợ</td>
                        <td style={{ border: "1px solid black" }}>
                          <input
                            {...form.getInputProps("aDebtGroup")}
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              lineHeight: "1",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          XHTD hiện hành
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <input
                            {...form.getInputProps("aXHTD")}
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              lineHeight: "1",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ border: "1px solid black" }}>
                          Phân nhóm KH
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <input
                            {...form.getInputProps("aClientGroup")}
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              lineHeight: "1",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </td>
                        <td
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}>
                          Phân loại KH khả năng thu nợ
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <input
                            {...form.getInputProps("aDebtAbility")}
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              lineHeight: "1",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ border: "1px solid black" }}>
                          Loại cảnh báo (nếu có)
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <input
                            {...form.getInputProps("aWarning1")}
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              lineHeight: "1",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <input
                            {...form.getInputProps("aWarning2")}
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              lineHeight: "1",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <input
                            {...form.getInputProps("aWarning3")}
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              lineHeight: "1",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h2 className="text-[13pt] font-bold my-4">
                  B. THÔNG TIN VỀ KHÁCH HÀNG
                </h2>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    1. Thông tin chung của khách hàng
                  </h2>
                  <div>
                    {/* <table
                      style={{
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        width: "100%",
                      }}>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "22%",
                              border: "1px solid black",
                            }}>
                            <span>Tên khách hàng</span>
                            <span>(Tiếng Việt-Tiếng Anh-Viết tắt)</span>
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            <input
                              {...form.getInputProps("aClientName")}
                              style={{
                                border: "none",
                                width: "100%",
                                padding: 0,
                                margin: 0,
                                fontSize: "12pt",
                                height: "auto",
                                outline: "none",
                              }}
                            />
                          </td>
                          <td
                            style={{
                              textAlign: "center",
                              width: "10%",
                              border: "1px solid black",
                            }}>
                            CIF
                          </td>
                          <td
                            style={{ border: "1px solid black", width: "12%" }}>
                            <input
                              {...form.getInputProps("aCIF")}
                              style={{
                                textAlign: "center",
                                border: "none",
                                width: "100%",
                                padding: 0,
                                margin: 0,
                                fontSize: "12pt",
                                lineHeight: "1",
                                height: "auto",
                                outline: "none",
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "22%",
                              border: "1px solid black",
                            }}>
                            <span>Địa chỉ trụ sở</span>
                          </td>
                          <td
                            style={{ border: "1px solid black", width: "78%" }}>
                            <input
                              {...form.getInputProps("aClientCentreAddress")}
                              style={{
                                border: "none",
                                width: "100%",
                                padding: 0,
                                margin: 0,
                                fontSize: "12pt",
                                lineHeight: "1",
                                height: "auto",
                                outline: "none",
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "22%",
                              border: "1px solid black",
                            }}>
                            <span>Địa chỉ văn phòng</span>
                          </td>
                          <td
                            style={{ border: "1px solid black", width: "78%" }}>
                            <input
                              {...form.getInputProps("aClientOfficeAddress")}
                              style={{
                                border: "none",
                                width: "100%",
                                padding: 0,
                                margin: 0,
                                fontSize: "12pt",
                                lineHeight: "1",
                                height: "auto",
                                outline: "none",
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "25%",
                              border: "1px solid black",
                              textAlign: "center",
                            }}>
                            Đăng ký kinh doanh
                          </td>
                          <td
                            style={{
                              width: "25%",
                              border: "1px solid black",
                              textAlign: "center",
                            }}>
                            Số ĐKKD
                          </td>
                          <td
                            style={{
                              width: "25%",
                              border: "1px solid black",
                              textAlign: "center",
                            }}>
                            Ngày đăng ký KD (lần đầu, ngày đăng ký gần nhất)
                          </td>
                          <td
                            style={{
                              width: "25%",
                              border: "1px solid black",
                              textAlign: "center",
                            }}>
                            Nơi cấp
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
                    <div className="border border-black">
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Tên khách hàng (Tiếng Việt-Tiếng Anh-Viết tắt)
                        </div>
                        <div className="col-span-4 border-r border-black px-1">
                          <input
                            {...form.getInputProps("bClientName")}
                            style={{
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </div>
                        <div className="col-span-1 border-r border-black px-1">
                          CIF
                        </div>
                        <div className="col-span-1 border-black px-1">
                          <input
                            {...form.getInputProps("bCIF")}
                            style={{
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Địa chỉ trụ sở
                        </div>
                        <div className="col-span-6 border-black px-1">
                          <input
                            {...form.getInputProps("bClientCentreAddress")}
                            style={{
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Địa chỉ văn phòng
                        </div>
                        <div className="col-span-6 border-black px-1">
                          <input
                            {...form.getInputProps("bClientOfficeAddress")}
                            style={{
                              border: "none",
                              width: "100%",
                              padding: 0,
                              margin: 0,
                              fontSize: "12pt",
                              height: "auto",
                              outline: "none",
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Đăng ký kinh doanh
                        </div>
                        <div className="col-span-6 grid grid-cols-8 border-black px-1">
                          <div className="col-span-2 border-r border-black px-1 text-center">
                            Số ĐKKD
                          </div>
                          <div className="col-span-4 border-r border-black px-1 text-center">
                            Ngày đăng ký KD (lần đầu, ngày đăng ký gần nhất)
                          </div>
                          <div className="col-span-2 border-black px-1 text-center">
                            Nơi cấp
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          
                        </div>
                        <div className="col-span-6 grid grid-cols-8 border-black px-1">
                          <div className="col-span-2 border-r border-black px-1 text-center">
                            Số ĐKKD
                          </div>
                          <div className="col-span-4 border-r border-black px-1 text-center">
                            Ngày đăng ký KD (lần đầu, ngày đăng ký gần nhất)
                          </div>
                          <div className="col-span-2 border-black px-1 text-center">
                            Nơi cấp
                          </div>
                        </div>
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    2. Tình hình hoạt động, tài chính của khách hàng
                  </h2>
                </div>
              </div>
              <div>
                <h2 className="text-[13pt] font-bold my-4">
                  C. QUAN HỆ TÍN DỤNG
                </h2>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    1. Thông tin về tình hình tín dụng tại Chi nhánh
                  </h2>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    3. Quan hệ của Khách hàng với các TCTD khác
                  </h2>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    4. Quan hệ của nhóm khách hàng liên quan tại Chi nhánh
                  </h2>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    5. Biện pháp bảo đảm
                  </h2>
                </div>
                <div>
                  <span className="text-[13pt] font-bold mr-1">
                    6. Tình hình thực hiện các điều kiện tín dụng, thương mại
                  </span>
                  <span className="text-[13pt]">
                    (Các điều kiện trọng yếu, đặc thù, cần lưu ý và các điều
                    kiện vi phạm nếu có)
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-[13pt] font-bold my-4">
                  D. TÌNH HÌNH GIAO DỊCH
                </h2>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    1. Tình hình giao dịch, kế hoạch kinh doanh với khách hàng
                  </h2>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    2. Chính sách giá đang áp dụng
                  </h2>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    2. Các sản phẩm đang sử dụng khác (bao gồm cả bán chéo)
                  </h2>
                </div>
                <div className="">
                  <span className="text-[13pt] font-bold mr-1">
                    3. Công việc triển khai trong thời gian tới
                  </span>
                  <span>(các cơ hội, dự án tiềm năng…)</span>
                </div>
              </div>
              <div>
                <h2 className="text-[13pt] font-bold my-4">
                  E. PHÊ DUYỆT CỦA LÃNH ĐẠO PHÒNG KHDN
                </h2>
              </div>
              <div>
                <h2 className="text-[13pt] font-bold my-4">
                  F. PHÊ DUYỆT CỦA GIÁM ĐỐC/PHÓ GIÁM ĐỐC PHỤ TRÁCH
                </h2>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
