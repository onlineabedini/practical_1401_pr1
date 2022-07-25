<template>
  <div>
    <div class="text-center mt-5 mb-4">
      <h1>ارتباط با من</h1>
    </div>

    <div class="d-flex flex-column  align-items-center pb-5">
      <input
        v-model="user_name"
        type="text"
        class="w-75 mt-2 form-control"
        placeholder=" نام و نام خانوادگی خود را وارد کنید ."
      />
      <input
        v-model="user_email"
        type="email"
        class="w-75 mt-2 form-control"
        placeholder="ایمبل خود را خود را وارد کنید ."
      />
      <textarea
        v-model="user_massage"
        class="massage-user w-75 mt-2 form-control"
        rows="3"
        placeholder="پیام خودر را در این بخش وارد کنید ."
      ></textarea>
      <div class="w-75">
        <button
          class="btn bg-primary border text-light mt-2"
          v-on:click="show_info()"
        >
          ارسال
        </button>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script>
import { METHODS } from "http";

export default {
  data() {
    return {
      user_name: "",
      user_email: "",
      user_massage: ""
    };
  },
  methods: {
    show_info() {
      alert(`
        neme is ${this.user_name} 
        email: ${this.user_email}
        massage: ${this.user_massage}`);
    }
  }
};
</script>

<style scoped>
textarea.massage-user {
  resize: none;
}
</style>
