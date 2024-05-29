import fs from 'fs/promises';
import path from 'path';
import { User } from 'src/models/user';

const DB_PATH: string = path.resolve(__dirname, '..', 'db.json');

export const getDB = async (): Promise<any> => {
  const db = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(db);
}

export const saveDB = async (db: User[]): Promise<any> => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  return db;
}

export const insert = async (data: User): Promise<any> => {
  const db = await getDB();
  db.notes.push(data);
  await saveDB(db);
  return data ;
}
