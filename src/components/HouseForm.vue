<script setup>
import { houseService } from '@/services/HouseService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';



const editableHouseData = ref({
  year: 0,
  price: 0,
  levels: '',
  bathrooms: 0,
  imgUrl: '',
  bedrooms: '0',
  description: ''
})


async function createHouse() {
  try {
    const houseData = editableHouseData.value
    await houseService.createHouse(houseData)


    editableHouseData.value = {

      year: 0,
      price: 0,
      levels: '',
      bathrooms: 0,
      imgUrl: '',
      bedrooms: '0',
      description: ''

    }
  }
  catch (error) {
    Pop.error(error);
  }

}


</script>


<template>
  <form @submit.prevent="createHouse()">
    <div class="mb-3">
      <label for="houseAge">Year House Was Built</label>
      <input v-model="editableHouseData.year" type="text" name="year" id="houseAge" required maxlength="500"
        placeholder="Year House Was Built">
    </div>
    <div class="mb-3">
      <label for="housePrice">House Price</label>
      <input v-model="editableHouseData.price" type="text" name="year" id="housePrice" required maxlength="45"
        placeholder="Cost">
    </div>
    <div class="mb-3">
      <label for="houseLevels">How Many Levels?</label>
      <input v-model="editableHouseData.levels" type="text" name="year" id="houseLevels" required maxlength="10"
        placeholder="1? 2? 3?">
    </div>
    <div class="mb-3">
      <label for="bathrooms">How Many Bathrooms?</label>
      <input v-model="editableHouseData.bathrooms" type="text" name="year" id="bathrooms" required maxlength="10"
        placeholder="1? 2? 3?">
    </div>
    <div class="mb-3">
      <label for="bedrooms">How Many Bedrooms?</label>
      <input v-model="editableHouseData.bedrooms" type="text" name="year" id="bedrooms" required maxlength="10"
        placeholder="1? 2? 3?">
    </div>
    <div class="mb-3">
      <label for="houseDescription">Description?</label>
      <input v-model="editableHouseData.description" type="text" name="year" id="houseDescription" required
        maxlength="10" placeholder="To smell or not to smell...">
    </div>
    <div class="mb-3">
      <label for="housePicture">Picture of House</label>
      <input v-model="editableHouseData.imgUrl" type="text" name="year" id="housePicture" required maxlength="750"
        placeholder="Img URL">
    </div>
    <div class="text-end mb-3">
      <button class="btn - btn-outline-indigo" type="submit">Submit</button>
    </div>
  </form>
</template>


<style lang="scss" scoped>
label {
  display: block;
}

input {
  width: 100%;
}
</style>