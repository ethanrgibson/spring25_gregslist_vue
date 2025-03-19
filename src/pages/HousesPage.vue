<script setup>
import { AppState } from '@/AppState.js';
import HouseForm from '@/components/HouseForm.vue';
import HouseListing from '@/components/HouseListing.vue';
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
        <h1 class="text-center display-1 mx-2">HOUSES & BLOUSES</h1>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <HouseForm />
      </div>
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1739257599500-85ff0ff1b359?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhaWxlciUyMHBhcmt8ZW58MHx8MHx8fDI%3D"
          alt="" class="img-fluid">
      </div>
    </div>
    <div class="row">
      <div v-for="house in houses" :key="house.id" class="col-md-12">
        <HouseListing :houseProp="house" />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>