<template>
  <div>
    <div>
      <div class="row t1 p-4 m-0">
        <div class="col-5 d-table">
          <img class="m1 rounded" :src="book.image" />
        </div>

        <div class="col-6 p-0">
          <div>
            <h4 class="text-secondary">{{ book.postTitle }}</h4>
          </div>

          <div>
            <h3>{{ book.title }}</h3>
          </div>

          <div class="btn btn-light">مشاهده و خرید</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["book"],
  data() {
    return {};
  },
};
</script>

<style scoped>
  .m1{
    height: 200px;
  }
</style>
