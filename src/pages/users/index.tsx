import useUsers from '../../features/users/model/getUsers';

export default function UsersPage() {
  const { data } = useUsers();
  console.log(data);

  return <h1>Users Page</h1>;
}
