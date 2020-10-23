<template>
  <div>
    <llist :list="data" :itemHeight="20" :scrollDown="8">
      <template v-slot:default="scope">
        <div>{{ scope.index }},{{ scope.item }}</div>
      </template>
    </llist>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const data = [];
    for (let index = 0; index < 100000; index++) {
      data.push(index);
    }
    return { data };
  },
});
</script>


