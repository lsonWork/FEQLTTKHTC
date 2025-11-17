export default function ServiceProduct({ form }: { form: any }) {
  return (
    <div className="border border-black">
      <div className="grid grid-cols-9 font-bold">
        <div className="col-span-1 border-r border-black text-center">STT</div>
        <div className="col-span-6 border-r border-black text-center">
          Sản phẩm dịch vụ
        </div>
        <div className="col-span-1 border-r border-black text-center">
          Đã sử dụng
        </div>
        <div className="col-span-1 border-black text-center">Chưa sử dụng</div>
      </div>
      {form.values.dServiceProduct.map((row: any, index: number) => (
        <div className="grid grid-cols-9 border-black border-t">
          <div className="col-span-1 border-r border-black px-1 text-center">
            {index + 1}
          </div>
          <div className="col-span-6 border-r border-black px-1">
            {row.col2}
          </div>
          <div className="col-span-1 flex items-center justify-center border-r border-black px-1 text-end">
            <input
              type="checkbox"
              checked={row.col3}
              onChange={() => {
                form.setFieldValue(`dServiceProduct.${index}.col3`, true);
                form.setFieldValue(`dServiceProduct.${index}.col4`, false);
              }}
            />
          </div>
          <div className="col-span-1 flex items-center justify-center border-black px-1 text-end">
            <input
              type="checkbox"
              checked={row.col4}
              onChange={() => {
                form.setFieldValue(`dServiceProduct.${index}.col3`, false);
                form.setFieldValue(`dServiceProduct.${index}.col4`, true);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
