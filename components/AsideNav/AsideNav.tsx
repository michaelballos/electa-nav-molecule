
import React, { useState } from 'react';
import { Text, Navbar, UnstyledButton, Tooltip, Title } from '@mantine/core';
import {
  Home2,
  Gauge,
  DeviceDesktopAnalytics,
  Fingerprint,
  CalendarStats,
  User,
  Settings,
} from 'tabler-icons-react';
import { useStyles } from './AsideNav.styles';

const mainLinksMockdata = [
  {
    icon: Home2,
    label: 'Overview',
  },
  { icon: Gauge, label: 'Dashboard' },
  { icon: DeviceDesktopAnalytics, label: 'Analytics' },
  { icon: CalendarStats, label: 'Releases' },
  { icon: User, label: 'Account' },
  { icon: Fingerprint, label: 'Security' },
  { icon: Settings, label: 'Settings' },
];

const linksMockdata = [
  'Security',
  'Settings',
  'Dashboard',
  'Releases',
  'Account',
  'Orders',
  'Clients',
  'Databases',
  'Pull Requests',
  'Open Issues',
  'Wiki pages',
];

export default function AsideNav() {
  const {
    classes,
    cx,
  } = useStyles();
  const [
    active,
    setActive,
  ] = useState('Releases');
  const [
    activeLink,
    setActiveLink,
  ] = useState('Settings');

  const mainLinks = mainLinksMockdata.map((link) => (
      <UnstyledButton
        key={link.label}
        onClick={() => setActive(link.label)}
        className={cx(classes.mainLink)}
      >
        <div className={cx({ [classes.mainLinkActive]: link.label === active })} />
        <link.icon />
        <Text
          className={cx(classes.mainLinkLabel)}
        >
          {link.label}
        </Text>
      </UnstyledButton>
  ));

  const links = linksMockdata.map((link) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <Navbar
      style={{
        position: 'absolute',
        height: 'calc(100vh - 56px)',
      }}
      width={{ sm: 300 }}
    >
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <Text>
              Nav
            </Text>
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {links}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}
