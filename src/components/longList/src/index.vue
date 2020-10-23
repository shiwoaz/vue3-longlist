<template>
  <div class="container">
    <div class="item" v-for="(item, index) in data" :key="index">
      <slot :item="item" :index="index"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "./index";

export default defineComponent({
  name: "LongList",
  props: {
    list: {
      type: Array,
      default: () => [1, 2],
    },
    itemHeight: {
      type: Number,
      default: 18,
    },
    scrollDown: {
      type: Number,
      default: () => 8,
    },
  },
  setup(props: longListProps, ctx) {
    //gets the visual height of the browser
    const WINDOWHEIGHT = window.innerHeight;

    //Calculates how many elements to get on a page
    const PAGESIZE = WINDOWHEIGHT / Number(props.itemHeight);

    //defines the current page height
    let pageY = 0;

    //define current number of pages
    let currPage = 1;

    const data = ref(props.list.slice(0, currPage * PAGESIZE));

    //scroll render
    function render() {
      if (window.scrollY - pageY > props.scrollDown) {
        currPage++;
        pageY = window.scrollY;
        data.value = props.list.slice(0, currPage * PAGESIZE);
      }
    }

    // throttle function
    function throttle() {
      let timer;
      if (timer) return;
      timer = setTimeout(() => {
        render();
        timer = null;
      }, 200);
    }

    window.addEventListener("scroll", throttle);

    return { props, ctx, data };
  },
});
</script>
