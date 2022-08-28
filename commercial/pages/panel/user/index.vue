<template>
  <div>
    <table class="table table-striped">
      <tr>
        <td>first_name</td>
        <td>last_name</td>
        <td>email</td>
        <td>phone_number</td>
        <td>password</td>
      </tr>
      <tr v-for="item in data_list" :key="item.id">
        <td>{{ item.data_list.first_name }}</td>
        <td>{{ item.data_list.last_name }}</td>
        <td>{{ item.data_list.email }}</td>
        <td>{{ item.data_list.phone_number }}</td>
        <td>{{ item.data_list.password }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {layout:"panels",
  data() {
    return {
      data_list: [],
    };
  },


  mounted() {
    this.get_all_datas();
  },

  methods: {
    get_all_datas() {
      this.$axios
        .get("http://localhost:8080/api/users/all")
        .then((response) => {
          this.register_list = response.data;
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
  }
}
</script>

<style>

</style>