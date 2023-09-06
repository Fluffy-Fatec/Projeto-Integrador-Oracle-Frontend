<template>
  <v-app>
    <!-- Componente TopBar fixo no topo -->
    <TopBar class="fixed-top" />

    <v-main>
      <v-row>
        <v-col cols="3">
          <!-- Componente SideBar -->
          <SideBar class="mt-12" />
        </v-col>

        <v-col cols="9">
          <!-- Conteúdo principal do aplicativo -->
          <router-view />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar"; // Importe o componente SideBar
import TopBar from "@/components/TopBar";   // Importe o componente TopBar

export default {
  components: {
    SideBar, // Registre o componente SideBar
    TopBar,  // Registre o componente TopBar
  },
}
</script>

<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.mt-12 {
  margin-top: 12px;
}

/* Define um z-index menor para o SideBar */
.v-navigation-drawer {
  z-index: 1000;
}
</style>
