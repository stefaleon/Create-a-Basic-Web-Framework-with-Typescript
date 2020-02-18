import { User } from "./models/User";

const user = new User({ name: "maimous", age: 666 });

user.events.on("dance", () => {
  console.log("user is in a dancing event");
});

user.events.trigger("dance");
