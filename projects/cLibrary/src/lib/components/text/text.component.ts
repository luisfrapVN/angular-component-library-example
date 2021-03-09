import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cLibraryText',

  template:
    '<div><label for={{cLibraryIdInput}}>{{cLibraryLabelText}}</label><input id={{cLibraryIdInput}} name={{cLibraryInputName}} type={{cLibraryInputType}} placeholder={{cLibraryInputPlHo}}></div>',

  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input() cLibraryIdInput: string;
  @Input() cLibraryInputName: string;
  @Input() cLibraryInputPlHo: string;
  @Input() cLibraryInputType: string;
  @Input() cLibraryLabelText: string;
  constructor() {}

  ngOnInit(): void {}
}
