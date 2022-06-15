<template>
  <div class="container-fluid">
  <div class="row">
    <!-- <div class="col-md-4">
      <div class="card" style="width: 18rem;">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yhgNySkH_PbSF_4svpFaSwHaHa%26pid%3DApi&f=1" class="card-img-top" alt="...">
          <div class="card-body">
            <h6>Name: Hammock</h6>
            <h6>Price: 25$</h6>
            <h6>Floors: 1</h6>
            <h6>Bedrooms: 1</h6>
            <h6>Bathrooms: 0</h6>
          </div>
      </div>
    </div> -->
    <House v-for="H in houses" :key="H.id" :house="H" />
  </div>
  </div>
  <Modal id="house-form">
    <template #header> List a House</template>
  </Modal>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
export default {
  setup() {
    return {
      houses: computed(()=> AppState.houses),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
