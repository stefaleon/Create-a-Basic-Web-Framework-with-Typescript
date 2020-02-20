import { User } from "./models/User";

const user = new User({ name: "testuser", age: 321 });

user.on("save", () => {
  console.log("save event triggered, user is: ", user);
});

user.save();
