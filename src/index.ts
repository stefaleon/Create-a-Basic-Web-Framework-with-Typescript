import { User } from "./models/User";

const user = new User({ name: "papias" });

console.log("user name is:", user.get("name"));

user.on("change", () => {
  console.log("change event triggered, name is now: ", user.get("name"));
});

user.set({ name: "maimous" });
