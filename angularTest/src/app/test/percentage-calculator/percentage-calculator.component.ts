import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-percentage-calculator',
  standalone: true,
  templateUrl: './percentage-calculator.component.html',
  imports: [CommonModule],
  styleUrls: ['./percentage-calculator.component.css']
})
export class PercentageCalculatorComponent {
  numberA: number = 0;
  numberB: number = 0;
  result: number | null = null;

  generateRandomNumbers(): void {
    this.numberA = Math.floor(100000 + Math.random() * 900000);

    this.numberB = Math.floor(10 + Math.random() * 990);

    this.result = parseFloat((this.numberA / this.numberB).toFixed(2));
  }
}
