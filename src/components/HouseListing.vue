<script setup>
import { House } from '@/models/House.js';



defineProps({

  houseProp: { type: House, required: true }

})


</script>


<template>
  <div class="row shadow-lg rounded mb-3">
    <div class="col-md-5 px-0">
      <div>
        <img :src="houseProp.imgUrl" alt="'Picture of Listed House'" class="house-picture">
      </div>
    </div>
    <div class="col-md-7">
      <div>
        <h2>What</h2>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.house-picture {
  max-height: 35dvh;
  width: 100%;
  object-fit: cover;

}
</style>