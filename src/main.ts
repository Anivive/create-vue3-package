export default {
  name: 'Component',
  props: {
    title: String
  },
  methods: {
    toUpperCase(val) {
      return val.toUpperCase();
    }
  },
  template: `
    <div>{{ toUpperCase(title) }}</div>
  `
};
