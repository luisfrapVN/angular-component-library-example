import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-foo',
  template: `
    <p>
      foo works!
    </p>
  `,
  styles: [
  ]
})
export class FooComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
