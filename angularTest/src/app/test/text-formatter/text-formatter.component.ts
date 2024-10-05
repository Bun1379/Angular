import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-formatter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-formatter.component.html',
  styleUrls: ['./text-formatter.component.css']
})
export class TextFormatterComponent {
  inputText: string = '';
  formattedText: string = '';

  formatText(): void {
    if (!this.inputText) {
      this.formattedText = '';
      return;
    }

    let text = this.inputText.replace(/\s{2,}/g, ' ');

    text = text.replace(/(?:^\.?\s*)([a-z])/g, (match, p1) => p1.toUpperCase());

    text = text.replace(/\. (\w)/g, (match, p1) => `. ${p1.toUpperCase()}`);

    this.formattedText = text;
  }
}
