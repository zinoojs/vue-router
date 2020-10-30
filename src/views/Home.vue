<template>
  <div id="home">
    <h2>All Destination</h2>
    <div class="destination">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
        >
          {{ destination.name }}
        </router-link>
        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug }
            }"
          >
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import store from "@/store.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
<style scoped>
#home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  width: 200px;
}
img:hover {
  width: 300px;
  transition: all 0.5s;
}
img:hover:after {
  width: 200px;
  transition: all 0.8s;
}
.destination {
  display: flex;
  justify-content: space-between;
}
.destination a {
  text-decoration: none;
}
.destination a:hover {
  font-size: 20px;
  color: rgb(155, 85, 221);
  transition: all 0.5s;
}
</style>
