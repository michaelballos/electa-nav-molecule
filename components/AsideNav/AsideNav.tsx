/* eslint-disable */
import React, {
  useState,
  useEffect,
  SVGAttributes,
  FC,
  useCallback,
} from 'react';
import Link from 'next/link';
import {
  Anchor,
  Text,
  Navbar,
  Accordion,
  UnstyledButton,
} from '@mantine/core';
import { useStyles } from './AsideNav.styles';
import AccordionNavLinks from '../AccordionNavLinks/AccordionNavLinks';

type AsideNavLinks = Record<LinkUrl, AsideNavLink>

type AsideNavGrouping = {
  urlTemplate: (initialId: string) => string; // a3f9fj2f99j => /instances/a3f9fj2f99j
}

// e.g. /key/pull-ups/first-pull-up
type LinkUrl = string;
type AsideNavSubSubLink = {
  label: string;
  url: string;
  icon: React.ReactNode;
  active: boolean;
};

type AsideNavSubLink = {
  label: string;
  subSubLinks?: Record<LinkUrl, AsideNavSubSubLink>
};

type AsideNavLinkBase = {
  label: string;
  url: string;
  icon: React.ReactNode;
  active: boolean;
}

type AsideNavLink = AsideNavLinkBase | AsideNavLinkBase & {
  subLinks: AsideNavSubLink[]
  subNavControl?: React.ReactNode;
};

export interface IAsideNav {
  header: JSX.Element;
  children: JSX.Element | JSX.Element[];
  currentPath: LinkUrl;
  links: AsideNavLink[];
}

/*
<AsideNav
  links={{
    '/overview': {
      label: 'overview',
      icon: <ThemeIcon />
    }
    '/explorer': {
      label: 'Explorer',
      icon: <ThemeIcon />
      subLinks: {
        '/dev-instance-1': {
          label: 'dev-instance-1',
          subsubLinks: {
            '/roles': {
              label: 'Roles',
            },
            '/qualifications': {
              label: 'Qualifications',
            },
            'delegations': {
              label: 'Delegations',
            }
          }
        }
     }
  }}
/>

   link                         sublink  subsublink
    |     [[-----Grouping url--]]  |         |
    V     |                     |  V         V
/explorer/instances/{instanceId}/state/qualifications
/explorer/instances/{instanceId}/state/qualifications
/explorer/instances/{instanceId}/state/qualifications
 */

export default function AsideNav({
  links,
  currentPath,
  header,
  children,
}: IAsideNav) {
  const { classes, cx, } = useStyles();
  const [ active, setActive, ] = useState('Overview');
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
  const [
    hasAccordionLinks,
    setAccordionLinks,
  ] = useState(false);

  const mainLinks = links.map((navLinkItems) => {
    const {
      link,
      label,
      subLinks,
    } = navLinkItems;
    return (
      <Link
        key={label}
        href={`/projects/my-projects/${link}`}
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
      subLinks,
    } = sub;
    if (subLinks) {
      setAccordionLinks(true);
    }
    return (
      <Link
        key={link}
        href={`/projects/my-projects/${active.charAt(0).toLowerCase() + active.slice(1)}/${link}`}
      >
        <Anchor
          className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
          onClick={() => {
            setActiveLink(link);
          }}
        >
          {label}
        </Anchor>
      </Link>
    );
  });

  const accordionLinks = subNav?.map((item) => {
    return (
      <Accordion.Item
        key={item.label}
        label={item.label}
      >
        Item
      </Accordion.Item>
    );
  });

  const accordion = (
    <Accordion
      offsetIcon={false}
      transitionDuration={5}
      iconPosition="right"
      styles={{
        control: {
          height: '2.5em',
        },
        itemTitle: {
          border: 'none',
          borderBottom: '1px solid white',
          height: 'max-content',
        },
        contentInner: {
          padding: 0,
        },
        content: {
          padding: 0,
        },
      }}
    >
      {accordionLinks}
    </Accordion>
  );

  console.log(accordion);
  console.log(accordionLinks);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'max-content',
        gap: 0,
      }}
    >
      <div className={classes.header}>
        {header}
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
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
            {
              !hasAccordionLinks
                ? subNavLinks
                : accordion
            }
          </div>
        </Navbar.Section>
      </Navbar>
      {children}
      </div>
    </div>
  );
}
