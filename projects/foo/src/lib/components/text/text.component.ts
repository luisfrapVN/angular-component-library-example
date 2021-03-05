import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fooText',
  // 'div[fooText],span[fooText],a[fooText],input[fooText],button[fooText],fooText',

  template:
    '<div><label for={{fooIdInput}}>{{fooLabelText}}</label><input id={{fooIdInput}} name={{fooInputName}} type={{fooInputType}} placeholder={{fooInputPlHo}}></div>',
  // '<label for={{idInput}}>{{labelText}}<br/><input id={{idInput}} name={{inputName}} type="text" placeholder={{inputPlHo}}></label>',

  // <ng-content></ng-content>
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input() fooIdInput: string;
  @Input() fooInputName: string;
  @Input() fooInputPlHo: string;
  @Input() fooInputType: string;
  @Input() fooLabelText: string;
  constructor() {}

  ngOnInit(): void {}
}
