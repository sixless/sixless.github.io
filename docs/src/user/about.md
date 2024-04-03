---
layout: doc
---

::: info
这只是测试
:::

<span v-for="i in 3">{{ i }}</span>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
**112s**
