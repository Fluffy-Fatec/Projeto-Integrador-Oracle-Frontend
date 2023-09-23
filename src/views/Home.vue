<template>
  <menuHorizontal />
  <menuVertical />
  <div class="fundoHome"></div>
  <!-- <h1>Home</h1>
  <p>Esta é a tela do Home. Mensagem de teste.</p> -->
</template>

<script setup>
  //import HelloWorld from '@/components/HelloWorld.vue'
  import menuVertical from '@/components/menuVertical.vue'
  import menuHorizontal from '@/components/menuHorizontal.vue'
</script>

<style scoped>
.fundoHome {
  background-color: #f0efed !important;/* Cor de fundo personalizada para b */
  display: flex;
  flex-direction: row;
  height: 95vh; /* Definir a altura da container para ocupar 95% da altura da janela de visualização */
}
.conteudoHome {
  /* border: 5px solid red; width: 100%; height: 100%; */
  border: 2px solid #ffffff !important;
  background-color: #ffffff !important;
  border-radius: 30px;
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
