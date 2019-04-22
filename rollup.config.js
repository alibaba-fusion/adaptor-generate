import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import packageInfo from './package.json';

const input = './src/index.js';
const name = 'AdaptorGenerate';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

const babelOptions = {
  exclude: /node_modules/,
  // We are using @babel/plugin-transform-runtime
  runtimeHelpers: true,
  configFile: './babel.config.js',
};

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
  namedExports: {
    './node_modules/react-is/index.js': ['isValidElementType', 'isElement', 'ForwardRef'],
  },
};

export default [
  {
    input,
    output: { file: `umd/adaptor-generate.js`, format: 'commonjs', name, globals },
    external: [...Object.keys(globals), 'styled-components', '@alifd/adaptor-helper', 'prop-types'],
    plugins: [
      nodeResolve({
        extensions: ['.js', '.ts', '.jsx']
      }),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development'), '__VERSION__': packageInfo.version }),
    ],
  },
  {
    input,
    output: { file: `umd/adaptor-generate.esm.js`, format: 'esm', name, globals },
    external: [...Object.keys(globals), 'styled-components', '@alifd/adaptor-helper', 'prop-types'],
    plugins: [
      nodeResolve({
        extensions: ['.js', '.ts', '.jsx']
      }),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development'), '__VERSION__': packageInfo.version }),
    ],
  },
  {
    input,
    output: { file: `umd/adaptor-generate.development.js`, format: 'umd', name, globals },
    external: Object.keys(globals),
    plugins: [
      nodeResolve({
        extensions: ['.js', '.ts', '.jsx']
      }),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development'), '__VERSION__': packageInfo.version }),
    ],
  },
  {
    input,
    output: { file: `umd/adaptor-generate.production.min.js`, format: 'umd', name, globals },
    external: Object.keys(globals),
    plugins: [
      nodeResolve({
        extensions: ['.js', '.ts', '.jsx']
      }),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production'), '__VERSION__': packageInfo.version }),
      uglify(),
    ],
  },
];
