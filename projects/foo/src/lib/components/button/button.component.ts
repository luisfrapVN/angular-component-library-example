import { Component, Input, HostBinding } from '@angular/core';

import { ButtonStyle } from './button-style.enum';
import { ButtonSize } from './button-size.enum';
import { ButtonShape } from './button-shape.enum';
import { ButtonColor } from './button-color.enum';

@Component({
  selector:
    'div[fooButton],span[fooButton],a[fooButton],input[fooButton],button[fooButton]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  public style: ButtonStyle;

  @Input()
  public size: ButtonSize;

  @Input()
  public shape: ButtonShape;

  @Input()
  public color: ButtonColor;

  constructor() {
    this.color = ButtonColor.PRIMARY;
    this.size = ButtonSize.SMALL;
    this.style = ButtonStyle.SOLID;
    this.shape = ButtonShape.SQUARED;
  }

  @HostBinding('class')
  get classes(): string {
    return `${this.style} ${this.size} ${this.shape} ${this.color}`;
  }
}
