import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClicked() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validCharacters = '';
    if (this.includeLetters) {
      validCharacters += letters;
    }
    if (this.includeNumbers) {
      validCharacters += numbers;
    }
    if (this.includeSymbols) {
      validCharacters += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validCharacters.length);
      generatedPassword += validCharacters[index];
    }
    this.password = generatedPassword;
  }

  onChangeLength(event: Event) {
    this.length = parseInt((event.target as HTMLInputElement).value);
  }
}
