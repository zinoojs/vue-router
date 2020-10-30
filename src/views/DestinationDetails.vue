<template>
  <div>
    <section class="destination">
      <h1>Destination Details</h1>
      <div class="destination-details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Destination Experience in {{ destination.name }}</h2>
      <div class="cards" id="experience">
        <div
          v-for="experience in destination.experiences"
          :key="experience.name"
          class="card"
        >
          <router-link
            :to="{
              name: 'ExperiencesDetails',
              params: { experiencesSlug: experience.slug },
              hash: '#experience'
            }"
          >
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
            />
            <span class="card_text">{{ experience.name }}</span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug == this.slug
      );
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  width: 30%;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  width: 70%;
  font-size: 14px;
  text-align: left;
  padding: 10px 40px;
}
.experiences {
  padding: 40px 0;
}
.cards {
  display: flex;
  justify-content: center;
}
.cards img {
  width: 100%;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  color: #fff;
  font-weight: normal;
  font-size: 22px;
}
</style>