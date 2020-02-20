import { AxiosPromise, AxiosResponse } from "axios";

type Callback = () => void;

interface iAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(value: T): void;
  getAll(): T;
}

interface iSync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface iEvents {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

interface iHasId {
  id?: number;
}

export class Model<T extends iHasId> {
  constructor(
    private attributes: iAttributes<T>,
    private sync: iSync<T>,
    private events: iEvents
  ) {}

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
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

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
