import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// 借助插件vite-plugin-vue-setup-extend可以直接在script标签上定义name。
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// unplugin-vue-components  自动导入要使用的组件
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
  AntDesignVueResolver,
  VantResolver,
  HeadlessUiResolver,
  ElementUiResolver
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: true,
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
      },
    }),
    VueSetupExtend(),
    Components({
      // ui库解析器，也可以自定义
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        VantResolver(),
        HeadlessUiResolver(),
        ElementUiResolver()
      ]
    })
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
