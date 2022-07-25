<template>
  <div>
    <div class="text-center p-5 ">
      <h1 class="btn btn-outline-danger rounded-pill">ما را در اینستاگرام دنبال کنید</h1>
    </div>

    <div class="row m-0 p-5">
      <!--col1-->
      <div class="col-md-3">
        <div class="row ">
          <single_img_card :card="cards[0]" class="img-fluid d-table "></single_img_card>
        </div>
        <div class="row col-6 rounded mx-auto d-block">
          <single_img_card :card="cards[1]" class="img-fluid d-table "></single_img_card>
        </div>
      </div>
      <!--col2-->
      <div class="col-md-3">
        <div class="row col-4 rounded mx-auto d-block">
          <single_img_card :card="cards[2]" class="img-fluid d-table p-0"></single_img_card>
        </div>
        <div class="row ">
          <single_img_card :card="cards[3]" class="img-fluid d-table p-0"></single_img_card>
        </div>
      </div>
      <!--col3-->
      <div class="col-md-3">
        <div class="row   rounded mx-auto d-block">
          <single_img_card :card="cards[4]" class="img-fluid d-table"></single_img_card>
        </div>
      </div>
      <!--col4-->
      <div class="col-md-3  ">
        <div class="row col-5 rounded mx-auto d-block ">
          <single_img_card :card="cards[5]" class="img-fluid d-table "></single_img_card>
        </div>
        <div class="row col-6 rounded mx-auto d-block ">
          <single_img_card :card="cards[6]" class="img-fluid d-table "></single_img_card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import single_img_card from "./single_img_card.vue";

export default {
  components: {
    single_img_card,
  },
  data() {
    return {
      cards: [
        {
          img: "https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/294082093_805627900602741_8722544647637459175_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=XeLLRoyuOUQAX9R2qGD&_nc_ht=scontent-frt3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8X7MywBtu1GSOrfyPHsM4LqciT29JCeCwsxlAdVALyTw&oe=62DC04CC",
        },

        {
          img: "https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/292877058_2029341783933726_7999883154505781915_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=JOTTwwARkuQAX8Ev6YS&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8QP0zx9Yqqi0ORE4KTBpc06QF5WkbxZaC89I4hk3ibvQ&oe=62DD1589",
        },

        {
          img: "https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/293239719_333163575695067_2802018743992404483_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=jlkNly-u9BwAX8UN4GX&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_Ny7UoOOFUGk4FJTwrX9hdzSwDeuP0nAexfPKR1yGMyg&oe=62DC071A",
        },

        {
          img: "https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/292246252_410352091121629_1904356103935328587_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=LOLN4NqJBDAAX8Xrub7&_nc_ht=scontent-frt3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-o01__pcECH5vo9fGP3jDrhjE_6h5fSVKSadGiEp4Jtg&oe=62DD0620",
        },

        {
          img: "https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/292103308_562392138866497_2310390451752511101_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4Jf5NaVil5IAX9h-ayz&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9zd7yYsqiZjDTKaWzX9-939OSJWjlSIN214qFnYt7ZIA&oe=62DBE79D",
        },

        {
          img: "https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/291321364_1948292498701782_2413797653334427374_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=7yz9AT3vwY0AX9QkKua&_nc_ht=scontent-frt3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9HpezE5J66SA0p4X4iqMijjF1t3BHZ6PD5m-VkG3FugA&oe=62DD3120",
        },

        {
          img: "https://scontent-frt3-2.cdninstagram.com/v/t51.29350-15/291843885_738095194183161_18073481628126751_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=cEWzJTyuRIsAX8QtO4d&_nc_ht=scontent-frt3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-BMgtRXzm1fa8ggPUY20jFNGBMb-n0y20ILWKjBOyitw&oe=62DCEF2C",
        },
      ],
    };
  },
};
</script>

<style scope>

</style>