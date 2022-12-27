import { User } from '../interfaces/user';

const users: User[] = [];

export const MyDatabaseModule = {
  add (user: User) {
    users.push(user);
  },

  remove (index: number) {
    users.splice(index, 1);
  },

  show () {
    for (const user of users) {
      console.log(user);
    }
  }
};
