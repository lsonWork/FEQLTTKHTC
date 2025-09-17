import { CustomInput } from "./CustomInput";

export const Approve = ({ form, name }: { form: any; name: string }) => {
  return (
    <div className="border border-black">
      <div className="grid grid-cols-5 text-center">
        <div className="col-span-1 font-bold border-r border-black">
          Phê duyệt
        </div>
        <div className="col-span-2 border-r border-black">
          <span className="font-bold">Ký duyệt</span>
          <span className="italic"> (ghi rõ ngày, tháng, năm)</span>
        </div>
        <div className="col-span-2">
          <span className="font-bold">Ý kiến chỉ đạo bổ sung (nếu có)</span>
        </div>
      </div>
      <div className="grid grid-cols-5 border-black border-t">
        <div className="col-span-1 border-r border-black px-1 font-bold">
          1. Đồng ý
        </div>
        <div className="col-span-2 border-r border-black px-1 font-bold text-center">
          <CustomInput form={form} name={`${name}.0.col2`} />
        </div>
        <div className="col-span-2 px-1 font-bold text-center">
          <CustomInput form={form} name={`${name}.0.col3`} />
        </div>
      </div>
      <div className="grid grid-cols-5 border-black border-t">
        <div className="col-span-1 border-r border-black px-1 font-bold">
          2. Không đồng ý
        </div>
        <div className="col-span-2 border-r border-black px-1 font-bold text-center">
          <CustomInput form={form} name={`${name}.1.col2`} />
        </div>
        <div className="col-span-2 px-1 font-bold text-center">
          <CustomInput form={form} name={`${name}.1.col3`} />
        </div>
      </div>
    </div>
  );
};
