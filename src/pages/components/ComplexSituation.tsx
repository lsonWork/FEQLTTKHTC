import { CustomInput } from "./CustomInput";

export const ComplexSituation = ({ form }: { form: any }) => {
  const addRow = () => {
    form.insertListItem("dComplexSituation", {
      id: Date.now().toString(),
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
      col9: "",
      col10: "",
    });
  };

  const removeRow = (index: number) => {
    form.removeListItem("dComplexSituation", index);
  };
  return (
    <div className="border border-black">
      <div onDoubleClick={addRow}>
        <div className="grid grid-cols-12 text-center">
          <div className="row-span-2 col-span-1 font-bold border-r border-black flex items-center justify-center">
            STT
          </div>
          <div className="row-span-2 col-span-3 font-bold border-r border-black flex items-center justify-center">
            Chỉ tiêu
          </div>
          <div className="row-span-2 col-span-1 font-bold border-r border-black flex items-center justify-center">
            ĐVT
          </div>
          <div className="row-span-2 col-span-1 font-bold border-r border-black flex items-center justify-center">
            Thị phần của VCB
          </div>

          <div className="col-span-2 font-bold border-r border-black flex items-center justify-center">
            <CustomInput form={form} name="dComplexFirst" />
          </div>
          <div className="col-span-2 font-bold border-r border-black flex items-center justify-center">
            <CustomInput form={form} name="dComplexSecond" />
          </div>
          <div className="col-span-2 font-bold border-black flex items-center justify-center">
            <CustomInput form={form} name="dComplexThird" />
          </div>

          <div className="col-span-1 border-r border-t border-black font-bold">
            CK
          </div>
          <div className="col-span-1 border-t border-r border-black font-bold">
            BQ/DS
          </div>
          <div className="col-span-1 border-r border-t border-black font-bold">
            CK
          </div>
          <div className="col-span-1 border-t border-r border-black font-bold">
            BQ/DS
          </div>
          <div className="col-span-1 border-r border-t border-black font-bold">
            CK
          </div>
          <div className="col-span-1 border-t border-black font-bold">
            BQ/DS
          </div>
        </div>
      </div>

      {form.values.dComplexSituation.map((row: any, index: number) => (
        <div
          key={row.id}
          onContextMenu={(e) => {
            e.preventDefault();
            removeRow(index);
          }}
          className="grid grid-cols-12 border-black border-t">
          <div className="col-span-1 border-r text-center border-black px-1">
            <CustomInput form={form} name={`dComplexSituation.${index}.col1`} />
          </div>
          <div className="col-span-3 border-r border-black px-1">
            <CustomInput form={form} name={`dComplexSituation.${index}.col2`} />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dComplexSituation.${index}.col3`} />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dComplexSituation.${index}.col4`} />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dComplexSituation.${index}.col5`} />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dComplexSituation.${index}.col6`} />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dComplexSituation.${index}.col7`} />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dComplexSituation.${index}.col8`} />
          </div>
          <div className="col-span-1 border-r border-black px-1">
            <CustomInput form={form} name={`dComplexSituation.${index}.col9`} />
          </div>
          <div className="col-span-1 border-black px-1">
            <CustomInput
              form={form}
              name={`dComplexSituation.${index}.col10`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
