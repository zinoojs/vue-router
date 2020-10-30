<template>
  <div class="back">
    <div class="goBack">
      <button @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>