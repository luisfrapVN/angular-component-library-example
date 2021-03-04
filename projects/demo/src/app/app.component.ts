import { Component } from '@angular/core';
import { ButtonColor, ButtonShape, ButtonSize, ButtonStyle } from 'foo';

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

  constructor() {
    this.color = ButtonColor.PRIMARY;
    this.size = ButtonSize.SMALL;
    this.style = ButtonStyle.SOLID;
    this.shape = ButtonShape.SQUARED;
    this.disabled = true;
  }
}
