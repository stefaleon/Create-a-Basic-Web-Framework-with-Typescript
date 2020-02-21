import axios, { AxiosResponse } from "axios";

import { User, UserProps } from "./User";
import { Events } from "./Events";

const BACK_END_URL = "http://localhost:4444/users";

export class Collection {
  models: User[] = [];
  events: Events = new Events();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(BACK_END_URL).then((res: AxiosResponse) => {
      res.data.map((value: UserProps) => {
        const user = User.buildUser(value);
        this.models.push(user);
      });
      this.trigger("change");
    });
  }
}
