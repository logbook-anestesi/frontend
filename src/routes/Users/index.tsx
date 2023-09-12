import { Typography } from 'antd';

const { Title, Text } = Typography;

const UsersPage = () => {
  return (
    <div>
      <Title level={3}>List User</Title>
      <Text>You area authenticated!</Text>
    </div>
  );
};

export default UsersPage;
