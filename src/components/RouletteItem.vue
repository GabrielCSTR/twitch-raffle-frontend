<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },

    roulette: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <div
    v-for="item in roulette.users"
    :key="item.value"
    class="w-20 mx-0.5"
  >
    <div
      class="text-center my-0.5 rounded-md bg-gray-800 border-separate border-spacing-2 border border-red-500 max-w-80"
      :class="{
        'animate-winner opacity-100 border-green-500': item.value == roulette.winner,
        'opacity-10': roulette.winner != null && item.value !== roulette.winner
      }"
    >
      <img
        :src="item.img"
        class="w-20 h-20 rounded-full object-cover"
      />
      <h2 class="text-lg truncate">{{ item.from_name }}</h2>
    </div>
  </div>
</template>
