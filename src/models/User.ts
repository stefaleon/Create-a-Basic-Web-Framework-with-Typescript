import { Model } from "./Model";
import { Events } from "./Events";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const BACK_END_URL = "http://localhost:4444/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Sync(BACK_END_URL),
      new Events()
    );
  }
}
