import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  selectedColor: string = '';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  onColorChange(color: string): void {
    this.selectedColor = color;
    this.document.body.style.backgroundColor = color;
  }
}
