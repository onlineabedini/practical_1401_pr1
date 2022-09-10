<template>
  <div class="main_div row">
    <div class="col-12">
      <div
        class="pic"
        :style="{
          backgroundImage: 'url(' + imgLink + ')',
          backgroundColor: color,
          height: height
        }"
      >
        <div class="title_div">
          <h1>{{ title }}</h1>
        </div>
      </div>
    </div>
  </div>
  <!--/singleGridPic -->
  <!-- </div> -->
</template>
<script>
export default {
  name: "singleGridPic",
  props: ["imgLink", "color", "title", "height"]
};
</script>
<style scoped>
/* same attributes */
.main_div {
  padding: 1.5px;
}
.pic {
  background-size: cover;
  width: 100%;
  cursor: pointer;
  background-blend-mode: soft-light;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-weight: bold;
}
</style>
