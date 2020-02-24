import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.renderOnChange();
  }

  renderOnChange(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeButtonClick,
      "click:.set-name": this.onSetNameButtonClick
    };
  }

  onSetAgeButtonClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameButtonClick = (): void => {
    console.log("set name button clicked");
    const input = this.parent.querySelector("input");

    if (input.value.trim().length > 0) {
      this.model.set({ name: input.value });
    }
  };

  template(): string {
    return `<div>
    <h1>User Form</h1>
    <div>Name: ${this.model.get("name")}</div>
    <div>Age: ${this.model.get("age")}</div>
    <p>
    <input />
    <button class='set-name'>Set Name</button>
    </p>
    <p>
    <button class="set-age">Set Random Age</button>
    
    </div>`;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      // console.log(eventName);
      // console.log(selector);

      fragment
        .querySelectorAll(selector)
        .forEach(element =>
          element.addEventListener(eventName, eventsMap[eventKey])
        );
    }
  }

  render(): void {
    this.parent.innerHTML = ""; //clear all before each new render

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
