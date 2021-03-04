import { Component } from '@angular/core';
import { ButtonColor } from 'foo'; //, ButtonShape, ButtonSize, ButtonStyle

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  public color;
  public size;
  public style;
  public shape;
  public disabled;
  public color2: ButtonColor;
  constructor() {
    this.color = ButtonColor.DEFAULT;
    this.color2 = ButtonColor.DISABLED;
    // this.size = ButtonSize.SMALL;
    // this.style = ButtonStyle.SOLID;
    // this.shape = ButtonShape.SQUARED;
    this.disabled = true;
  }
}
