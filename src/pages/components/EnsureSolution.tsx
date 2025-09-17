import { CustomInput } from "./CustomInput";

export const EnsureSolution = ({ form }: { form: any }) => {
  const addRow = () => {
    form.insertListItem("cEnsureSolution", {
      id: Date.now().toString(),
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    });
  };

  const removeRow = (index: number) => {
    form.removeListItem("cEnsureSolution", index);
  };
  return (
    <div className="border border-black">
      <div onDoubleClick={addRow} className="grid grid-cols-12 text-center">
        <div className="col-span-1 font-bold border-r border-black">STT</div>
        <div className="col-span-3 font-bold border-r border-black">
          Mô tả TSBĐ/Bảo lãnh
        </div>
        <div className="col-span-2 font-bold border-r border-black">
          Giá trị bảo đảm khi thế chấp
        </div>
        <div className="col-span-2 font-bold border-r border-black">
          Giá trị định giá gần nhất
        </div>
        <div className="col-span-2 font-bold border-r border-black">
          Giá trị bảo đảm sau BOA
        </div>
        <div className="col-span-2 ">
          <span className="font-bold">Ghi chú</span>
          <span className="italic"> (Tình trạng, tranh chấp, quy hoạch…)</span>
        </div>
      </div>
      {form.values.cEnsureSolution.map((row: any, index: number) => (
        <div
          key={row.id}
          onContextMenu={(e) => {
            e.preventDefault();
            removeRow(index);
          }}
          className="grid grid-cols-12 border-black border-t">
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`cEnsureSolution.${index}.col1`} />
          </div>
          <div className="col-span-3 border-r border-black px-1">
            <CustomInput form={form} name={`cEnsureSolution.${index}.col2`} />
          </div>
          <div className="col-span-2 border-r border-black px-1">
            <CustomInput form={form} name={`cEnsureSolution.${index}.col3`} />
          </div>
          <div className="col-span-2 border-r border-black px-1">
            <CustomInput form={form} name={`cEnsureSolution.${index}.col4`} />
          </div>
          <div className="col-span-2 border-r border-black px-1">
            <CustomInput form={form} name={`cEnsureSolution.${index}.col5`} />
          </div>
          <div className="col-span-2 border-black px-1">
            <CustomInput form={form} name={`cEnsureSolution.${index}.col6`} />
          </div>
        </div>
      ))}
    </div>
  );
};
