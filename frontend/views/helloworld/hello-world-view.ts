import '!style-loader!css-loader!./hello-world-view.css';
import { showNotification } from '@vaadin/flow-frontend/a-notification';
import { Binder, field } from '@vaadin/flow-frontend/form';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';
import { html } from 'lit';
import { customElement } from 'lit/decorators';
import Person from '../../generated/com/example/application/Person';
import PersonModel from '../../generated/com/example/application/PersonModel';
import { View } from '../../views/view';

@customElement('hello-world-view')
export class HelloWorldView extends View {
  binder: Binder<Person, PersonModel>;

  constructor() {
    super();
    this.binder = new Binder<Person, PersonModel>(this, PersonModel);
  }
  render() {
    return html`
      <vaadin-text-field ...="${field(this.binder.model.name)}" label="Name"></vaadin-text-field>
      <vaadin-button @click="${this.sayHello}">Say hello</vaadin-button>
    `;
  }

  sayHello() {
    showNotification('Hello ' + this.binder.value.name);
  }
}
