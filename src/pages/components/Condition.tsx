import { CustomInput } from "./CustomInput";

export const Condition = ({ form }: { form: any }) => {
  return (
    <div className="border border-black">
      <div className="grid grid-cols-4 text-center">
        <div className="col-span-1 font-bold border-r border-black">
          Điều kiện tín dụng trọng yếu/đặc thù
        </div>
        <div className="col-span-1 font-bold border-r border-black">
          Tuân thủ
        </div>
        <div className="col-span-2">
          <span className="font-bold">Chưa tuân thủ</span>
          <span> (cụ thể điều kiện nào, thời gian khắc phục)</span>
        </div>
      </div>
      <div className="grid grid-cols-4 border-black border-t">
        <div className="col-span-1 border-r border-black px-1">Tín dụng</div>
        <div className="col-span-1 border-r border-black px-1 font-bold">
          <CustomInput
            form={form}
            name={`cCondition.0.col2`}
            displayText={form.values["cCondition"][0].col2}
          />
        </div>
        <div className="col-span-2  px-1 font-bold">
          <CustomInput
            form={form}
            name={`cCondition.0.col3`}
            displayText={form.values["cCondition"][0].col3}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 border-black border-t">
        <div className="col-span-1 border-r border-black px-1">Thương mại</div>
        <div className="col-span-1 border-r border-black px-1 font-bold">
          <CustomInput
            form={form}
            name={`cCondition.1.col2`}
            displayText={form.values["cCondition"][1].col2}
          />
        </div>
        <div className="col-span-2 px-1 font-bold">
          <CustomInput
            form={form}
            name={`cCondition.1.col3`}
            displayText={form.values["cCondition"][1].col3}
          />
        </div>
      </div>
    </div>
  );
};
