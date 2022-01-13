# First Vite Project
> if some started just include title, it's one todo item about this project.

## project init

``` 
    # npm 6.x
    npm init vite@latest my-app --template vue

    # npm 7+, 需要额外的双横线：
    npm init vite@latest my-app -- --template vue

    # yarn
    yarn create vite my-app --template vue

    # pnpm
    pnpm create vite my-app -- --template vue

    # choose with typescript

```

## set tsconfig.json

```json
    {
        "compilerOptions": {
            ...
            "types": ["vite/client"],
            "baseUrl": "src",
            "paths": {
            "@/*": ["./*"]
            }
        },
        "exclude": ["node_modules"],
        ...
    }

```

## new .env file

- .env.development  ~~ NODE_ENV=development
- .env.production  ~~ NODE_ENV=production
- ReadFile to Inject env (node-fs)

## svg-icon

```
    # install
    npm i vite-plugin-svg-icons -D

    # vite.config.js
    import viteSvgIcons from "vite-plugin-svg-icons";
    ...
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]",
    }),
    
    # @/components/svg.vue
    <script setup lang="ts">
        import { computed, withDefaults } from 'vue';

        interface Props {
            prefix?: string;
            name?: string;
            color?: string;
        }

        const props = withDefaults(defineProps<Props>(), {
        prefix: 'icon',
        name: '',
        color: '#000',
        });

        const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    </script>

    <template>
        <svg aria-hidden="true">
            <use :xlink:href="symbolId" :fill="color" />
        </svg>
    </template>
```

## set @ as src dirname alais

```javascript
    export default defineConfig({
        ...
        alias: {
            '@': path.resolve(__dirname, './src')
        },
        ...
    })
```

## reset css

```
    # @/styles/common.less
    html,body,#app ...

    # install
    npm i normalize.css --save

    # main.ts
    import 'normalize.css'

```

## NavieUI

```javascript
    # npm i -D naive-ui
    # npm i -D vfonts

    // 按需引入
    import { createApp } from 'vue'
    import {
        create,
        NButton
    } from 'naive-ui'

    const naive = create({
        components: [NButton]
    })

    const app = createApp()
    app.use(naive)

```

### UI-Framework setting

#### Local & theme

```javascript
    // script
    import { NConfigProvider } from "naive-ui";
    import { zhCN, dateZhCN } from "naive-ui";
    import Home from "@/views/Home.vue";
    import { darkTheme } from "naive-ui";
    import { defineComponent, ref } from "vue";
    export default defineComponent({
        components: { SvgIcon, NConfigProvider, Home },
        setup() {
            const theme = ref<any>(darkTheme);
            return {
                theme,
                zhCN,
                dateZhCN,
            };
        },
    });
    // template
    <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
        <Home />
        <n-button>naive-ui</n-button>
    </n-config-provider>
```

## store vuex && pinia

## api axios

## mock

## route

## 优化

### gzip

> vite-plugin-compression

### nprogress

```javascript
    import NProgress from 'nprogress';

    router.beforeEach(async (to, from, next) => {
        NProgress.start();
    });

    router.afterEach((to) => {
        NProgress.done();
    });
```

### tools

> vueuse && lodash

## Lint

### ESLint

### StyleLint

## Docs
> vuepress && vitepress

## Editor plugins

- Vue Language Feature \ Volar
- Vue 3 Snippets
- Stylelint
- Prettier
- ESLint

## Chrome tools

- Vue.js devtools