import { Typography } from "antd";
import React from "react";
import useGetAllUser from "../../hooks/useGetAllUser";

const { Title } = Typography;

const UsersPage = () => {
  const { listUser } = useGetAllUser();

  console.log("999 LIST USER", listUser);

  return (
    <div>
      <Title level={3}>List User</Title>
    </div>
  );
};

export default UsersPage;
