import { useState } from "react";

// Component cho 1 table
function EditableTable({
  initialColumns,
  initialRows,
}: {
  initialColumns: string[];
  initialRows: string[][];
}) {
  const [columns, setColumns] = useState(initialColumns);
  const [rows, setRows] = useState(initialRows);

  // Thêm hàng mới
  const handleAddRow = () => {
    const newRow = columns.map(() => "");
    setRows((prev) => [...prev, newRow]);
  };

  // Thêm cột mới
  const handleAddColumn = () => {
    const newColumnName = `Cột ${columns.length + 1}`;
    setColumns((prev) => [...prev, newColumnName]);
    setRows((prev) => prev.map((row) => [...row, ""]));
  };

  // Xoá hàng
  const handleDeleteRow = (rowIndex: number) => {
    setRows((prev) => prev.filter((_, idx) => idx !== rowIndex));
  };

  // Xoá cột
  const handleDeleteColumn = (colIndex: number) => {
    setColumns((prev) => prev.filter((_, idx) => idx !== colIndex));
    setRows((prev) =>
      prev.map((row) => row.filter((_, idx) => idx !== colIndex))
    );
  };

  // Cập nhật ô
  const handleChange = (rowIndex: number, colIndex: number, value: string) => {
    setRows((prev) =>
      prev.map((row, rIdx) =>
        rIdx === rowIndex
          ? row.map((cell, cIdx) => (cIdx === colIndex ? value : cell))
          : row
      )
    );
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <table
        border={1}
        cellPadding={8}
        style={{
          borderCollapse: "collapse",
          width: "100%",
          cursor: "pointer",
        }}>
        <thead
          onClick={(e) => {
            e.stopPropagation();
            handleAddColumn();
          }}
          style={{ background: "#eee" }}>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                onContextMenu={(e) => {
                  e.preventDefault();
                  handleDeleteColumn(idx);
                }}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          onClick={(e) => {
            e.stopPropagation();
            handleAddRow();
          }}>
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    handleDeleteRow(rIdx);
                  }}>
                  <input
                    value={cell}
                    onClick={(e) => e.stopPropagation()} // tránh trigger thêm hàng
                    onChange={(e) => handleChange(rIdx, cIdx, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: "8px", fontStyle: "italic", color: "gray" }}>
        👉 Click header để thêm cột | Click body để thêm hàng 👉 Chuột phải vào
        header để xoá cột | Chuột phải vào ô để xoá hàng
      </p>
    </div>
  );
}

// Component App chính, render nhiều table
export default function Test() {
  const tablesData = [
    {
      columns: ["Mã KH", "Tên KH", "Email"],
      rows: [
        ["KH001", "Nguyễn Văn A", "vana@example.com"],
        ["KH002", "Trần Thị B", "thib@example.com"],
      ],
    },
    {
      columns: ["Mã SP", "Tên SP", "Giá"],
      rows: [
        ["SP001", "Chuột không dây", "200000"],
        ["SP002", "Bàn phím cơ", "800000"],
      ],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Demo nhiều bảng CRUD</h2>
      {tablesData.map((t, idx) => (
        <EditableTable
          key={idx}
          initialColumns={t.columns}
          initialRows={t.rows}
        />
      ))}
    </div>
  );
}
