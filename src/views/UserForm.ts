import { View } from "./View";

export class UserForm extends View {
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
}
