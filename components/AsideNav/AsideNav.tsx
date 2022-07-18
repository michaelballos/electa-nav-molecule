import React, {
  useMemo,
  useState,
  ReactNode,
  SVGAttributes,
  FC,
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
  header: ReactNode;
  children: ReactNode | ReactNode[];
  links: {
    link: string;
    label: string;
    icon?: Icon;
    subLinks?: {
      link: string;
      label: string;
      icon?: Icon;
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

  return (
    <Stack
      style={{
        height: 'max-content',
        gap: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100vw',
          height: 50,
          paddingLeft: '5em',
        }}
      >
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
            {}
          </div>
        </Navbar.Section>
      </Navbar>
      {children}
      </Group>
    </Stack>
  );
}

/**
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
 return (
 <UnstyledButton
 key={label}
 onClick={() => setActive(label)}
 className={cx(classes.mainLink)}
 >
 <div className={cx({ [classes.mainLinkActive]: label === active })} />
 {icon}
 <Text
 className={cx(classes.mainLinkLabel)}
 >
 {label}
 </Text>
 </UnstyledButton>
 );

 */
