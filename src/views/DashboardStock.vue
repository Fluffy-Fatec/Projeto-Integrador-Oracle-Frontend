<template>
  <menuHorizontal />
  <menuVertical />
  <div class="fundoDashboardSup">
      <div class="conteudoDashboardSup">
        <!-- <oracle-dv project-path="/@Catalog/users/aldrik.alvaro@fatec.sp.gov.br/Oracle-Dinner" active-page="insight" active-tab-id="snapshot!canvas!1">
        </oracle-dv> -->
        <!-- <oracle-dv project-path="/@Catalog/users/ana.leal01@fatec.sp.gov.br/Oracle-Dinner" active-page="canvas" active-tab-id="1">
        </oracle-dv> -->
        <oracle-dv project-path="/@Catalog/users/ana.leal01@fatec.sp.gov.br/Oracle-Dinner-original" active-page="canvas" active-tab-id="4"></oracle-dv>
      </div>
  </div>
</template>

<script setup>
  // Importe seus componentes aqui
  import menuVertical from '@/components/menuVertical.vue'
  import menuHorizontal from '@/components/menuHorizontal.vue'
</script>

<style scoped>
.fundoDashboardSup {
  background-color: #f0efed !important;/* Cor de fundo personalizada para b */
  display: flex;
  flex-direction: row;
  height: 95vh; /* Definir a altura da container para ocupar 95% da altura da janela de visualização */
}
.conteudoDashboardSup {
  /* border: 5px solid red; width: 100%; height: 100%; */
  flex-grow: 1;
  position: relative;

}

</style>
