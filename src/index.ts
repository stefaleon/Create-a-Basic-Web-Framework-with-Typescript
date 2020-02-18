import { User } from "./models/User";

const user = new User({ id: 1 });
user.set({ age: 789 });
user.save();
user.fetch();

const user2 = new User({ name: "gatoulas", age: 2 });
user2.save();
user2.fetch();
