import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  public time: string;
  public hour: string;
  public minute: string;
  public second: string;

  constructor() { }

  ngOnInit() {
    setInterval(() => this.getTime(), 1000);
  }

  getTime() {
    let newTime = new Date();
    newTime.setHours( newTime.getHours() + 1);
    this.time = newTime.toJSON().substring(11, 19);
    this.hour = this.time.substring(0, 2);
    this.minute = this.time.substring(3, 5);
    this.second = this.time.substring(6, 8);
  }

  setActive(key: string, position: number, value: number): boolean {
    if (key) {
      let timeNumber = parseInt(key.charAt(position));

      if (value === 1) {
        if (timeNumber === 1 || timeNumber === 3 || timeNumber === 5 || timeNumber === 7 || timeNumber === 9) {
          return true;
        }
      }
      else if (value === 2) {
        if (timeNumber === 2 || timeNumber === 3 || timeNumber === 6 || timeNumber === 7) {
          return true;
        }
      }
      else if (value === 4) {
        if (timeNumber === 4 || timeNumber === 5 || timeNumber === 6 || timeNumber === 7) {
          return true;
        }
      }
      else if (value === 8) {
        if (timeNumber === 8 || timeNumber === 9) {
          return true;
        }
      }

    }
  }

}
