import fs from 'node:fs'
import path from 'node:path'
import { rollup } from 'rollup'
import typescript from 'rollup-plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vuePlugin from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'
import { umdOutputOptions, umdMinOutputOptions, esOutputOptions } from './outputOptions.js'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * 打包配置
 */
rollup({
  input: 'src/main.ts',
  external: ['vue'],
  plugins: [
    typescript({ tsconfig: false, experimentalDecorators: true, module: 'es2015' }),
    nodeResolve(),
    commonjs(),
    scss({ fileName: 'assets/css/roc-icon.css' }),
    vuePlugin({
      css: false,
    }),
    replace({
      'process.env.NODE_ENV': 'development',
    }),
    copy({
      targets: [{ src: 'src/components/RocIcon/styles/fonts', dest: 'dist/assets' }],
    }),
  ],
}).then((bundle) => {
  Promise.all([
    bundle.write(umdOutputOptions),
    bundle.write(umdMinOutputOptions),
    bundle.write(esOutputOptions),
  ]).then(() => {
    handleCssFontPath()
    console.log('打包成功')
  })
})

/**
 * css 字体路径处理
 */
function handleCssFontPath() {
  const cssPath = path.resolve(__dirname, '../dist/assets/css/roc-icon.css')
  const rocIconCss = fs.readFileSync(cssPath)
  const newRocIconCss = rocIconCss.toString().replace(/styles\/fonts/g, '../fonts')
  fs.writeFileSync(cssPath, newRocIconCss)
}
