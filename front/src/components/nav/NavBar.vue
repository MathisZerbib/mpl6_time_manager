<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->

      <div class="" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <!-- <li class="navbar-nav">
            <RouterLink class="nav-link" to="/userboard">User</RouterLink>
          </li> -->
        </ul>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style lang=""></style>
