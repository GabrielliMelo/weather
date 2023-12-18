<script setup lang="ts">
import { defineComponent } from 'vue'
import { useMainStore } from '@/Pinia'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

// Usando a loja Pinia
const mainStore = useMainStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <button @click="mainStore.incrementar">Incrementar</button>
  <button @click="mainStore.decrementar">decrementar</button>
  <p>Contador: {{ mainStore.contador }}</p>
</template>

<style scoped>
/* Seu CSS existente aqui... */
</style>
