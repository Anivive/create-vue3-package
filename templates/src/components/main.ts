export default {
  name: 'Component',
  props: {
    title: String
  },
  methods: {
    toUpperCase(val: string) {
      return val.toUpperCase();
    }
  },
  template: `
    <div>{{ toUpperCase(title) }}</div>
  `
};
