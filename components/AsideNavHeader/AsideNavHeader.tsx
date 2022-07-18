import Link from 'next/link';
import {
  Breadcrumbs,
  Anchor,
} from '@mantine/core';
import ProjectDropdown from '../ProjectDropdown/ProjectDropdown';

const formatPath = (path: string) => {
  return path.replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
};

export default function AsideNavHeader({ currentPath }: { currentPath: string }) {
  const pathsArray = currentPath.replace('-', ' ').split('/').splice(3);
  const basePaths = [
    'projects',
    'my-projects',
  ];
  const allPaths = basePaths.concat(pathsArray);
  const items = allPaths.map((path, index) => {
    return (
      <div
        key={path + index.toString()}
        style={{
          display: 'flex',
        }}
      >
        <Link href={`/${path}`}>
          <Anchor
            style={{
              marginRight: (
                path === 'my-projects'
                  ? 15
                  : 0
              ),
            }}
          >
            {formatPath(path)}
          </Anchor>
        </Link>
        {
          path === 'my-projects'
            ? <ProjectDropdown />
            : null
        }
      </div>
    );
    });
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
