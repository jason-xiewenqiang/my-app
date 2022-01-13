<script lang="ts">
import SvgIcon from "@/components/svg.vue";
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
</script>

<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
    <Home />
    <img alt="Vue logo" src="./assets/logo.png" />
    <SvgIcon name="model" />
    <SvgIcon name="vidoe" />
    <SvgIcon name="dept" />
    <n-button>naive-ui</n-button>
  </n-config-provider>
</template>

