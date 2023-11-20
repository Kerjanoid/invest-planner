<template>
  <div class="bg-slate-300">
    <header
      class="flex fixed justify-between items-center w-full p-[24px] bg-slate-700 shadow-sm shadow-slate-800"
    >
      <h1 class="text-3xl font-medium">Investment Planner</h1>
      <div class="flex gap-[10px]">
        <div>Nick</div>
        <UButton icon="i-heroicons-user">login/register/logout</UButton>
      </div>
    </header>
    <div class="flex flex-col justify-stretch min-h-screen">
      <main class="flex flex-1 w-full">
        <slot />
      </main>
      <footer
        class="mx-[12px] p-[12px] border-t border-slate-700 text-slate-700"
      >
        <p>Kerjanoid &#169; 2023</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
