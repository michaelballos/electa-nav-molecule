import Link from 'next/link';
import {
  Breadcrumbs,
  Anchor,
} from '@mantine/core';
import ProjectDropdown from '../ProjectDropdown/ProjectDropdown';

const items = [
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'My Projects',
    href: 'projects/my-projects',
  },
  {
    title: 'Overview',
    href: '/projects/my-projects/overview',
  },
].map((item, index) => {
  if (item.title === 'My Projects') {
    return (
      <div
        key={item.title + index.toString()}
        style={{
          display: 'flex',
        }}
      >
        <Link href={item.href}>
          <Anchor
            style={{
              marginRight: 10,
            }}
          >
            {item.title}
          </Anchor>
        </Link>
        <ProjectDropdown />
      </div>
    );
  }
  return (
    <Link
      href={item.href}
      key={index}
    >
      <Anchor>
        {item.title}
      </Anchor>
    </Link>
  );
});

export default function AsideNavHeader() {
  return (
    <Breadcrumbs
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {items}
    </Breadcrumbs>
  );
}
