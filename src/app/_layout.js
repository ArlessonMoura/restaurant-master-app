import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import initializeDB from '../DB/initializeDB';

import '../styles/global.css';

function rootLayout() {
  return (
    <SQLiteProvider databaseName="users_master_app.db" onInit={initializeDB}>
      <Stack></Stack>
    </SQLiteProvider>
  );
}

export default rootLayout;
