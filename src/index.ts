import { User } from "./models/User";

const user = new User({ name: "maimous", age: 666 });

console.log(user.get("name"));
console.log(user.get("age"));

user.set({ name: "maimoudaros", age: 999 });

console.log(user.get("name"));
console.log(user.get("age"));

user.set({ age: 123 });

console.log(user.get("name"));
console.log(user.get("age"));
