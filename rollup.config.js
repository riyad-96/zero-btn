export default [
  {
    input: './src/zero-btn.js',
    output: {
      file: 'zero-btn.js',
      format: 'umd',
      name: 'zero-btn',
    }
  },
  {
    input: './src/zero-btn.js',
    output: {
      file: 'zero-btn.esm.js',
      format: 'esm',
    }
  }
];
