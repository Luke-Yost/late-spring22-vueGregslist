<template>
  <div class="component">

      <div class="col-md-4">
      <div class="card" style="width: 18rem;">
        <img :src="house.img" class="card-img-top" alt="picture of house">
          <div class="card-body">
            <h6>Name: {{house.name}}</h6>
            <h6>Price: {{house.price}}$</h6>
            <h6>Floors: {{house.floors}}</h6>
            <h6>Bedrooms: {{house.bedrooms}}</h6>
            <h6>Bathrooms: {{house.bathrooms}}</h6>
          </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  props: { house: { type: Object, required: true}},
  setup(props){
    return {
      
    }
  }
}
</script>


<style lang="scss" scoped>

</style>