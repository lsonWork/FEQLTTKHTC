import { useForm } from "@mantine/form";
import { IconArrowLeft, IconFile, IconPrinter } from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomInput } from "./components/CustomInput";
import CapitalStructure from "./components/CapitalStructure";
import ThreeYearTable from "./components/ThreeYearTable";
import BranchCreditInfo from "./components/BranchCreditInfo";
import OtherTCTD from "./components/OtherTCTD";
import RelatedClientBranch from "./components/RelatedClientBranch";
import { EnsureSolution } from "./components/EnsureSolution";
import { Condition } from "./components/Condition";
import { Approve } from "./components/Approve";
import { UpComing } from "./components/UpComing";
import { CurrentPrice } from "./components/CurrentPrice";
import { ComplexSituation } from "./components/ComplexSituation";
import { loaderStore } from "../store/loader-store";
import { showNotification } from "@mantine/notifications";
import { useGetDocumentByIdApi } from "../api/useGetDocumentByIdApi";
import {
  usePatchDocumentApi,
  type PatchDocumentDTO,
} from "../api/usePatchDocumentApi";

export default function ClientView() {
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const {
    data: documentRawData,
    isSuccess,
    isLoading,
  } = useGetDocumentByIdApi(id || "");
  const dataDocument = documentRawData?.data;
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
      bNumberDKKDDate: "",
      bNumberDKKDPlace: "",
      bClientIndustry: "",
      bClientLabor: "",
      bRepLegal: "",
      bRole: "",
      bDecisionName: "",
      bDecisionBirth: "",
      bContactName: "",
      bContactPhone: "",
      bContactRole: "",
      bNote: "",
      bMainActivity: "",
      bInfra: "",
      bSupplyChain: "",
      bOrientationVCB: "",
      bCoCauVon: [] as {
        col1: string;
        col2: string;
        col3: string;
        col4: string;
      }[],
      bTinhHinhTaiChinhFirst: "",
      bTinhHinhTaiChinhSecond: "",
      bTinhHinhTaiChinhThird: "",
      bTinhHinhTaiChinh: [] as {
        col1: string;
        col2: string;
        col3: string;
        col4: string;
      }[],
      cTinhHinhTinDungTaiChiNhanh: [] as {
        col1: string;
        col2: string;
        col3: string;
        col4: string;
        col5: string;
      }[],
      cPheDuyet: "",
      cThoiHanHieuLuc: "",
      cOtherTCTD: [] as {
        col1: string;
        col2: string;
        col3: string;
        col4: string;
        col5: string;
        col6: string;
        col7: string;
      }[],
      cRelatedClientBranch: [] as {
        col1: string;
        col2: string;
        col3: string;
        col4: string;
        col5: string;
        col6: string;
        col7: string;
        col8: string;
      }[],
      cEnsureSolution: [] as {
        col1: string;
        col2: string;
        col3: string;
        col4: string;
        col5: string;
        col6: string;
      }[],
      cCondition: [
        { col2: "", col3: "" },
        { col2: "", col3: "" },
      ],
      cLeaderApprove: [
        { col2: "", col3: "" },
        { col2: "", col3: "" },
      ],
      cDirectorApprove: [
        { col2: "", col3: "" },
        { col2: "", col3: "" },
      ],
      dUpComing: [] as {
        col1: string;
        col2: string;
        col3: string;
        col4: string;
        col5: string;
      }[],
      dCurrentPrice: [] as {
        col1: string;
        col2: string;
        col3: string;
        col4: string;
        col5: string;
      }[],
      dComplexFirst: "",
      dComplexSecond: "",
      dComplexThird: "",
      dComplexSituation: [] as {
        col1: string;
        col2: string;
        col3: string;
        col4: string;
        col5: string;
        col6: string;
        col7: string;
        col8: string;
        col9: string;
        col10: string;
      }[],
    },
  });

  const { setIsLoading } = loaderStore();

  useEffect(() => {
    if (isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (isSuccess) {
      form.setValues(JSON.parse(dataDocument?.content || "{}"));
    }
  }, [isSuccess, isLoading]);

  const printRef = useRef<HTMLDivElement>(null);
  const { mutateAsync: patchDocument } = usePatchDocumentApi(id || "");

  const handleSave = async () => {
    // setError(null);
    // if (name.trim().length === 0) {
    //   setError("Tên tài liệu không được để trống");
    //   return;
    // }
    const newDocument = {
      name: form.values.bClientName,
      content: JSON.stringify(form.values),
      cif: form.values.bCIF,
      accountId: JSON.parse(localStorage.getItem("user") || "{}").id,
    };

    try {
      loaderStore.setState({ isLoading: true });
      await patchDocument(newDocument as PatchDocumentDTO);
      showNotification({
        title: "Thành công",
        message: "Cập nhật tài liệu thành công",
        color: "green",
      });
      navigate("/");
    } catch (error) {
      return error;
    } finally {
      loaderStore.setState({ isLoading: false });
    }
  };

  return (
    <div className="container mx-auto">
      <div
        onClick={() => navigate("/")}
        className="no-print inline-flex items-center gap-2 cursor-pointer hover:scale-[1.01] duration-300 transition-all p-4"
      >
        <IconArrowLeft />
        <span>Về trang quản lý</span>
      </div>
      <div className="w-full">
        <div className="w-full h-auto relative bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.2)] p-8">
          <form onSubmit={form.onSubmit(handleSave)}>
            <div className="no-print flex justify-end absolute right-[2%] gap-2 top-0">
              <button
                className="mt-8 no-print border-green-700 text-green-700 py-2 px-6 rounded-xl cursor-pointer hover:opacity-80 hover:scale-[1.01] duration-300 transition-all"
                type="button"
                onClick={() => window.print()}
              >
                <div className="flex items-center gap-1">
                  <span>In/tải xuống</span>
                  <IconPrinter />
                </div>
              </button>
              <button
                className="mt-8 no-print bg-green-700 text-white py-2 px-6 rounded-xl cursor-pointer hover:opacity-80 hover:scale-[1.01] duration-300 transition-all"
                type="submit"
              >
                <div className="flex items-center gap-1">
                  <span>Lưu thông tin</span>
                  <IconFile />
                </div>
              </button>
            </div>
            <div
              ref={printRef}
              id="print-area"
              style={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              <div className="flex items-end gap-2">
                <div className="text-[12pt] shrink-0">Mã khách hàng:</div>
                <CustomInput form={form} name="aCode" />
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
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
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
                          }}
                        >
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
                          }}
                        >
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
                    <div className="border border-black">
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Tên khách hàng (Tiếng Việt-Tiếng Anh-Viết tắt)
                        </div>
                        <div className="col-span-4 border-r border-black px-1 font-bold">
                          <CustomInput form={form} name="bClientName" />
                        </div>
                        <div className="col-span-1 border-r border-black px-1">
                          CIF
                        </div>
                        <div className="col-span-1 border-black px-1 font-bold">
                          <CustomInput form={form} name="bCIF" />
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Địa chỉ trụ sở
                        </div>
                        <div className="col-span-6 border-black px-1">
                          <CustomInput
                            form={form}
                            name="bClientCentreAddress"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Địa chỉ văn phòng
                        </div>
                        <div className="col-span-6 border-black px-1">
                          <CustomInput
                            form={form}
                            name="bClientOfficeAddress"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Đăng ký kinh doanh
                        </div>
                        <div className="border-b col-span-6 grid grid-cols-8 border-black px-1">
                          <div className="italic col-span-2 border-r border-black px-1 text-center">
                            Số ĐKKD
                          </div>
                          <div className="italic col-span-4 border-r border-black px-1 text-center">
                            Ngày đăng ký KD (lần đầu, ngày đăng ký gần nhất)
                          </div>
                          <div className="italic col-span-2 border-black px-1 text-center">
                            Nơi cấp
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1"></div>
                        <div className="col-span-6 grid grid-cols-8 border-black px-1">
                          <div className="col-span-2 border-r border-black px-1 text-center">
                            <CustomInput form={form} name="bNumberDKKD" />
                          </div>
                          <div className="col-span-4 border-r border-black px-1 text-center">
                            <CustomInput form={form} name="bNumberDKKDDate" />
                          </div>
                          <div className="col-span-2 border-black px-1 text-center">
                            <CustomInput form={form} name="bNumberDKKDPlace" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Ngành kinh doanh
                        </div>
                        <div className="col-span-6 border-black px-1">
                          <CustomInput form={form} name="bClientIndustry" />
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Số lượng lao động
                        </div>
                        <div className="col-span-6 border-black px-1">
                          <CustomInput form={form} name="bClientLabor" />
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Người đại diện theo pháp luật
                        </div>
                        <div className="col-span-6 grid grid-cols-7 border-black px-1">
                          <div className="col-span-3 border-r border-black text-center">
                            <CustomInput form={form} name="bRepLegal" />
                          </div>
                          <div className="italic text-center col-span-1 border-r border-black">
                            Chức vụ:
                          </div>
                          <div className="col-span-3 ml-1">
                            <CustomInput form={form} name="bRole" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Người ra quyết định
                        </div>
                        <div className="col-span-6 grid grid-cols-7 border-black px-1">
                          <div className="col-span-3 border-r border-black text-center">
                            <CustomInput form={form} name="bDecisionName" />
                          </div>
                          <div className="italic text-center col-span-1 border-r border-black">
                            Sinh ngày
                          </div>
                          <div className="col-span-3 ml-1">
                            <CustomInput form={form} name="bDecisionBirth" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-b border-black">
                        {/* Cột tiêu đề bên trái ăn 2 hàng */}
                        <div className="row-span-2 col-span-2 border-r border-black px-1">
                          Thông tin người liên hệ trực tiếp (có thể nhiều hơn
                          một người)
                        </div>

                        {/* Phần bên phải 6 cột */}
                        <div className="col-span-6 grid grid-cols-6 border-b border-black">
                          <div className="col-span-1 border-r px-1 border-black">
                            Họ và tên:
                          </div>
                          <div className="col-span-2 border-r border-black px-1">
                            <div className="col-span-2">
                              <CustomInput form={form} name="bContactName" />
                            </div>
                          </div>
                          <div className="col-span-1 border-r border-black text-center">
                            Số điện thoại:
                          </div>
                          <div className="col-span-2 px-1">
                            <CustomInput form={form} name="bContactPhone" />
                          </div>
                        </div>

                        <div className="col-span-6 grid grid-cols-6">
                          <div className="px-1 col-span-1 border-r border-black">
                            Chức vụ:
                          </div>
                          <div className="col-span-5 px-1">
                            <CustomInput form={form} name="bContactRole" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-8 border-black">
                        <div className="col-span-2 border-r border-black px-1">
                          Ghi chú/Lưu ý (sinh nhật, sở thích/thói quen, khác…)
                        </div>
                        <div className="col-span-6 px-1">
                          <CustomInput form={form} name="bNote" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    2. Tình hình hoạt động, tài chính của khách hàng
                  </h2>
                  <div>
                    <div className="grid grid-cols-12 border-black border-b border-r border-l border-t">
                      <div className="col-span-1 border-r text-center border-black px-1 font-bold">
                        STT
                      </div>
                      <div className="col-span-2 border-r border-black px-1 font-bold">
                        Chỉ tiêu
                      </div>
                      <div className="col-span-9 font-bold px-1">
                        Thực trạng
                      </div>
                    </div>
                    <div className="grid grid-cols-12 border-black border-b border-r border-l">
                      <div className="col-span-1 border-r text-center border-black px-1 font-bold">
                        1
                      </div>
                      <div className="col-span-2 border-r border-black px-1">
                        Cơ cấu Vốn chủ sở hữu
                      </div>
                      <div className="col-span-9 p-1">
                        <p className="text-red-500 no-print">
                          * Double click chuột trái vào header để thêm dòng,
                          nhấn chuột phải vào dòng để xoá
                        </p>
                        <CapitalStructure form={form} />
                      </div>
                    </div>
                    <div className="grid grid-cols-12 border-black border-b border-r border-l">
                      <div className="col-span-1 border-r text-center border-black px-1 font-bold">
                        2
                      </div>
                      <div className="col-span-2 border-r border-black px-1">
                        Tình hình tài chính
                      </div>
                      <div className="col-span-9 p-1">
                        <p className="text-red-500 no-print">
                          * Double click chuột trái vào header để thêm dòng,
                          nhấn chuột phải vào dòng để xoá
                        </p>
                        <ThreeYearTable form={form} />
                      </div>
                    </div>
                    <div className="grid grid-cols-12 border-black border-b border-r border-l">
                      <div className="col-span-1 border-r text-center border-black px-1 font-bold">
                        3
                      </div>
                      <div className="col-span-2 border-r border-black px-1">
                        Hoạt động kinh doanh chính
                      </div>
                      <div className="col-span-9 px-1">
                        <CustomInput form={form} name="bMainActivity" />
                      </div>
                    </div>
                    <div className="grid grid-cols-12 border-black border-b border-r border-l">
                      <div className="col-span-1 border-r text-center border-black px-1 font-bold">
                        4
                      </div>
                      <div className="col-span-2 border-r border-black px-1">
                        Cơ sở vật chất
                      </div>
                      <div className="col-span-9 px-1">
                        <CustomInput form={form} name="bInfra" />
                      </div>
                    </div>
                    <div className="grid grid-cols-12 border-black border-b border-r border-l">
                      <div className="col-span-1 border-r text-center border-black px-1 font-bold">
                        5
                      </div>
                      <div className="col-span-2 border-r border-black px-1">
                        Chuỗi cung ứng
                      </div>
                      <div className="col-span-9 px-1">
                        <CustomInput form={form} name="bSupplyChain" />
                      </div>
                    </div>
                    <div className="grid grid-cols-12 border-black border-b border-r border-l">
                      <div className="col-span-1 border-r text-center border-black px-1 font-bold">
                        6
                      </div>
                      <div className="col-span-2 border-r border-black px-1">
                        Định hướng ngành của VCB
                      </div>
                      <div className="col-span-9 px-1">
                        <CustomInput form={form} name="bOrientationVCB" />
                      </div>
                    </div>
                  </div>
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
                  <div>
                    <p className="text-red-500 no-print">
                      * Double click chuột trái vào header để thêm dòng, nhấn
                      chuột phải vào dòng để xoá
                    </p>
                    <BranchCreditInfo form={form} />
                  </div>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    {/* chưa có thông tin */}
                  </h2>
                  <div>
                    <div className="grid grid-cols-4 border-black border-b border-r border-l border-t">
                      <div className="col-span-1 border-r text-center border-black px-1">
                        CTQ phê duyệt GHTD
                      </div>
                      <div className="col-span-1 border-r text-center border-black px-1">
                        <CustomInput form={form} name="cPheDuyet" />
                      </div>
                      <div className="col-span-1 border-r text-center border-black px-1">
                        Thời hạn hiệu lực
                      </div>
                      <div className="col-span-1 text-center border-black text-red-600 px-1">
                        <CustomInput form={form} name="cThoiHanHieuLuc" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    3. Quan hệ của Khách hàng với các TCTD khác
                  </h2>
                  <div>
                    <p className="text-red-500 no-print">
                      * Double click chuột trái vào header để thêm dòng, nhấn
                      chuột phải vào dòng để xoá
                    </p>
                    <OtherTCTD form={form} />
                  </div>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    4. Quan hệ của nhóm khách hàng liên quan tại Chi nhánh
                  </h2>
                  <div>
                    <p className="text-red-500 no-print">
                      * Double click chuột trái vào header để thêm dòng, nhấn
                      chuột phải vào dòng để xoá
                    </p>
                    <RelatedClientBranch form={form} />
                  </div>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    5. Biện pháp bảo đảm
                  </h2>
                  <div>
                    <p className="text-red-500 no-print">
                      * Double click chuột trái vào header để thêm dòng, nhấn
                      chuột phải vào dòng để xoá
                    </p>
                    <EnsureSolution form={form} />
                  </div>
                </div>
                <div className="">
                  <div className="my-4">
                    <span className="text-[13pt] font-bold mr-1">
                      6. Tình hình thực hiện các điều kiện tín dụng, thương mại
                    </span>
                    <span className="text-[13pt]">
                      (Các điều kiện trọng yếu, đặc thù, cần lưu ý và các điều
                      kiện vi phạm nếu có)
                    </span>
                  </div>
                  <div>
                    <Condition form={form} />
                  </div>
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
                  <div>
                    <p className="text-red-500 no-print">
                      * Double click chuột trái vào header để thêm dòng, nhấn
                      chuột phải vào dòng để xoá
                    </p>
                    <ComplexSituation form={form} />
                  </div>
                </div>
                <div>
                  <h2 className="text-[13pt] font-bold my-4">
                    2. Chính sách giá đang áp dụng
                  </h2>
                  <div>
                    <p className="text-red-500 no-print">
                      * Double click chuột trái vào header để thêm dòng, nhấn
                      chuột phải vào dòng để xoá
                    </p>
                    <CurrentPrice form={form} />
                  </div>
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
                  <p className="text-red-500 no-print">
                    * Double click chuột trái vào header để thêm dòng, nhấn
                    chuột phải vào dòng để xoá
                  </p>
                  <div>
                    <UpComing form={form} />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-[13pt] font-bold my-4">
                  E. PHÊ DUYỆT CỦA LÃNH ĐẠO PHÒNG KHDN
                </h2>
                <div>
                  <Approve form={form} name="cLeaderApprove" />
                </div>
              </div>
              <div>
                <h2 className="text-[13pt] font-bold my-4">
                  F. PHÊ DUYỆT CỦA GIÁM ĐỐC/PHÓ GIÁM ĐỐC PHỤ TRÁCH
                </h2>
                <div>
                  <Approve form={form} name="cDirectorApprove" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <Modal
        opened={opened}
        onClose={() => {
          setError(null);
          close();
        }}
        withCloseButton={true}
        centered
        title="Thông tin tài liệu">
        <TextInput
          minLength={1}
          label="Tên công ty"
          onChange={(e) => setName(e.currentTarget.value)}
          error={error}
          value={name}
        />
        <Button
          onClick={handleSave}
          className="mt-2 no-print bg-green-700 hover:bg-green-600 text-white py-2 px-6 rounded-xl cursor-pointer hover:opacity-80 hover:scale-[1.01] duration-200 transition-all">
          <div className="flex items-center gap-1">
            <span>Lưu</span>
          </div>
        </Button>
      </Modal> */}
    </div>
  );
}
