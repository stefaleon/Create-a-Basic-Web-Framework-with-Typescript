import { AxiosResponse } from "axios";
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

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    const id = this.get("id");

    if (typeof id !== "number") {
      throw new Error("fetch: no id provided");
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }
}
