// stopwatch.component.ts
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
})
export class StopwatchComponent implements OnDestroy {
  time: number = 0;
  interval: any = null;
  running: boolean = false;

  start() {
    if (!this.running) {
      this.interval = setInterval(() => {
        this.time++;
      }, 1000);
      this.running = true;
    }
  }

  stop() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }

  reset() {
    this.stop();
    this.time = 0;
  }

  formatTime(): string {
    const hours = Math.floor(this.time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((this.time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (this.time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  ngOnDestroy() {
    this.stop();
  }
}
