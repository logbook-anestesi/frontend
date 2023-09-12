import { Typography } from 'antd';

const { Title, Text } = Typography;

const About = () => {
  return (
    <div>
      <Title level={3}>About Page</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
        eros eget fringilla facilisis. Aliquam sit amet dolor a sem euismod
        condimentum. Donec laoreet turpis sit amet porttitor convallis. In nec
        varius risus. Ut pharetra feugiat vestibulum. Curabitur tellus lorem,
        tincidunt eget imperdiet vitae, consequat in eros. In erat elit,
        fringilla ac efficitur eget, consectetur et nibh. Nullam pharetra, orci
        accumsan ornare gravida, quam tellus tempus ex, et rutrum arcu mauris id
        mauris. Maecenas dapibus, turpis eget sagittis pellentesque, elit tellus
        molestie odio, nec consectetur turpis nulla et nisi. Praesent bibendum
        faucibus sollicitudin. In efficitur ex in dolor volutpat suscipit.
        Praesent commodo interdum nunc at venenatis.
      </Text>
    </div>
  );
};

export default About;
