<template>
  <div class="main_div row m-0">
    <div class="col-12 p-0">
      <div class="pic" :style="{
        backgroundColor: color,
        height: height
      }">
        <div class="content_div row m-0">
          <div class="img_div" v-if="img_position === 'top'" :class="{ 'col': !vertical }">
            <img class="w-50 img-fluid" :src="imgLink" alt="this is img">
          </div>
          <div class="info_div" :class="{ 'col': !vertical }">
            <div class="subtitle my-3">
              {{ subtitle }}
            </div>
            <div class="title my-3">
              {{ title }}
            </div>
            <!-- btn div -->
            <div v-if="!vertical">
              <div class="button btn btn-light" v-if="is_btn">
                مشاهده و خرید
              </div>
            </div>
          </div>
          <div class="img_div" :class="{ 'col': !vertical }" v-if="img_position === 'between'">
            <img class="w-100 img-fluid" :src="imgLink" alt="this is img">
          </div>
          <!-- btn div -->
          <div v-if="vertical">
            <div class="button btn btn-light" v-if="is_btn">
              مشاهده و خرید
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/singleGridPic -->
  <!-- </div> -->
</template>
<script>
export default {
  props: [
    "imgLink",
    "color",
    "title",
    "subtitle",
    "height",
    "is_btn",
    "img_position",
    "vertical"
  ]
};
</script>
<style scoped>
/* same attributes */
.main_div {
  padding: 5px;
}

.pic {
  background-size: cover;
  width: 100%;
  cursor: pointer;
  background-blend-mode: soft-light;
  /* border-radius: 5px; */
  color: black;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-weight: bold;
}

.content_div {
  /* border: 1px solid white; */
}

.info_div {
  align-self: center;
  color: black;
}

.img_div {
  /*  */
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  /* color: rgb(255, 255, 255); */
}

.subtitle {
  font-size: 0.8rem;
  font-weight: bold;
  color: gray;
}

.button {
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 20px;
}
</style>
