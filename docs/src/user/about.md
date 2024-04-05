---
layout: doc
---

<script setup>
import { useData } from 'vitepress'

const { isDark, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### isDark
<pre>{{ isDark }}</pre>
