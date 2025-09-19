import { CustomInput } from "./CustomInput";

export default function BranchCreditInfo({ form }: { form: any }) {
  const addRow = () => {
    form.insertListItem("cTinhHinhTinDungTaiChiNhanh", {
      id: Date.now().toString(),
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
    });
  };

  const removeRow = (index: number) => {
    form.removeListItem("cTinhHinhTinDungTaiChiNhanh", index);
  };
  return (
    <div className="border border-black">
      <div onDoubleClick={addRow} className="grid grid-cols-12 font-bold">
        <div className="col-span-1 border-r border-black text-center">
          {/* <CustomInput form={form} name="cTinhHinhTinDungTaiChiNhanhFirst" /> */}
          TT
        </div>
        <div className="col-span-4 border-r border-black text-center">
          {/* <CustomInput form={form} name="cTinhHinhTinDungTaiChiNhanhSecond" /> */}
          Loại GHTD
        </div>
        <div className="col-span-2 border-r border-black text-center">
          {/* <CustomInput form={form} name="cTinhHinhTinDungTaiChiNhanhThird" /> */}
          GHTD hiện hành
        </div>
        <div className="col-span-2 border-r border-black text-center">
          {/* <CustomInput form={form} name="cTinhHinhTinDungTaiChiNhanhFourth" /> */}
          Số dư
        </div>
        <div className="col-span-3 border-black text-center">
          {/* <CustomInput form={form} name="cTinhHinhTinDungTaiChiNhanhFifth" /> */}
          Ghi chú
        </div>
      </div>
      {form.values.cTinhHinhTinDungTaiChiNhanh.map(
        (row: any, index: number) => (
          <div
            key={row.id}
            onContextMenu={(e) => {
              e.preventDefault();
              removeRow(index);
            }}
            className="grid grid-cols-12 border-black border-t">
            <div className="col-span-1 border-r border-black px-1 text-center">
              <CustomInput
                form={form}
                name={`cTinhHinhTinDungTaiChiNhanh.${index}.col1`}
                displayText={row.col1}
              />
            </div>
            <div className="col-span-4 border-r border-black px-1">
              <CustomInput
                form={form}
                name={`cTinhHinhTinDungTaiChiNhanh.${index}.col2`}
                displayText={row.col2}
              />
            </div>
            <div className="col-span-2 border-r border-black px-1 text-end">
              <CustomInput
                form={form}
                name={`cTinhHinhTinDungTaiChiNhanh.${index}.col3`}
                displayText={row.col3}
              />
            </div>
            <div className="col-span-2 border-r border-black px-1 text-end">
              <CustomInput
                form={form}
                name={`cTinhHinhTinDungTaiChiNhanh.${index}.col4`}
                displayText={row.col4}
              />
            </div>
            <div className="col-span-3 border-black px-1 text-end">
              <CustomInput
                form={form}
                name={`cTinhHinhTinDungTaiChiNhanh.${index}.col5`}
                displayText={row.col5}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}
