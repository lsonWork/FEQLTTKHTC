export const CustomInput = ({
  form,
  name,
  displayText,
}: {
  form: any;
  name: string;
  displayText?: string;
}) => {
  return (
    <div
      {...form.getInputProps(name)}
      contentEditable
      suppressContentEditableWarning={true}
      style={{
        border: "none",
        width: "100%",
        margin: 0,
        // paddingLeft: "4px",
        fontSize: "12pt",
        outline: "none",
        resize: "none",
        overflowWrap: "break-word",
        whiteSpace: "pre-wrap",
        minHeight: "1.5em",
      }}
      onBlur={(e) => {
        form.setFieldValue(name, e.currentTarget.innerText);
      }}>
      {displayText || form.values[name]}
    </div>
  );
};
