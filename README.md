# vue3-longlist

[![npm version](https://badge.fury.io/js/vue3-longlist.svg)](https://badge.fury.io/js/vue3-longlist)

A vue3.x image lazyload plugin.

🦾 **Type Strong:** Written in Typescript

## 📎 Installation

```sh
$ npm i vue3-longlist
```

## 👽 Usage

main.ts

```js
import { createApp } from "vue";
import App from "./App.vue";
import llist from "vue3-longlist";

createApp(App)
  .use(llist)
  .mount("#app");
```

App.vue

```html
<template>
    <llist :list="your long list">
</template>
```

## 📁 Options

| key        | description                      | default | type   |
| ---------- | -------------------------------- | ------- | ------ |
| list       | The long list you want to render | -       | array  |
| itemHeight | v-for item height (px)           | 18      | number |
| scrollDown | Slide how much triggers loading  | 8       | number |

## 😃 Example

```html
<llist :list="aab">
  <template v-slot:default="scope">
    <div>
      <!-- index is v-for index， item is v-for item -->
      {{scope.index}},{{scope.item + 1 }}
    </div>
  </template>
</llist>
```

```js
  aab: Array<number> = []

  aa() {
    for (let index = 0; index < 100000; index++) {
      this.aab.push(index)
    }
  }

  created(){
    this.aa()
  }
```
