/* Registry for test content. Each js/tests/test-NN.js calls IELTS.add(kind, no, data).
   kinds: 'listening' (shared by Academic & General Training), 'reading-academic',
   'reading-general', 'writing-academic', 'writing-general'. */
window.IELTS = {
  tests: {},
  add(kind, no, data) {
    (this.tests[kind] = this.tests[kind] || {})[no] = data;
  },
  get(kind, no) {
    return (this.tests[kind] || {})[no] || null;
  }
};
