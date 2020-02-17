import { User } from "./models/User";

const user = new User({ name: "maimous", age: 666 });

user.on("change", () => {
  console.log("something changed for user");
});
user.on("change", () => {}); // another callback for the change event
user.on("dance", () => {}); // the dance event

console.log(user);
