import { Component } from '@angular/core';
import { ButtonColor } from 'foo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  public color: ButtonColor;
  public color2: ButtonColor;
  public color3: ButtonColor;
  public disabled: boolean;
  constructor() {
    this.color = ButtonColor.PRIMARY;
    this.color2 = ButtonColor.DISABLED;
    this.color3 = ButtonColor.TERTIARY;
    this.disabled = true;
  }
}
