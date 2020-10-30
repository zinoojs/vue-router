<template>
  <section>
    <h2>{{ experience.name }}</h2>
    <div class="experiencre-details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
      />
      <span>{{ experience.description }}</span>
    </div>
  </section>
</template>

<script>
import store from "@/store";
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    experiencesSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug == this.slug
      );
    },
    experience() {
      return this.destination.experiences.find(
        experience => experience.slug == this.experiencesSlug
      );
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  width: 40%;
}
.experiencre-details {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
span {
  width: 60%;
  font-size: 14px;
  text-align: left;
  padding: 10px 40px;
}
</style>