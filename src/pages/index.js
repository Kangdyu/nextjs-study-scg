import axios from 'axios';
import Link from 'next/link';
import PageHead from '../components/PageHead';

function HomePage({ users }) {
  return (
    <div>
      <PageHead title='Home' />
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`}>
              <a>{`${user.first_name} ${user.last_name}`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get('https://reqres.in/api/users?per_page=12');

  return {
    props: {
      users: response.data.data,
    },
  };
}

export default HomePage;
