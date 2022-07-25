<template>
  <div>
    <h2 class="text-center">{{article.title}}</h2>
    <p class="text-center fw-bolder">
      این مقاله ی ازمایشی است که از سمت سرور برای شما راسال شده
    </p>
    <div class="d-flex justify-content-center">
      <img
        class="w-75 rounded-3"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8q5_A0Nqb4QZzWkVcxXM2sLc6l3jc5voHtg&usqp=CAU"
        alt="dads"
      />
    </div>
    <p class="text-center mt-5">
      این مقاله ی ازمایشی است که از سمت سرور برای شما راسال شده
    </p>
  </div>
</template>

<script>
import article from '~/backend/app/data/article';
export default {
  data () {
    return {
      id:101
      ,article:[]
    }

  },
  mounted() {
       
        // send request
        this.$axios.get('http://localhost:2020/api/article/' + this.id)
            .then(
                re => {
                this.article = re.data
                console.log(this.article)
                }
            )
            .catch(
                error => {
                console.log(error)
            })
    },
};
</script>

<style scoped>
</style>