import { useState } from "react";
import {
  Table,
  TextInput,
  Button,
  Pagination,
  Text,
  ActionIcon,
} from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../store/user-store";

export default function ClientManagementPage() {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();
  // Data giả
  const data = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "a@example.com",
      phone: "0901234567",
      role: "Admin",
      status: "Hoạt động",
      created: "2025-01-01",
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "b@example.com",
      phone: "0912345678",
      role: "User",
      status: "Khoá",
      created: "2025-01-05",
    },
    {
      id: 3,
      name: "Lê Văn C",
      email: "c@example.com",
      phone: "0923456789",
      role: "Moderator",
      status: "Hoạt động",
      created: "2025-02-02",
    },
    {
      id: 4,
      name: "Phạm Thị D",
      email: "d@example.com",
      phone: "0934567890",
      role: "User",
      status: "Hoạt động",
      created: "2025-02-15",
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      email: "e@example.com",
      phone: "0945678901",
      role: "Admin",
      status: "Hoạt động",
      created: "2025-03-10",
    },
    {
      id: 6,
      name: "Đỗ Thị F",
      email: "f@example.com",
      phone: "0956789012",
      role: "User",
      status: "Khoá",
      created: "2025-04-01",
    },
  ];

  // Lọc search
  const filtered = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search)
  );

  // Phân trang
  const pageSize = 3;
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice(
    (activePage - 1) * pageSize,
    activePage * pageSize
  );

  const user = userStore((s) => s.user);

  return (
    <div className="w-screen min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow p-6 flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-6">
          Quản lý thông tin khách hàng
        </h3>

        {/* Thanh search + nút thêm */}
        <div className="flex items-center justify-between mb-4">
          <TextInput
            placeholder="Tìm kiếm theo tên, email, số điện thoại"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            className="w-2/3"
          />
          <Button color="blue" onClick={() => navigate("/create")}>
            + Thêm dữ liệu khách hàng
          </Button>
        </div>

        {/* Bảng */}
        <div className="flex-1 overflow-auto">
          <Table
            striped
            highlightOnHover
            withTableBorder
            className="min-w-full">
            <Table.Thead className="bg-gray-50">
              <Table.Tr>
                <Table.Th>ID</Table.Th>
                <Table.Th>Họ tên</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Số điện thoại</Table.Th>
                <Table.Th>Vai trò</Table.Th>
                <Table.Th>Trạng thái</Table.Th>
                <Table.Th>Ngày tạo</Table.Th>
                <Table.Th className="text-center">Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {paginated.map((item) => (
                <Table.Tr key={item.id}>
                  <Table.Td>{item.id}</Table.Td>
                  <Table.Td>{item.name}</Table.Td>
                  <Table.Td>{item.email}</Table.Td>
                  <Table.Td>{item.phone}</Table.Td>
                  <Table.Td>{item.role}</Table.Td>
                  <Table.Td>{item.status}</Table.Td>
                  <Table.Td>{item.created}</Table.Td>
                  <Table.Td>
                    <div className="flex justify-center gap-2">
                      <ActionIcon color="blue" variant="light">
                        <IconEdit size={18} />
                      </ActionIcon>
                      <ActionIcon color="red" variant="light">
                        <IconTrash size={18} />
                      </ActionIcon>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
              {paginated.length === 0 && (
                <Table.Tr>
                  <Table.Td colSpan={8}>
                    <Text className="text-gray-500">Không có dữ liệu</Text>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </div>

        {/* Phân trang */}
        <div className="pt-4 flex justify-center">
          <Pagination
            total={totalPages}
            value={activePage}
            onChange={setActivePage}
          />
        </div>
      </div>

      {/* Modal thêm mới */}
      {/* <Modal
        opened={true}
        onClose={() => navigate("/")}
        title="Thêm bản ghi mới"
        centered
      >
        <Text>Form thêm mới để mày tự code tiếp nhé 😆</Text>
      </Modal> */}
    </div>
  );
}
