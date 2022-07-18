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
    link: '/overview',
    subLinks: [
      {
        label: 'Security',
        link: '/security',
      },
      {
        label: 'Dashboard',
        link: '/dashboard',
      },
    ],
  },
  {
    icon: Gauge,
    label: 'Explorer',
    link: '/explorer',
    subLinks: [
      {
        label: 'Releases',
        link: '/releases',
      },
      {
        label: 'Account',
        link: '/account',
      },
    ],
  },
  {
    icon: DeviceDesktopAnalytics,
    label: 'History',
    link: '/history',
    subLinks: [
      {
        label: 'Orders',
        link: '/orders',
      },
      {
        label: 'Clients',
        link: '/clients',
      },
    ],
  },
  {
    icon: Key,
    label: 'Keys',
    link: '/keys',
    subLinks: [
      {
        label: 'Pull Ups',
        link: '/pull-ups',
      },
      {
        label: 'Open Issues',
        link: '/open-issues',
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <AsideNav
        links={mockLinks}
        header={<AsideNaveHeader />}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Welcome />
          <ColorSchemeToggle />
        </div>
      </AsideNav>
    </div>
  );
}
