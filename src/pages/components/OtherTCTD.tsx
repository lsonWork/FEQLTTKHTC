import { CustomInput } from "./CustomInput";

export default function OtherTCTD({ form }: { form: any }) {
  const addRow = () => {
    form.insertListItem("cOtherTCTD", {
      id: Date.now().toString(),
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
    });
  };

  const removeRow = (index: number) => {
    form.removeListItem("cOtherTCTD", index);
  };
  return (
    <div className="border border-black">
      <div onDoubleClick={addRow} className="grid grid-cols-12 font-bold">
        <div className="col-span-1 border-r border-black text-center">
          Tên TCTD
        </div>
        <div className="col-span-1 border-r border-black text-center">GHTD</div>
        <div className="col-span-1 border-r border-black text-center">
          Nhóm nợ
        </div>
        <div className="col-span-2 border-r border-black text-center">
          Dư nợ nội bảng
        </div>
        <div className="col-span-2 border-r border-black text-center">
          Cam kết ngoại bảng
        </div>
        <div className="col-span-3 border-r border-black text-center">
          Biện pháp bảo đảm
        </div>
        <div className="col-span-2 border-black text-center">
          Giá trị biện pháp bảo đảm
        </div>
      </div>
      {form.values.cOtherTCTD.map((row: any, index: number) => (
        <div
          key={row.id}
          onContextMenu={(e) => {
            e.preventDefault();
            removeRow(index);
          }}
          className="grid grid-cols-12 border-black border-t">
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cOtherTCTD.${index}.col1`}
              displayText={row.col1}
            />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cOtherTCTD.${index}.col2`}
              displayText={row.col2}
            />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cOtherTCTD.${index}.col3`}
              displayText={row.col3}
            />
          </div>
          <div className="col-span-2 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cOtherTCTD.${index}.col4`}
              displayText={row.col4}
            />
          </div>
          <div className="col-span-2 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cOtherTCTD.${index}.col5`}
              displayText={row.col5}
            />
          </div>
          <div className="col-span-3 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cOtherTCTD.${index}.col6`}
              displayText={row.col6}
            />
          </div>
          <div className="col-span-2 border-black px-1">
            <CustomInput
              form={form}
              name={`cOtherTCTD.${index}.col7`}
              displayText={row.col7}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
