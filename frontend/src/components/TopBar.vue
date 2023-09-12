<template>
  <v-app>
    <v-app-bar
      class="top-bar custom-top-bar"
      color="#393E3B"
      top
      dense
      fixed
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Oracle Logo"
          class="oracle-logo mr-7"
          src="@/assets/oraclelogo.png"
          transition="scale-transition"
          width="30"
        />

        <span class="negrito-font mr-2">OracleDine</span>
        <span class="normal-font mr-2">|</span>
        <span class="normal-font mr-2">RestaurantName</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn target="_blank" text>
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      expand-on-hover
      app
      clipped
      class="fixed-left"
    >
      <v-list nav dense>
        <v-list-item link @click="selectItem('dashboard')" :class="{ 'selected-item': selectedItem === 'dashboard' }">
          <v-list-item-icon>
            <div class="indicator" v-if="selectedItem === 'dashboard'"></div>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="main-container">
      <router-view></router-view> 
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selectedItem: null
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    }
  }
}
</script>

<style scoped>
.custom-top-bar {
  height: 64px; 
}
.negrito-font {
  font-size: 14px;
  font-weight: bold;
}
.normal-font {
  font-size: 14px;
}

.fixed-left {
  width: 100px;
  margin-top: 45px; 
}

.v-app-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.selected-item {
  background-color: #F1EFEE;
  position: relative;
}

.indicator {
  width: 4px;
  background-color: #E90505; 
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}

.main-container {
  background-color: #F1EFEE; /* Cor de fundo cinza */
  padding: 20px; /* Espaçamento interno para o conteúdo */
}
</style>
