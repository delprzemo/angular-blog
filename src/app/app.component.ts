import { Component, Injector } from '@angular/core';
import { ShowCodeComponent } from './show-code/show-code.component';
import { createCustomElement } from '@angular/elements'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-blog';

  constructor(injector: Injector) {
    const ShowCodeElement = createCustomElement(ShowCodeComponent, { injector: injector });
    customElements.define('app-show-code', ShowCodeElement);
  }
}
