import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-current-clock',
  templateUrl: './current-clock.component.html',
  styleUrls: ['./current-clock.component.css']
})
export class CurrentClockComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private timerId: any;

  ngOnInit(): void {
    this.updateTime();
    this.timerId = setInterval(() => this.updateTime(), 1000); // Cập nhật mỗi giây
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId); // Dừng bộ đếm khi component bị hủy
  }

  private updateTime(): void {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    };
    this.currentTime = date.toLocaleTimeString('en-US', options);
  }
}
