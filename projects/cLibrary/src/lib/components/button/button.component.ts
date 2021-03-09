import { Component, Input, HostBinding } from '@angular/core';

import { ButtonStyle } from './button-style.enum';
import { ButtonSize } from './button-size.enum';
import { ButtonShape } from './button-shape.enum';
import { ButtonColor } from './button-color.enum';
import { OnInit } from '@angular/core';

@Component({
  selector: 'cLibraryButton',

  templateUrl: './button.component.html',
  // '<button icon tipo [disabled]=cLibraryButtonDisabled id={{cLibraryButtonId}} name={{cLibraryButtonName}} type={{cLibraryButtonType}} >  <div>{{cLibraryButtonText}}</div><div>{{textoIcono}}</div><div >{{textoCompuesto}}</div>  </button>',

  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public cLibraryButtonId: string;
  @Input() public cLibraryButtonName: string;
  @Input() public cLibraryButtonType: string;
  @Input() public cLibraryButtonText: string;
  @Input() public cLibraryButtonDisabled: boolean;

  @Input() public tipo: string;
  @Input() public icon: string;

  public style: ButtonStyle;
  public size: ButtonSize;
  public shape: ButtonShape;
  public color: ButtonColor;

  public textoCompuesto: string;
  public textoIcono: string;

  constructor() {
    this.color = ButtonColor.PRIMARY;
    this.size = ButtonSize.MEDIUM;
    this.style = ButtonStyle.SOLID;
    this.shape = ButtonShape.SQUARED;
    this.cLibraryButtonDisabled = false;
    this.textoCompuesto = '';
    this.textoIcono = '';
    this.tipo = '';
    this.icon = '';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cambiarTipo(this.tipo);
    this.esIcono(this.icon);
  }

  esIcono(icon: string) {
    if (icon === 'icon') {
      this.size = ButtonSize.SMALL;
      this.textoIcono = '+';
    } else if (icon === 'compound') {
      this.size = ButtonSize.MEDIUM;
      this.textoCompuesto = '+';
    }
  }
  cambiarTipo(tipo: string) {
    switch (tipo) {
      case 'primary':
        this.color = ButtonColor.PRIMARY;
        break;
      case 'secondary':
        this.color = ButtonColor.SECONDARY;
        break;
      case 'tertiary':
        this.color = ButtonColor.TERTIARY;
        break;
      default:
        this.color = ButtonColor.DEFAULT;
        break;
    }
  }
  @HostBinding('class')
  get classes(): string {
    return `${this.style} ${this.size} ${this.shape} ${this.color}`;
  }
}
