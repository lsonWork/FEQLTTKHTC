import { useRef } from "react";
// @ts-ignore
import html2pdf from "html2pdf.js";

export default function TestPdf() {
  const printRef = useRef<HTMLDivElement | null>(null);

  const handleExport = async () => {
    if (!printRef.current) return;

    const allElements = printRef.current.querySelectorAll("*");
    console.log(allElements);
    allElements.forEach((el, index) => {
      const computedStyle = window.getComputedStyle(el);
      const bg = computedStyle.backgroundColor;
      const color = computedStyle.color;
      const borderColor = computedStyle.borderColor;

      if (
        bg.includes("oklch") ||
        color.includes("oklch") ||
        borderColor.includes("oklch")
      ) {
        console.log(`Element ${index}:`, el.tagName, {
          backgroundColor: bg,
          color: color,
          borderColor: borderColor,
        });
      }
    });

    // nếu dùng webfont, đợi load xong
    if ((document as any).fonts && (document as any).fonts.ready) {
      await (document as any).fonts.ready;
    }

    const element = printRef.current;
    const opt = {
      margin: [10, 10, 10, 10], // mm
      filename: "report.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div style={{ padding: 16 }}>
      <div ref={printRef} style={{ background: "white", padding: 16 }}>
        {/* Ví dụ nội dung */}
        <h1 style={{ fontFamily: "Times New Roman", fontSize: "18pt" }}>
          Tiêu đề
        </h1>
        <p style={{ fontFamily: "Times New Roman", fontSize: "12pt" }}>
          Nội dung báo cáo...
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse" }} border={1}>
          <thead>
            <tr>
              <th>Mã</th>
              <th>Tên</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }).map((_, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>Ng Tèo {i + 1}</td>
                <td>Ghi chú {i + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={handleExport} style={{ marginTop: 12 }}>
        Xuất PDF (html2pdf)
      </button>
    </div>
  );
}
