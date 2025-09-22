import { useState } from "react";
import {
  Table,
  TextInput,
  Button,
  Pagination,
  Text,
  ActionIcon,
  Modal,
  Tooltip,
} from "@mantine/core";
import { IconEye, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useGetDocumentApi } from "../api/useGetDocumentApi";
import dayjs from "dayjs";
import { useDebouncedValue, useDisclosure } from "@mantine/hooks";
import { useDeleteDocumentApi } from "../api/useDeleteDocumentApi";
import { showNotification } from "@mantine/notifications";

export default function ClientManagementPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebouncedValue(search, 500);
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();
  const { data: documentData } = useGetDocumentApi(activePage, debouncedSearch);
  const [selectedId, setSelectedId] = useState("");

  const { mutateAsync: deleteDocument } = useDeleteDocumentApi();

  const [opened, { open, close }] = useDisclosure(false);

  const handleDelete = () => {
    deleteDocument(selectedId);
    close();
    showNotification({
      title: "Thành công",
      message: "Xóa tài liệu thành công",
      color: "green",
    });
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow p-6 flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-6">
          Quản lý thông tin khách hàng
        </h3>

        {/* Thanh search + nút thêm */}
        <div className="flex items-center justify-between mb-4">
          <TextInput
            placeholder="Tìm kiếm theo CIF"
            value={search}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
              setActivePage(1);
            }}
            className="w-2/3"
          />
          <Button color="blue" onClick={() => navigate("/create")}>
            + Thêm dữ liệu khách hàng
          </Button>
        </div>

        {/* Bảng */}
        <div className="flex-1 overflow-auto">
          <Table highlightOnHover withTableBorder className="min-w-full">
            <Table.Thead className="bg-gray-50">
              <Table.Tr>
                <Table.Th>Tên công ty</Table.Th>
                <Table.Th>CIF</Table.Th>
                <Table.Th>Tạo bởi</Table.Th>
                <Table.Th>Ngày cập nhật gần nhất</Table.Th>
                <Table.Th className="text-center">Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {documentData?.data.data.map((item: any) => (
                <Table.Tr key={item.id}>
                  <Table.Td>{item.name}</Table.Td>
                  <Table.Td>{item.cif}</Table.Td>
                  <Table.Td>{item.account.username}</Table.Td>
                  <Table.Td>
                    {dayjs(item.createdAt).format("DD/MM/YYYY HH:mm:ss")}
                  </Table.Td>
                  <Table.Td>
                    <div className="flex justify-center gap-2">
                      <Tooltip label="Xem chi tiết" withArrow>
                        <ActionIcon
                          onClick={() => navigate(`/document/${item.id}`)}
                          color="green"
                          variant="light"
                        >
                          <IconEye size={18} />
                        </ActionIcon>
                      </Tooltip>
                      <Tooltip label="Xóa" withArrow>
                        <ActionIcon
                          onClick={() => {
                            setSelectedId(item.id);
                            open();
                          }}
                          color="red"
                          variant="light"
                        >
                          <IconTrash size={18} />
                        </ActionIcon>
                      </Tooltip>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
              {documentData?.data.data.length === 0 && (
                <Table.Tr>
                  <Table.Td colSpan={8}>
                    <Text className="text-center text-gray-500">
                      Không có dữ liệu
                    </Text>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </div>

        {/* Phân trang */}
        {documentData?.data.data.length > 0 && (
          <div className="pt-4 flex justify-center">
            <Pagination
              total={documentData?.data.totalPages}
              value={activePage}
              onChange={setActivePage}
            />
          </div>
        )}
      </div>

      <Modal opened={opened} onClose={close} centered title="Xác nhận">
        <p>Bạn có chắc chắn muốn xóa tài liệu này không?</p>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="default" onClick={close}>
            Hủy
          </Button>
          <Button color="red" onClick={handleDelete}>
            Xóa
          </Button>
        </div>
      </Modal>
    </div>
  );
}
