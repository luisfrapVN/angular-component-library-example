import { Component, Input, HostBinding } from '@angular/core';

import { ButtonStyle } from './button-style.enum';
import { ButtonSize } from './button-size.enum';
import { ButtonShape } from './button-shape.enum';
import { ButtonColor } from './button-color.enum';

@Component({
  selector: 'fooButton',

  // 'div[fooButton],span[fooButton],a[fooButton],input[fooButton],button[fooButton]',
  template:
    '<button [disabled]=fooButtonDisabled id={{fooButtonId}} name={{fooButtonName}} type={{fooButtonType}} >{{fooButtonText}} {{fooButtonDisabled}}</button>',

  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public fooButtonId: string;
  @Input() public fooButtonName: string;
  @Input() public fooButtonType: string;
  @Input() public fooButtonText: string;
  @Input() public fooButtonDisabled: boolean;
  // @Input()
  public style: ButtonStyle;

  // @Input()
  public size: ButtonSize;

  // @Input()
  public shape: ButtonShape;

  @Input()
  public color: ButtonColor;

  constructor() {
    this.color = ButtonColor.PRIMARY;
    this.size = ButtonSize.SMALL;
    this.style = ButtonStyle.SOLID;
    this.shape = ButtonShape.SQUARED;
    this.fooButtonDisabled = false;
  }

  @HostBinding('class')
  get classes(): string {
    return `${this.style} ${this.size} ${this.shape} ${this.color}`;
  }
}
