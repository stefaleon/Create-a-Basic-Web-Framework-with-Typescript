import { Collection } from "./models/Collection";

const BACK_END_URL = "http://localhost:4444/users";

const collection = new Collection(BACK_END_URL);

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
