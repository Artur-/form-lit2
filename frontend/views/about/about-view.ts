import '!style-loader!css-loader!./about-view.css';
import { html } from 'lit';
import { customElement } from 'lit/decorators';
import { View } from '../../views/view';

@customElement('about-view')
export class AboutView extends View {
  render() {
    return html`<div>Content placeholder</div>`;
  }
}
