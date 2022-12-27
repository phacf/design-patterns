import { MyDatabaseClassic } from './db/database-classic';

const db1 = MyDatabaseClassic.instance;

db1.add({ name: 'paulo', age: 36 });
db1.show();
