import axios, { AxiosResponse } from "axios";

import { Events } from "./Events";

const BACK_END_URL = "http://localhost:4444/users";

export class Collection<T, K> {
  models: T[] = [];
  events: Events = new Events();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(BACK_END_URL).then((res: AxiosResponse) => {
      res.data.map((value: K) => {
        this.models.push(this.deserialize(value));
      });
      this.trigger("change");
    });
  }
}
