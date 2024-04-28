import { defineConfig,splitVendorChunkPlugin  } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteAliases } from 'vite-aliases'
import postcssPresetEnv from 'postcss-preset-env'
import HtmlPrefetch from "./plugins/HtmlPrefetch"
import { CJK, literalsCollector } from 'vite-plugin-literals-collector'
const paths = [
  'src/pages/Home/index.tsx',
  'src/pages/Town/index.tsx',
  'src/pages/Gov/Gov.tsx',
  'src/pages/Dev/Dev.tsx',
  'src/pages/Product/Product.tsx',
  'src/pages/Game/Game.tsx',
  'src/pages/Design/Design.tsx',
  'src/pages/Operate/Operate.tsx',
]
export default defineConfig({
  build:{
    outDir:"dist",
    rollupOptions:{
      output:{
        //分chunk,等同于town:["town.json"]
        manualChunks(id){
          //所有的json全部分开处理
          if(id.includes("town.json")){
            return "json/town"
          }
          if(id.includes("passImg.json")){
            return "json/passImg"
          }
          if(id.includes("proPass.json")){
            return "json/proPass"
          }
          if(id.includes("design.json")){
            return "json/design"
          }
          if(id.includes("dev.json")){
            return "json/dev"
          }
          if(id.includes("operate.json")){
            return "json/operate"
          }
          if(id.includes("game.json")){
            return "json/game"
          }
          if(id.includes("gov.json")){
            return "json/gov"
          }
          if(id.includes("product.json")){
            return "json/product"
          }
          //分组件
          if(id.includes("Loading.tsx")){
            return "Loading"
          }
        },
        //打包文件的分配，可配置可不配置
        entryFileNames:`js/[name].[hash].js`,
        chunkFileNames:`js/[name].[hash].js`,
        assetFileNames:`assets/[name].[ext]`
      }
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
  server: {
    //反向代理
    host: '0.0.0.0',
  },
  plugins: [
    react(),
    ViteAliases({
      dir: 'src',
      prefix: '@',
    }),
    HtmlPrefetch('src/index.tsx', paths),
    splitVendorChunkPlugin(),
    literalsCollector({
      target: CJK,
    })
  ],
})
