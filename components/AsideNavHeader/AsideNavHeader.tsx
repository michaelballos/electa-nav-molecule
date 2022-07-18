import Link from 'next/link';
import {
  Breadcrumbs,
  Anchor,
} from '@mantine/core';
import ProjectDropdown from '../ProjectDropdown/ProjectDropdown';

const formatPath = (path: string) => {
  const split = path.split('/');
  const label = split[split.length - 1];
  return label.replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
};

const basePaths = [
  'projects',
  'projects/my-projects',
];

export default function AsideNavHeader({ currentPath }: { currentPath: string }) {
  const dynamicPathsArray = currentPath.replace('-', ' ').split('/').splice(3);
  const baseLinks = basePaths.map((path, index) => (
    <div
      key={path + index.toString()}
      style={{
        display: 'flex',
      }}
    >
      <Link
        href={`/${path}`}
      >
        <Anchor
          style={{
            marginRight: (
              path === 'projects/my-projects'
                ? 15
                : 0
            ),
          }}
        >
          {formatPath(path)}
        </Anchor>
      </Link>
      {
        path === 'projects/my-projects'
          ? <ProjectDropdown />
          : null
      }
    </div>
  ));
  const dynamicLinks = dynamicPathsArray.map((path) => (
    <Link
      key={path}
      href={`/${path}`}
    >
      <Anchor>
        {formatPath(path)}
      </Anchor>
    </Link>
  ));
  return (
    <Breadcrumbs
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {baseLinks}
      {dynamicLinks}
    </Breadcrumbs>
  );
}
