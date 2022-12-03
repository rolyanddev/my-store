import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Pedro';
  age = 23;
  image = 'https://source.unsplash.com/random';
  isButtonDisable = true;
  person = {
    name: 'Pedro Angel',
    age: 23,
    avatar: 'https://source.unsplash.com/random',
  };

  toggleButton() {
    this.isButtonDisable = !this.isButtonDisable;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
