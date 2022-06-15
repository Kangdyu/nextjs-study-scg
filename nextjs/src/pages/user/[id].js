import axios from 'axios';
import Image from 'next/image';
import PageHead from '../../components/PageHead';

function UserDetailPage({ user }) {
  return (
    <div>
      <PageHead title={`${user.first_name} ${user.last_name}`} />
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <p>User ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <Image
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        width={200}
        height={200}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const userId = context.params.id;
  const response = await axios.get(`https://reqres.in/api/users/${userId}`);

  return {
    props: {
      user: response.data.data,
    },
  };
}

export default UserDetailPage;
