import { User } from "./models/User";

const user = new User({ id: 1 });

user.on("change", () => {
  console.log("change event triggered, user is: ", user);
});

user.fetch();
