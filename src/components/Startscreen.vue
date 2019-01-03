<template>
  <div class="alert alert-secondary">
    <h3>Are you ready?</h3>
    <button class="btn btn-success" @click="$emit('onStart')">
      Start
    </button>
  </div>
</template>


<script>
export default{

}
</script>

<style>
  .alert  {
    text-align: center;
    background: #e9e6e6;
  }

  h3, .btn{
    margin: 30px o;
  }
</style>
