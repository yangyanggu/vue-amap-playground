<script setup lang="ts">
import { Repl, type SFCOptions } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import type { UserOptions } from '@/composables/store'

const loading = ref(true)
const replRef = ref<InstanceType<typeof Repl>>()

// enable experimental features
const sfcOptions: SFCOptions = {
  script: {
    reactivityTransform: true,
    defineModel: true,
  },
}

const initialUserOptions: UserOptions = {}

const store = useStore({
  serializedState: location.hash.slice(1),
  userOptions: initialUserOptions,
})


// eslint-disable-next-line unicorn/prefer-top-level-await
store.init().then(() => (loading.value = false))
// eslint-disable-next-line no-console
console.log('Store:', store)

const handleKeydown = (evt: KeyboardEvent) => {
  if ((evt.ctrlKey || evt.metaKey) && evt.code === 'KeyS') {
    evt.preventDefault()
    return
  }
}

const dark = useDark()

// persist state
watchEffect(() => history.replaceState({}, '', `#${store.serialize()}`))

const refreshPreview = () => {
  replRef.value?.reload()
}
</script>

<template>
  <div v-if="!loading" antialiased>
    <Header :store="store" @refresh="refreshPreview" />
    <Repl
      ref="replRef"
      :theme="dark ? 'dark' : 'light'"
      :store="store"
      :editor="Monaco"
      show-compile-output
      auto-resize
      :sfc-options="sfcOptions"
      :clear-console="false"
      @keydown="handleKeydown"
    />
  </div>
  <template v-else>
    <div v-loading="{ text: 'Loading...' }" h-100vh />
  </template>
</template>

<style>
body {
  --at-apply: m-none text-13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --base: #444;
  --nav-height: 50px;
}

.vue-repl {
  height: calc(100vh - var(--nav-height)) !important;
}

.dark .vue-repl,
.vue-repl {
  --color-branding: var(--el-color-primary) !important;
}

.dark body {
  background-color: #1a1a1a;
}
</style>
