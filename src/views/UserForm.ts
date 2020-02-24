import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      // "click:button": this.onButtonClick,
      // "mouseenter:h1": this.onMouseEnterHeader,
      "click:.set-age": this.onSetAgeButtonClick
    };
  }

  // onButtonClick(): void {
  //   console.log("button clicked!");
  // }

  // onMouseEnterHeader(): void {
  //   console.log("mouse entered h1!");
  // }

  onSetAgeButtonClick(): void {
    console.log("set age button clicked");
  }

  template(): string {
    return `<div>
    <h1>User Form</h1>
    <div>Name: ${this.model.get("name")}</div>
    <div>Age: ${this.model.get("age")}</div>
    <input />
    <button>Click me</button>
    <button class="set-age">Set Random Age</button>
    </div>`;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      console.log(eventName);
      console.log(selector);

      fragment
        .querySelectorAll(selector)
        .forEach(element =>
          element.addEventListener(eventName, eventsMap[eventKey])
        );
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
