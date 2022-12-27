import { User } from '../interfaces/user';

export const MyDatabaseFunction = (function () {
  const users: User[] = [];

  return {
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
    },
  };
})();
