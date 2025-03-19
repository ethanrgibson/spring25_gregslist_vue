<script setup>
import { houseService } from '@/services/HouseService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';

onMounted(() => {

  getHouses()



})

async function getHouses() {

  try {
    await houseService.getHouses()
  }
  catch (error) {
    Pop.error(error);
  }

}



</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>HOUSES & BLOUSES</h1>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div>
            <img src="" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>