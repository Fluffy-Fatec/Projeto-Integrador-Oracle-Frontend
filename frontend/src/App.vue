<template>
  <v-app>
    <TopBar class="fixed-top" />
    <v-main>
        <!-- Conteúdo principal vai aqui -->
    </v-main>
  </v-app>
</template>

<script> // Importe o componente SideBar
import TopBar from "@/components/TopBar";   // Importe o componente TopBar

export default {
  components: { // Registre o componente SideBar
    TopBar,  // Registre o componente TopBar
  },
}
</script>