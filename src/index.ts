import { User } from "./models/User";

const user = new User({ name: "maimous", age: 666 });

user.on("change", () => {
  console.log("something changed for user");
});
user.on("change", () => {
  console.log("something else changed for user");
}); // another callback for the change event
user.on("dance", () => {
  console.log("user is in a dancing event");
}); // the dance event

console.log(user);
user.trigger("change");
user.trigger("dance");
user.trigger("an invalid event");
user.trigger("change");
