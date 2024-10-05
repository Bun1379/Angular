import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random-array-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-array-display.component.html',
  styleUrls: ['./random-array-display.component.css']
})
export class RandomArrayDisplayComponent implements OnInit {
  allItems: number[] = [];
  displayedRows: number[][] = [];
  numberOfRows: number = 0;

  ngOnInit(): void {
    this.generateRandomArray();
  }

  generateRandomArray(): void {
    const min = 4;
    const max = 15;
    const length = Math.floor(Math.random() * (max - min + 1)) + min;

    this.allItems = Array.from({ length }, () => Math.floor(Math.random() * 100) + 1);

    this.numberOfRows = Math.floor(this.allItems.length / 4);

    const itemsToShow = this.numberOfRows * 4;
    const displayedItems = this.allItems.slice(0, itemsToShow);

    this.displayedRows = [];
    for (let i = 0; i < displayedItems.length; i += 4) {
      this.displayedRows.push(displayedItems.slice(i, i + 4));
    }
  }
}
