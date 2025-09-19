import { CustomInput } from "./CustomInput";

export default function RelatedClientBranch({ form }: { form: any }) {
  const addRow = () => {
    form.insertListItem("cRelatedClientBranch", {
      id: Date.now().toString(),
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
    });
  };

  const removeRow = (index: number) => {
    form.removeListItem("cRelatedClientBranch", index);
  };
  return (
    <div className="border border-black">
      <div onDoubleClick={addRow} className="grid grid-cols-12 font-bold">
        <div className="col-span-1 border-r border-black text-center">STT</div>
        <div className="col-span-1 border-r border-black text-center">CIF</div>
        <div className="col-span-2 border-r border-black text-center">
          Khách hàng
        </div>
        <div className="col-span-1 border-r border-black text-center">
          Nhóm nợ
        </div>
        <div className="col-span-1 border-r border-black text-center">GHTD</div>
        <div className="col-span-1 border-r border-black text-center">
          Dư nợ nội bảng
        </div>
        <div className="col-span-2 border-r border-black text-center">
          Cam kết ngoại bảng
        </div>
        <div className="col-span-3 border-black text-center">
          Mối liên hệ với khách hàng
        </div>
      </div>

      {form.values.cRelatedClientBranch.map((row: any, index: number) => (
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
              name={`cRelatedClientBranch.${index}.col1`}
              displayText={row.col1}
            />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cRelatedClientBranch.${index}.col2`}
              displayText={row.col2}
            />
          </div>
          <div className="col-span-2 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cRelatedClientBranch.${index}.col3`}
              displayText={row.col3}
            />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cRelatedClientBranch.${index}.col4`}
              displayText={row.col4}
            />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cRelatedClientBranch.${index}.col5`}
              displayText={row.col5}
            />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cRelatedClientBranch.${index}.col6`}
              displayText={row.col6}
            />
          </div>
          <div className="col-span-2 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`cRelatedClientBranch.${index}.col7`}
              displayText={row.col7}
            />
          </div>
          <div className="col-span-3 border-black px-1">
            <CustomInput
              form={form}
              name={`cRelatedClientBranch.${index}.col8`}
              displayText={row.col8}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
