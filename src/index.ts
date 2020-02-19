import { User } from "./models/User";

const BACK_END_URL = "http://localhost:4444/users";

const user = new User({}, BACK_END_URL);

const data = { name: "maimous", age: 666 };
user.sync.save(data);
user.sync.fetch(1).then(res => console.log(res));
