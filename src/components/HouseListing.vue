<script setup>

import { AppState } from '@/AppState.js';
import { House } from '@/models/House.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';



const account = computed(() => AppState.account)

defineProps({

  houseProp: { type: House, required: true }

})


async function deleteHouse(houseId) {
  try {
    logger.log('Deleting house', houseId)
  }
  catch (error) {
    Pop.error(error);
  }

}

</script>


<template>
  <div class="row shadow-lg rounded mb-3">
    <div class="col-md-5 px-0">
      <div>
        <img :src="houseProp.imgUrl" alt="'Picture of Listed House'" class="house-picture">
      </div>
    </div>
    <div class="col-md-7">
      <div class="mt-2 d-flex justify-content-around align-items-center">
        <b class="fs-3">Built in {{ houseProp.year }}</b>
        <b class="fs-3">{{ 'Price: $' + houseProp.price.toLocaleString() }}</b>
        <b class="fs-3">{{ 'Levels: ' + houseProp.levels }}</b>
      </div>
      <br>
      <div class="mx-3">
        <div>
          <span class="fs-5"><b>Bathrooms: </b>{{ houseProp.bathrooms }}</span>
        </div>
        <div>
          <span class="fs-5"><b>Bedrooms: </b>{{ houseProp.bedrooms }}</span>
        </div>
      </div>
      <br>
      <div>
        <span class="mx-3 fs-5 fw-bold ">Description:</span>
        <div class="text-center mt-3">
          <p v-if="houseProp.description" class="mx-4">{{ houseProp.description }}</p>
          <p v-else class="mx-4"> <i>No Description</i></p>
        </div>
      </div>
      <div>
        <button v-if="account?.id == houseProp.creatorId" @click="deleteHouse(houseProp.id)"
          class="btn btn-outline-warning">
          Delete
        </button>
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