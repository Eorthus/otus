<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="todo">
    <div class="todoapp">
      <RouterView />
    </div>
    <div class="info">
      <p>Double-click to edit a todo</p>
    <p>
      Written by
      <a href="http://evanyou.me">Evan You</a>
    </p>
    <p>
      Part of
      <a href="http://todomvc.com">TodoMVC</a>
    </p>
    </div>
  </div>
</template>