/**
 * @jest-environment jsdom-sixteen
 */
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

import { defineCustomElements } from 'stencil-example/loader'
defineCustomElements(window)

// window.customElements.define('my-component', class MyComponent {})

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    console.log(window.customElements.get('my-component'))
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
