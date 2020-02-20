import { User } from "./models/User";

// const user = User.buildUser({ name: "testuser", age: 321 });

// user.on("save", () => {
//   console.log("save event triggered, user is: ", user);
// });

// user.save();

const user = User.buildUser({ id: 1 });

user.on("change", () => {
  console.log("change event triggered, user is: ", user);
});

user.fetch();
