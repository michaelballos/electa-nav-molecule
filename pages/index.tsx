import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import AsideNav from '../components/AsideNav/AsideNav';

export default function HomePage() {
  return (
    <>
      <AsideNav />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
