import { Events } from "./Events";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events: Events = new Events();

  sync: Sync = new Sync(this.url);

  constructor(private data: UserProps, private url: string) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
