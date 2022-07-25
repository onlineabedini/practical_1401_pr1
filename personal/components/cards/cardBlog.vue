<template>
  <div>
    <div class="row">
      <!--card1-->
      <div
        class="text-center p-2 rounded col-3"
        v-for="(name, index) in list"
        :key="index"
      >
        <img
          class=" img-thumbnail card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplPWxJBL1k6-HWX7q7cAujjLHu4leAyM5GA&usqp=CAU"
        />

        <h3>{{ name.title }}</h3>
        <p>
          {{ name.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardSample",
  data() {
    return {
      list: [
        {
          title: "simple1",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
        },
        {
          title: "simple2",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
        },
        {
          title: "simple3",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
        },
        {
          title: "simple4",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
        }
      ]
    };
  }
};
</script>

<style></style>
