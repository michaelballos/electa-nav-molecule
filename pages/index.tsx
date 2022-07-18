import {
  Group,
  Stack,
} from '@mantine/core';
import {
  DeviceDesktopAnalytics,
  Gauge,
  Home2,
  Key,
} from 'tabler-icons-react';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import AsideNav from '../components/AsideNav/AsideNav';
import AsideNaveHeader from '../components/AsideNavHeader/AsideNaveHeader';

const mockLinks = [
  {
    icon: Home2,
    label: 'Overview',
    link: '/',
    links: [
      {
        label: 'Security',
        link: '/',
      },
      {
        label: 'Dashboard',
        link: '/',
      },
    ],
  },
  {
    icon: Gauge,
    label: 'Explorer',
    links: [
      {
        label: 'Releases',
        link: '/',
      },
      {
        label: 'Account',
        link: '/',
      },
    ],
  },
  {
    icon: DeviceDesktopAnalytics,
    label: 'History',
    links: [
      {
        label: 'Orders',
        link: '/',
      },
      {
        label: 'Clients',
        link: '/',
      },
    ],
  },
  {
    icon: Key,
    label: 'Keys',
    links: [
      {
        label: 'Pull Ups',
        link: '/',
      },
      {
        label: 'Open Issues',
        link: '/',
      },
    ],
  },
];

export default function HomePage() {
  return (
    <Group>
      <AsideNav
        links={mockLinks}
        header={<AsideNaveHeader />}
      >
        <Stack
          style={{
            marginLeft: '',
          }}
        >
          <Welcome />
          <ColorSchemeToggle />
        </Stack>
      </AsideNav>
    </Group>
  );
}
