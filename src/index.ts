import { User } from "./models/User";

const user = new User({});

const data = { name: "maimous", age: 666 };
user.sync.save(data).then(res => console.log("sync save result: ", res));
user.sync
  .fetch(1)
  .then(res => console.log("sync fetch result for id=1: ", res));
