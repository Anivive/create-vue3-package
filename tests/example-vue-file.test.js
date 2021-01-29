import { shallowMount } from '@vue/test-utils';
import Component from '@/main.vue';

let wrapper;

let title = 'Testing Title';

beforeEach(() => {
  wrapper = shallowMount(Component, {
    propsData: {
      title
    },
    mocks: {},
    stubs: {},
    methods: {},
  });
});

afterEach(() => {
  wrapper.unmount();
});

describe('Component', () => {
  it('Should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('Should output the title prop to upper case', () => {
    expect(wrapper.text()).toEqual(title.toUpperCase());
  })
});