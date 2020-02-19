import { Events } from "./Events";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const BACK_END_URL = "http://localhost:4444/users";

export class User {
  events: Events = new Events();
  sync: Sync<UserProps> = new Sync(BACK_END_URL);
  attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
