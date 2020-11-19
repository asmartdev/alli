import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'alli-card'
})
export class Card {
  render() {
    return <Host class="block shadow rounded p-4 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-50"><slot /></Host>;
  }
}
