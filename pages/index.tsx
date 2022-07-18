import {
  Group,
  Stack,
} from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import AsideNav from '../components/AsideNav/AsideNav';

export default function HomePage() {
  return (
    <Group>
      <AsideNav />
      <Stack
        style={{
          marginLeft: '',
        }}
      >
        <Welcome />
        <ColorSchemeToggle />
      </Stack>
    </Group>
  );
}
