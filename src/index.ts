import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const BACK_END_URL = "http://localhost:4444/users";

const collection = new Collection<User, UserProps>(
  BACK_END_URL,
  (json: UserProps) => User.buildUser(json)
);

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
