import React from "react";

const generateFakeData = (rows) => {
  return Array.from({ length: rows }).map((_, i) => ({
    name: `Nguyễn Văn ${i + 1}`,
    age: 20 + (i % 10),
    job: ["Kỹ sư", "Nhân viên", "Quản lý", "Designer"][i % 4],
  }));
};

const tableCount = 5; // Số bảng
const rowsPerTable = 17; // Số dòng mỗi bảng

const App = () => {
  return (
    <div style={{ padding: 20, fontFamily: "Times New Roman" }}>
      <h1>Demo Nhiều Bảng Kẻ Rõ</h1>

      {Array.from({ length: tableCount }).map((_, tableIdx) => {
        const data = generateFakeData(rowsPerTable);
        return (
          <div
            key={tableIdx}
            style={{
              marginBottom: 40,
              border: "1px solid #000",
              padding: 10,
            }}>
            <h2>Bảng {tableIdx + 1}</h2>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
              }}>
              <thead>
                <tr style={{ backgroundColor: "#eee" }}>
                  <th style={{ border: "1px solid #000", padding: 5 }}>STT</th>
                  <th style={{ border: "1px solid #000", padding: 5 }}>Tên</th>
                  <th style={{ border: "1px solid #000", padding: 5 }}>Tuổi</th>
                  <th style={{ border: "1px solid #000", padding: 5 }}>
                    Nghề nghiệp
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ border: "1px solid #000", padding: 5 }}>
                      {idx + 1}
                    </td>
                    <td style={{ border: "1px solid #000", padding: 5 }}>
                      {row.name}
                    </td>
                    <td style={{ border: "1px solid #000", padding: 5 }}>
                      {row.age}
                    </td>
                    <td style={{ border: "1px solid #000", padding: 5 }}>
                      {row.job}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              Đây là đoạn văn mô tả bảng {tableIdx + 1}. Nội dung tiếng Việt đầy
              đủ: ă, â, ê, ô, ơ, ư.
            </p>
          </div>
        );
      })}

      <button
        onClick={() => window.print()}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}>
        In / Save as PDF
      </button>

      <style>
        {`
          @media print {
            button { display: none; }
            div { page-break-inside: avoid; }
          }
        `}
      </style>
    </div>
  );
};

export default App;
