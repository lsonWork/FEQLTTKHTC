import { CustomInput } from "./CustomInput";

export default function CapitalStructure({ form }: { form: any }) {
  const rows = form.values.bCoCauVon || [];

  const addRow = () => {
    form.insertListItem("bCoCauVon", {
      id: Date.now().toString(),
      col1: "",
      col2: "",
      col3: "",
      col4: "",
    });
  };

  const removeRow = (index: number) => {
    form.removeListItem("bCoCauVon", index);
  };

  // ensure initial array exists to avoid undefined
  if (!Array.isArray(form.values.bCoCauVon)) {
    form.setFieldValue("bCoCauVon", []);
  }

  return (
    <div id="co-cau-von" className="border border-black">
      {/* Header */}
      <div
        className="grid grid-cols-5 font-bold border-black text-center cursor-pointer"
        onDoubleClick={addRow}>
        <div className="col-span-2 border-r border-black px-1">
          Tên cá nhân góp vốn
        </div>
        <div className="col-span-1 border-r border-black px-1">Vốn đăng ký</div>
        <div className="col-span-1 border-r border-black px-1">
          Vốn thực góp
        </div>
        <div className="col-span-1 border-black px-1">Tỷ trọng</div>
      </div>

      {/* Rows */}
      {rows.map((row: any, index: number) => (
        <div
          key={row.id}
          className="grid grid-cols-5 border-t border-black"
          onContextMenu={(e) => {
            e.preventDefault();
            removeRow(index);
          }}>
          <div className="col-span-2 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`bCoCauVon.${index}.col1`}
              displayText={row.col1}
            />
          </div>
          <div className="col-span-1 border-r border-black px-1 text-center">
            <CustomInput
              form={form}
              name={`bCoCauVon.${index}.col2`}
              displayText={row.col2}
            />
          </div>
          <div className="col-span-1 border-r border-black px-1 text-center">
            <CustomInput
              form={form}
              name={`bCoCauVon.${index}.col3`}
              displayText={row.col3}
            />
          </div>
          <div className="col-span-1 border-black px-1 text-center">
            <CustomInput
              form={form}
              name={`bCoCauVon.${index}.col4`}
              displayText={row.col4}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
