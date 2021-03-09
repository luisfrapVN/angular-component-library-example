import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cLibraryImage',
  template:
    '<img id={{cLibraryImageID}} src={{cLibraryImageSource}} alt={{cLibraryImageAlt}}>',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input()
  cLibraryImageSource: string;
  @Input()
  cLibraryImageAlt: string;
  @Input()
  cLibraryImageID: string;
  constructor() {}

  ngOnInit(): void {}
}
