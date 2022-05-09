import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href='/'>
        <a style={{ color: router.pathname === '/' ? 'tomato' : 'dodgerblue' }}>
          Home
        </a>
      </Link>
      <Link href='/about'>
        <a
          style={{
            color: router.pathname === '/about' ? 'tomato' : 'dodgerblue',
          }}
        >
          About
        </a>
      </Link>
    </nav>
  );
}

export default NavBar;
