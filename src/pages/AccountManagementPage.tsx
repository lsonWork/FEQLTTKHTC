import { useEffect, useState } from "react";
import {
  Table,
  TextInput,
  Button,
  Pagination,
  Text,
  ActionIcon,
  Badge,
  Modal,
  PasswordInput,
  Stack,
} from "@mantine/core";
import { IconEdit, IconLock, IconLockOff } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useGetAccountApi } from "../api/useGetAccountApi";
import { loaderStore } from "../store/loader-store";
import { useDebouncedValue, useDisclosure } from "@mantine/hooks";
import { useDeleteAccountApi } from "../api/useDeleteAccountApi";
import { showNotification } from "@mantine/notifications";
import { usePatchAccountActiveApi } from "../api/usePatchAccountActiveApi";
import { useForm } from "@mantine/form";
import { usePatchAccountApi } from "../api/usePatchAccountApi";

export default function AccountManagementPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebouncedValue(search, 500); // delay 0.5s
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();
  const { data: accountData, isLoading } = useGetAccountApi(
    activePage,
    debouncedSearch
  );
  const [opened, { open, close }] = useDisclosure(false);
  const { setIsLoading } = loaderStore();
  useEffect(() => {
    if (isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isLoading]);

  const { mutateAsync: deleteAccount } = useDeleteAccountApi();
  const { mutateAsync: activeAccount } = usePatchAccountActiveApi();
  const { mutateAsync: updateAccount } = usePatchAccountApi();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      id: 0,
    },

    validate: {
      username: (value) =>
        value.trim().length === 0 ? "Tên đăng nhập không được để trống" : null,
      password: (value) => {
        if (value.trim().length === 0) return "Mật khẩu không được để trống";
        if (value.length < 6) return "Mật khẩu phải ít nhất 6 ký tự";
        if (value.length > 20) return "Mật khẩu tối đa 20 ký tự";
        return null;
      },
    },
  });

  const handleDelete = (id: number) => {
    try {
      setIsLoading(true);
      deleteAccount(id);
      showNotification({
        title: "Thành công",
        message: "Xóa tài khoản thành công",
        color: "green",
      });
      accountData.data.data = accountData.data.data.filter(
        (item: any) => item.id !== id
      );
    } catch (error) {
      showNotification({
        title: "Thất bại",
        message: "Xóa tài khoản thất bại",
        color: "red",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleActive = (id: number) => {
    try {
      setIsLoading(true);
      activeAccount(id);
      showNotification({
        title: "Thành công",
        message: "Kích hoạt tài khoản thành công",
        color: "green",
      });
      accountData.data.data = accountData.data.data.filter(
        (item: any) => item.id !== id
      );
    } catch (error) {
      showNotification({
        title: "Thất bại",
        message: "Kích hoạt tài khoản thất bại",
        color: "red",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (id: number, username: string) => {
    form.setValues({
      username: username,
      password: "",
      id: id,
    });
    open();
  };

  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      const { id, ...body } = values;
      await updateAccount({ id, data: body });
      showNotification({
        title: "Thành công",
        message: "Cập nhật tài khoản thành công",
        color: "green",
      });
    } catch (error) {
      showNotification({
        title: "Thất bại",
        message: "Cập nhật tài khoản thất bại",
        color: "red",
      });
    } finally {
      setIsLoading(false);
      close();
    }
  };

  return (
    <>
      <div className="w-full py-6">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold mb-6">Quản lý tài khoản</h3>

          {/* Thanh search + nút thêm */}
          <div className="flex items-center justify-between mb-4">
            <TextInput
              placeholder="Tìm kiếm theo tên đăng nhập"
              value={search}
              onChange={(e) => {
                setSearch(e.currentTarget.value);
                setActivePage(1);
              }}
              className="w-2/3"
            />
            <Button color="blue" onClick={() => navigate("/admin/create")}>
              + Thêm tài khoản mới
            </Button>
          </div>

          {/* Bảng */}
          <div className="flex-1">
            <Table
              striped
              highlightOnHover
              withTableBorder
              className="min-w-full">
              <Table.Thead className="bg-gray-50">
                <Table.Tr>
                  <Table.Th>ID</Table.Th>
                  <Table.Th>Username</Table.Th>
                  <Table.Th>Vai trò</Table.Th>
                  <Table.Th>Trạng thái</Table.Th>
                  <Table.Th className="text-center">Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {accountData?.data.data.map((item: any) => (
                  <Table.Tr key={item.id}>
                    <Table.Td>{item.id}</Table.Td>
                    <Table.Td>{item.username}</Table.Td>
                    <Table.Td>{item.role}</Table.Td>
                    <Table.Td>
                      {" "}
                      <Badge
                        color={item.status ? "green" : "red"}
                        variant="light">
                        {item.status ? "Active" : "Inactive"}
                      </Badge>
                    </Table.Td>
                    <Table.Td>
                      <div className="flex justify-center gap-2">
                        <ActionIcon
                          onClick={() => handleEdit(item.id, item.username)}
                          color="blue"
                          variant="light">
                          <IconEdit size={18} />
                        </ActionIcon>
                        {item.status && (
                          <ActionIcon
                            onClick={() => handleDelete(item.id)}
                            color="red"
                            variant="light">
                            <IconLock size={18} />
                          </ActionIcon>
                        )}
                        {!item.status && (
                          <ActionIcon
                            onClick={() => handleActive(item.id)}
                            color="green"
                            variant="light">
                            <IconLockOff size={18} />
                          </ActionIcon>
                        )}
                      </div>
                    </Table.Td>
                  </Table.Tr>
                ))}
                {accountData?.data.data.length === 0 && (
                  <Table.Tr>
                    <Table.Td colSpan={8}>
                      <Text className="text-gray-500 text-center">
                        Không có dữ liệu
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                )}
              </Table.Tbody>
            </Table>
          </div>

          {/* Phân trang */}
          <div className="pt-4 flex justify-center">
            <Pagination
              total={accountData?.data.totalPages}
              value={activePage}
              onChange={setActivePage}
            />
          </div>
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={close}
        title="Cập nhật tài khoản"
        centered>
        <Stack>
          <form className="w-full" onSubmit={form.onSubmit(handleSubmit)}>
            <div className="w-full flex flex-col gap-4">
              <TextInput
                className="w-full"
                label="Username"
                placeholder="Nhập tên đăng nhập"
                {...form.getInputProps("username")}
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                  }
                }}
              />
              <PasswordInput
                className="w-full"
                label="Password"
                placeholder="Nhập mật khẩu"
                {...form.getInputProps("password")}
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                  }
                }}
              />
            </div>
            <Button variant="filled" type="submit" className="mt-8">
              Tạo tài khoản mới
            </Button>
          </form>
        </Stack>
      </Modal>
    </>
  );
}
