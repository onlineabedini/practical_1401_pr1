<template>
<div>
     <div class="   row bg-white pt-5">
         <div class="col-1"></div>
         <div class="col-9 ">
             <div class="d-flex justify-content-start">
         <img src="https://license-market.ir/uploads/image/rootimage/613/e231fb8a9aed178122ff4613cd9b046e.png?w=350&h=350" class="img-thumbnail" alt="...">
         <img src="https://license-market.ir/uploads/image/rootimage/612/912c4c563605c45d7d7d900d66d7b7c0.png?w=350&h=350" class="img-thumbnail" alt="...">
         <img src="https://license-market.ir/uploads/image/rootimage/611/e83526b300eee66c9e36ba7a52017b01.png?w=350&h=350" class="img-thumbnail" alt="...">
         <img src="https://license-market.ir/uploads/image/rootimage/610/023ff52b20228659586364e476be4ecb.png?w=350&h=350" class="img-thumbnail" alt="...">
     </div>
         </div>
     <div class="col-2"></div>
     </div>
    <div class="   row bg-white pt-5">
        <div class="col-5"></div>
        <div class="col-4">
            <div class="d-flex">
               
               <button type="button" class="btn btn-primary">خدمت</button> 
             <a href="#" class="text-decoration-none">
          <h4 class="text-dark mx-4  pt-2">صفحه اصلی</h4>
        </a>
         <a href="#" class="text-decoration-none">
          <h4 class="text-dark mx-4  pt-2">کارتون</h4>
        </a>
        </div>
        </div>
        <div class="col-3">
             
        </div>
    </div>

    <h5>
        <div class="  row bg-white pt-5 mx-4 fs-5 fw-bold">
           <div class="col-5">
               
           </div>
             <div class="col-4">
                
                 
                 {{cardInformation.cardTitle}}
             
                 </div>
             </div>
             <div class="col-3"></div>
        
        
    </h5>
     <h3> 
         <div class="  row bg-white pt-3 mx-4">
           <div class="col-5">
           </div>
             <div class="col-4">
                 <div class="text-danger">
                {{cardInformation. cardPrice}}
                 </div>
             
             </div>
             <div class="col-3"></div>

       
         </div>
     </h3>
     <div class=" row bg-white pt-5 mx-4 ">
         <div class="col-5"></div>
         <div class="col-4">
              <div class="d-flex">
    <div class="mb-3 mx-4  ">
  <label for="exampleFormControlInput1" class="form-label">انتخاب نوع اکانت</label>
  <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="پروفایل اختصاصی با نام خودتان">
</div>

     <div class="mb-3 mx-4  ">
  <label for="exampleFormControlInput1" class="form-label">انتخاب پلن</label>
  <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="یک ماهه">
</div> 

      <div class="col-3"></div>
         </div>
         

         <div class="pt-2">
            
           

         <button type="button" class="btn btn-danger btn-lg ">اضافه به سبد خرید</button>
         
         </div>
         </div>
         
         
 </div>
 <div class="d-flex justify-content-start ">
     <div class=" mx-4   ">
     
         <img src="https://license-market.ir/uploads/image/rootimage/792/edffd259d098ee3385c6f981bc75c6e7.png?w=800&h=800" class="rounded float-end" alt="این یه عکس ">
     </div>
 </div>
     </div>
     
     


  
</template>

<script>
export default {
  data() {
    return {
      cardInformation: {
        cardTitle: `خرید اکانت دیزنی پلاس Disney Plus ایمیل شما `,
        cardPrice: `59000 تومان`,
        cardImage: `https://license-market.ir/uploads/image/rootimage/792/edffd259d098ee3385c6f981bc75c6e7.png?w=800&h=800`,
        description: `description`,
        imgDescription: ` imgDescription`,
      },
    };
  },
};
</script>

<style>
</style>