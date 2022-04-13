<template>
  <nav class="bg-slate-400 p-4">
    <div class="flex items-center">
      <div>
        <router-link to="/" class="text-2xl">
          <strong>CRM</strong>
        </router-link>
      </div>

      <div class="ml-auto">
        <div>
          <div class="flex gap-4" v-if="!store.state.access">
            <router-link to="/sign-up"><strong class="button bg-black text-white">Sign up</strong></router-link>
            <router-link to="/log-in"><strong class="button bg-white text-black">Log in</strong></router-link>
          </div>
          <div class="flex gap-4" v-if="store.state.access">
            <router-link :to="{name: 'myaccount'}"><strong class="button bg-white text-black">DashBoard</strong></router-link>
            <button @click="logOut"><strong class="button bg-black text-white">Log out</strong></button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss">
.button {
  @apply rounded-lg px-6 py-4
}
</style>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const logOut = () => {
  store.commit('removeToken')
  router.push({ name: 'login' })
}
</script>
