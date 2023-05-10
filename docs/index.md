---
layout: home
title: singhai
description: singhai文档

hero:
  name: 文档
  text:
  tagline: singhai文档
  actions:
    - theme: brand
      text: 开始
      link: /pages/index
    - theme: alt
      text: 访问github
      link: https://github.com/Yinzhuo19970516/vue-template
---

    ::: info
    This is an info box.
    :::

    ::: tip
    This is a tip.
    :::

    ::: warning
    This is a warning.
    :::

    ::: danger
    This is a dangerous warning.
    :::

    ::: details
    This is a details block.
    :::

    ```js
    export default {
      name: 'MyComponent'
      // ...
    }
    ```

    ```html
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
    ```

    ![一张图片](/img/logo.svg)
