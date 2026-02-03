import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/scripts/scheduled/myScheduled.ts',

  output: {
    file: 'dist/myScheduled.js',
    format: 'amd'
  },

  external: [
    'N/record',
    'N/search',
    'N/runtime',
    'N/log'
  ],

  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' })
  ]
};
