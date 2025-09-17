import { CustomInput } from "./CustomInput";

export const CurrentPrice = ({ form }: { form: any }) => {
  const addRow = () => {
    form.insertListItem("dCurrentPrice", {
      id: Date.now().toString(),
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
    });
  };

  const removeRow = (index: number) => {
    form.removeListItem("dCurrentPrice", index);
  };
  return (
    <div className="border border-black">
      <div onDoubleClick={addRow} className="grid grid-cols-7 text-center">
        <div className="col-span-1 font-bold border-r border-black">STT</div>
        <div className="col-span-1 font-bold border-r border-black px-1"></div>
        <div className="col-span-2 font-bold border-r border-black px-1">
          Chính sách đang áp dụng
        </div>
        <div className="col-span-1 font-bold border-r border-black px-1">
          Thời hạn hiệu lực
        </div>
        <div className="col-span-2 font-bold border-black px-1">
          Tình hình cạnh tranh/Đề xuất điều chỉnh
        </div>
      </div>

      {form.values.dCurrentPrice.map((row: any, index: number) => (
        <div
          key={row.id}
          onContextMenu={(e) => {
            e.preventDefault();
            removeRow(index);
          }}
          className="grid grid-cols-7 border-black border-t">
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dCurrentPrice.${index}.col1`} />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dCurrentPrice.${index}.col2`} />
          </div>
          <div className="col-span-2 border-r border-black px-1">
            <CustomInput form={form} name={`dCurrentPrice.${index}.col3`} />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dCurrentPrice.${index}.col4`} />
          </div>
          <div className="col-span-2 border-black px-1">
            <CustomInput form={form} name={`dCurrentPrice.${index}.col5`} />
          </div>
        </div>
      ))}
    </div>
  );
};
