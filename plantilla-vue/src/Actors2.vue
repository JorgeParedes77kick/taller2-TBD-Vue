<template>
  <div class="center">
    <h2 >{{title}}</h2>
    
    <div>
        <h3>Nombre</h3>
        <input type="text" name="nombre" placeholder="FirsName"> 
    </div>
    <div>
      <h3>Apellido</h3>
      <input type="text" name="Apellido" placeholder="lastName">
    </div>
      <button type="button"  name="agregar"> Aceptar </button>

  </div>

</template>


<script>
export default {
  data(){
    return{
      title:'AGREGAR ACTORES',
      users:[]
    }
  },
  mounted:function(){
    console.log('Index.vue');

    
  }
}
</script>
