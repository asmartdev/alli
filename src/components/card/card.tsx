import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'alli-card'
})
export class Card {
  render() {
    return <Host class="block shadow rounded bg-white p-4"><slot /></Host>;
  }
}
