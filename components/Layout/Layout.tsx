import { useRouter } from 'next/router';
import {
  DeviceDesktopAnalytics,
  Gauge,
  Home2,
  Key,
} from 'tabler-icons-react';
import Header from '../Header/Header';
import AsideNavHeader from '../AsideNavHeader/AsideNavHeader';
import AsideNav from '../AsideNav/AsideNav';

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

const mockLinks = [
  {
    icon: Home2,
    label: 'Overview',
    link: 'overview',
    subLinks: [
      {
        label: 'Security',
        link: 'security',
      },
      {
        label: 'Dashboard',
        link: 'dashboard',
      },
    ],
  },
  {
    icon: Gauge,
    label: 'Explorer',
    link: 'explorer',
    subLinks: [
      {
        label: 'Releases',
        link: 'releases',
      },
      {
        label: 'Account',
        link: 'account',
      },
    ],
  },
  {
    icon: DeviceDesktopAnalytics,
    label: 'History',
    link: 'history',
    subLinks: [
      {
        label: 'Orders',
        link: 'orders',
      },
      {
        label: 'Clients',
        link: 'clients',
      },
    ],
  },
  {
    icon: Key,
    label: 'Keys',
    link: 'keys',
    subLinks: [
      {
        label: 'Pull Ups',
        link: 'pull-ups',
      },
      {
        label: 'Open Issues',
        link: 'open-issues',
      },
    ],
  },
];

export default function Layout({ children }: ILayout) {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <>
      <Header
        links={[
          {
            label: 'Home',
            link: '/',
          },
        ]}
      />
      <AsideNav
        currentPath={currentPath}
        header={<AsideNavHeader currentPath={currentPath} />}
        links={mockLinks}
      >
        <div
          style={{
            position: 'absolute',
            height: 'calc(100vh - 56px - 50px)',
            width: '100vw',
            paddingLeft: 275,
          }}
        >
          {children}
        </div>
      </AsideNav>
    </>
  );
}
