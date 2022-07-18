import React, {
  useState, ReactNode, SVGAttributes, FC, useCallback,
} from 'react';
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
  ] = useState('Settings');
  const [
    subNav,
    setSubNav,
  ] = useState(links[0].subLinks);
  const onMainLinkClick = useCallback((label, subLinks) => {
    setActive(label);
    setSubNav(subLinks);
    setActiveLink(subLinks[0].link);
  }, [setActive, setSubNav]);
  const mainLinks = links.map((navLinkItems) => {
    const {
      label,
      subLinks,
    } = navLinkItems;
    return (
      <UnstyledButton
        key={label}
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
    );
  });
  const subNavLinks = subNav?.map((sub) => {
    const {
      link,
      label,
    } = sub;
    return (
      <a
        className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
        href="/"
        onClick={(event) => {
          event.preventDefault();
          setActiveLink(link);
        }}
        key={link}
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
        width={{ sm: 350 }}
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
