import {
  Text,
  Title,
} from '@mantine/core';

export default function MyProjects() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Title
        align="center"
        mt={100}
      >
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          dev-instance-2
        </Text>
      </Title>
    </div>
  );
}
