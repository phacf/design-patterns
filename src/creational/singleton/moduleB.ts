import { MyDatabaseModule } from './db/database-module';

const db1 = MyDatabaseModule;

db1.add({ name: 'tonhão', age: 45 });
db1.show();
