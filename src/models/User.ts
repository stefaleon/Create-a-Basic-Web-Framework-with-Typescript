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

  constructor(attrs?: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get get() {
    return this.attributes.get;
  }

  get set() {
    return this.attributes.set;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get fetch() {
    return this.sync.fetch;
  }

  get save() {
    return this.sync.save;
  }
}
