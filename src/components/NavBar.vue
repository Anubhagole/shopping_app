<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>Centrik</b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/cart">Cart</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style>

</style>
  