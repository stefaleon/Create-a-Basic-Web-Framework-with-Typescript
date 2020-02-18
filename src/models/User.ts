import axios, { AxiosResponse } from "axios";

import { Events } from "./Events";

const BACK_END_URL = "http://localhost:4444/users";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events: Events = new Events();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`${BACK_END_URL}/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`${BACK_END_URL}/${id}`, this.data);
    } else {
      axios.post(`${BACK_END_URL}`, this.data);
    }
  }
}
