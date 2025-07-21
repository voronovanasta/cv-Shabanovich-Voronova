import useUpdateUser from '../../features/users/model/updateUser';
import useGetUsers from '../../features/users/model/getUsers';

export default function UsersPage() {
  const { data: users } = useGetUsers();
  console.log(users);

  const variables = {
    id: 'user1',
    input: {
      username: 'adminUser',
      email: 'admin@example.com',
      password: 'SecurePass123!',
      firstName: 'Admin',
      lastName: 'User',
      departmentId: 'dep-001',
      positionId: 'pos-002',
      skills: ['React', 'GraphQL'],
      languages: ['English', 'German'],
    },
  };

  const updateUserMutation = useUpdateUser();
  const clickHandler = () => {
    console.log('Update user clicked');
    updateUserMutation.mutate(variables, {
      onSuccess: (data) => {
        console.log('User updated successfully:', data.updateUser);
      },
      onError: (error) => {
        console.error('Error updating user:', error.message);
      },
    });
  };

  return <button onClick={clickHandler}>Users Page</button>;
}
