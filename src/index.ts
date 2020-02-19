import { User } from "./models/User";

const user = new User();

const data = { name: "maimous", age: 666 };
user.save(data).then(res => console.log("sync save result: ", res));
user.fetch(1).then(res => console.log("sync fetch result for id=1: ", res));

user.on("dance", () => {
  console.log("user is in a dancing event");
});

user.trigger("dance");
