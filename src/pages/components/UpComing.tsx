import { CustomInput } from "./CustomInput";

export const UpComing = ({ form }: { form: any }) => {
  const addRow = () => {
    form.insertListItem("dUpComing", {
      id: Date.now().toString(),
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
    });
  };

  const removeRow = (index: number) => {
    form.removeListItem("dUpComing", index);
  };
  return (
    <div className="border border-black">
      <div onDoubleClick={addRow} className="grid grid-cols-7 text-center">
        <div className="col-span-1 font-bold border-r border-black">STT</div>
        <div className="col-span-1 font-bold border-r border-black px-1">
          Sản phẩm
        </div>
        <div className="col-span-2 font-bold border-r border-black px-1">
          Chi tiết
        </div>
        <div className="col-span-1 font-bold border-r border-black px-1">
          Kế hoạch triển khai
        </div>
        <div className="col-span-2 border-black px-1">
          <span className="font-bold">Tiến độ thực hiện </span>
          <span className="">(cập nhật theo thời gian)</span>
        </div>
      </div>

      {form.values.dUpComing.map((row: any, index: number) => (
        <div
          key={row.id}
          onContextMenu={(e) => {
            e.preventDefault();
            removeRow(index);
          }}
          className="grid grid-cols-7 border-black border-t">
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dUpComing.${index}.col1`} />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dUpComing.${index}.col2`} />
          </div>
          <div className="col-span-2 border-r border-black px-1">
            <CustomInput form={form} name={`dUpComing.${index}.col3`} />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dUpComing.${index}.col4`} />
          </div>
          <div className="col-span-2 border-black px-1">
            <CustomInput form={form} name={`dUpComing.${index}.col5`} />
          </div>
        </div>
      ))}
    </div>
  );
};
