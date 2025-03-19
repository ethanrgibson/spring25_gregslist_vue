<script setup>
import { AppState } from '@/AppState.js';
import { houseService } from '@/services/HouseService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const houses = computed(() => AppState.houses)


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
        <div v-for="house in houses" :key="house.id" class="col-md-12">
          <div>
            <img :src="house.imgUrl" alt="'Picture of Listed House'" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>