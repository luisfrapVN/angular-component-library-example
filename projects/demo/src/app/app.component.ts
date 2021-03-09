import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';

  public imagen: string =
    'https://www.tekcrispy.com/wp-content/uploads/2010/10/orange.jpg';

  public disabled: boolean;
  public icon: boolean;
  constructor() {
    this.disabled = true;
  }
}
