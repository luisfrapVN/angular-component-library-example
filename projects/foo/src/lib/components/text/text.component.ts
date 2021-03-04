import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector:
    'div[fooText],span[fooText],a[fooText],input[fooText],button[fooText]',

  template:
    '<label for={{id}}>{{id}}<br/><input type="text" placeholder="Placeholder text"></label>',

  // <ng-content></ng-content>
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input() id: string;
  constructor() {}

  ngOnInit(): void {}
}
