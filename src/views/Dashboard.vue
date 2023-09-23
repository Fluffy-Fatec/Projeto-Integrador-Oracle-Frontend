<template>
  <menuHorizontal />
  <menuVertical />
  <div class="fundoDashboard">
      <div class="conteudoDashboard">
        <oracle-dv project-path="/@Catalog/users/aldrik.alvaro@fatec.sp.gov.br/Oracle-Dinner" active-page="canvas" active-tab-id="1">
        </oracle-dv>
      </div>
  </div>
</template>

<script setup>
  // Importe seus componentes aqui
  import menuVertical from '@/components/menuVertical.vue'
  import menuHorizontal from '@/components/menuHorizontal.vue'
</script>

<style scoped>
.fundoDashboard {
  background-color: #f0efed !important;/* Cor de fundo personalizada para b */
  display: flex;
  flex-direction: row;
  height: 95vh; /* Definir a altura da container para ocupar 95% da altura da janela de visualização */
}
.conteudoDashboard {
  /* border: 5px solid red; width: 100%; height: 100%; */
  border: 2px solid #ffffff !important;
  background-color: #ffffff !important;
  border-radius: 10px;
  margin: 20px;
  width: 5%;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 5px;
  padding-right: 5px;

}

</style>
