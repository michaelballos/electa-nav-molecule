import React, {
  useEffect,
  useState,
  SVGAttributes,
  FC,
  useCallback,
} from 'react';
import Link from 'next/link';
import {
  Group,
  Stack,
  Text,
  Navbar,
  UnstyledButton,
} from '@mantine/core';
import { useStyles } from './AsideNav.styles';

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

export type Icon = FC<IconProps>;

export interface IAsideNav {
  header: JSX.Element;
  children: JSX.Element | JSX.Element[];
  currentPath: string;
  links: {
    link: string;
    label: string;
    icon?: Icon | undefined;
    subLinks?: {
      link: string;
      label: string;
      icon?: Icon | undefined;
    }[]
  }[]
}

export default function AsideNav({
  links,
  currentPath,
  header,
  children,
}: IAsideNav) {
  const {
    classes,
    cx,
  } = useStyles();
  const [
    active,
    setActive,
  ] = useState('Overview');
  const [
    activeLink,
    setActiveLink,
  ] = useState('');
  const [
    subNav,
    setSubNav,
  ] = useState(links[0].subLinks);
  const onMainLinkClick = useCallback((label, subLinks) => {
    setActive(label);
    setSubNav(subLinks);
  }, [
    setActive,
    setSubNav,
  ]);
  const mainLinks = links.map((navLinkItems) => {
    const {
      link,
      label,
      subLinks,
    } = navLinkItems;
    return (
      <Link
        key={label}
        href={`/projects/my-projects${link}`}
      >
        <UnstyledButton
          component="a"
          key={link}
          onClick={() => onMainLinkClick(label, subLinks)}
          className={cx(classes.mainLink)}
        >
          <div className={cx({ [classes.mainLinkActive]: label === active })} />
          {/**@ts-ignore*/}
          <navLinkItems.icon />
          <Text
            className={cx(classes.mainLinkLabel)}
          >
            {label}
          </Text>
        </UnstyledButton>
      </Link>
    );
  });
  const subNavLinks = subNav?.map((sub) => {
    const {
      link,
      label,
    } = sub;
    return (
      <a
        key={link}
        className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
        href="/"
        onClick={(event) => {
          event.preventDefault();
          setActiveLink(link);
        }}
      >
        {label}
      </a>
    );
  });
  return (
    <Stack
      style={{
        height: 'max-content',
        gap: 0,
      }}
    >
      <div className={classes.header}>
        {header}
      </div>
      <Group>
      <Navbar
        style={{
          margin: 0,
          height: 'calc(100vh - 56px - 50px)',
        }}
        width={{ sm: 275 }}
      >
        <Navbar.Section grow className={classes.wrapper}>
          <div className={classes.aside}>
            {mainLinks}
          </div>
          <div className={classes.main}>
            {subNavLinks}
          </div>
        </Navbar.Section>
      </Navbar>
      {children}
      </Group>
    </Stack>
  );
}
