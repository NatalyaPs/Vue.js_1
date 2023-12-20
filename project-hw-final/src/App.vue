<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

}
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
    cursor: pointer;
}
.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

</style>