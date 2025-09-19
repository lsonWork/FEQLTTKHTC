import { CustomInput } from "./CustomInput";

const ThreeYearTable = ({ form }: { form: any }) => {
  const addRow = () => {
    form.insertListItem("bTinhHinhTaiChinh", {
      id: Date.now().toString(),
      col1: "",
      col2: "",
      col3: "",
      col4: "",
    });
  };

  const removeRow = (index: number) => {
    form.removeListItem("bTinhHinhTaiChinh", index);
  };

  return (
    <div className="border border-black">
      <div
        onDoubleClick={addRow}
        className="grid grid-cols-6 text-center bg-stone-300 border-black">
        <div className="col-span-3 border-r font-bold border-black px-1">
          Năm
        </div>
        <div className="col-span-1 border-r font-bold border-black px-1">
          <CustomInput form={form} name="bTinhHinhTaiChinhFirst" />
        </div>
        <div className="col-span-1 border-r font-bold border-black px-1">
          <CustomInput form={form} name="bTinhHinhTaiChinhSecond" />
        </div>
        <div className="col-span-1 font-bold border-black px-1">
          <CustomInput form={form} name="bTinhHinhTaiChinhThird" />
        </div>
      </div>
      {form.values.bTinhHinhTaiChinh.map((row: any, index: number) => (
        <div
          key={row.id}
          onContextMenu={(e) => {
            e.preventDefault();
            removeRow(index);
          }}
          className="grid grid-cols-6 border-black border-t">
          <div className="col-span-3 border-r border-black px-1">
            <CustomInput
              form={form}
              name={`bTinhHinhTaiChinh.${index}.col1`}
              displayText={row.col1}
            />
          </div>
          <div className="col-span-1 text-center border-r border-black px-1">
            <CustomInput
              form={form}
              name={`bTinhHinhTaiChinh.${index}.col2`}
              displayText={row.col2}
            />
          </div>
          <div className="col-span-1 text-center border-r border-black px-1">
            <CustomInput
              form={form}
              name={`bTinhHinhTaiChinh.${index}.col3`}
              displayText={row.col3}
            />
          </div>
          <div className="col-span-1 text-center border-black px-1">
            <CustomInput
              form={form}
              name={`bTinhHinhTaiChinh.${index}.col4`}
              displayText={row.col4}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeYearTable;
