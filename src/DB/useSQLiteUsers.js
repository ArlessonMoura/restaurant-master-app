import { useSQLiteContext } from 'expo-sqlite';

const useSQLiteUsers = () => {
  const db = useSQLiteContext();

  const createUser = async (data) => {
    try {
      const req = await db.prepareAsync(
        `INSERT INTO users (user_name, user_email, user_password, user_role) VALUES ($user_name, $user_email, $user_password, $user_role)`,
      );
      const res = await req.executeAsync({
        $user_name: data.user_name,
        $user_email: data.user_email,
        $user_password: data.user_password,
        $user_role: data.user_role,
      });

      console.log('Inserted row ID:', res.lastInsertRowId);
      console.log('changed rows:', res.changes);

      await req.finalizeAsync();

      return res.lastInsertRowId;
    } catch (error) {
      console.error('Error inserting data:', error);
      throw error;
    }
  };

  return { createUser };
};

export default useSQLiteUsers;
