<template>
    <div class="fundoSuppliers">
      <div class="conteudoSuppliers">
        Suppliers

        
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
      name: 'Suppliers',
      data() {
      return {

        };
      },
      methods: {
    },
  }
  </script>

<style scoped>
.fundoSuppliers {
  background-color: #f0efed !important;/* Cor de fundo personalizada para b */
  display: flex;
  flex-direction: row;
  height: 95vh; /* Definir a altura da container para ocupar 95% da altura da janela de visualização */
}
.conteudoSuppliers {
  /* border: 5px solid red; width: 100%; height: 100%; */
    border: 2px solid #ffffff !important;
    background-color: #ffffff !important;
    border-radius: 10px;
    margin: 15px;
    width: 5%;
    flex-grow: 1;
    box-sizing: border-box;
    position: relative;

}
</style>
  