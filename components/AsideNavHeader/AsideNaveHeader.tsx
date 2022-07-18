import {
  Breadcrumbs,
  Anchor,
} from '@mantine/core';
import ProjectDropdown from "../ProjectDropdown/ProjectDropdown";

const items = [
  {
    title: 'Projects',
    href: '#',
  },
  {
    title: 'My Projects',
    href: '#',
  },
  {
    title: 'Overview',
    href: '#',
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
        <Anchor
          style={{
            marginRight: 10,
          }}
          href={item.href}
        >
          {item.title}
        </Anchor>
        <ProjectDropdown />
      </div>
    );
  }
  return (
    <Anchor
      href={item.href}
      key={index}
    >
      {item.title}
    </Anchor>
  );
});

export default function AsideNaveHeader() {
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
