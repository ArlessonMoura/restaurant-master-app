async function initializeDB(db) {
  await db.execAsync(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT,
    user_email TEXT,
    user_password TEXT,
    user_role TEXT    
  )`);
}

export default initializeDB;
