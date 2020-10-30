<template>
  <nay id="nav">
    <h2 class="logo">Zin Travel App</h2>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
        >
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
    <GoBack />
  </nay>
</template>

<script>
import store from "@/store";
import GoBack from "./GoBack";
export default {
  data() {
    return {
      destinations: store.destinations
    };
  },
  components: {
    GoBack
  }
};
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  border-bottom: 1px solid grey;
  background: #fff;
  z-index: 1;
}
#nav a {
  text-decoration: none;
  font-weight: bold;
  margin: 0 30px;
  color: mediumturquoise;
}

.links {
  list-style: none;
}
.nav-links {
  display: flex;
  justify-content: center;
}

#nav a.zinoo-class {
  color: #d33939;
}
.logo {
  font-size: 24px;
  color: lightblue;
}
</style>