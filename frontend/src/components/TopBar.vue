<template>
  <v-app>
    <div style="border: 5px solid red; width: 100%; height: 5%;">
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
    </div>
     
    <div class="container">
      <div class="c">
      
        <v-navigation-drawer
          expand-on-hover
          
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

      </div>
      <div class="b">
        <oracle-dv project-path="/@Catalog/users/aldrik.alvaro@fatec.sp.gov.br/Novo Arquivo de Trabalho" active-page="canvas" active-tab-id="1">
        </oracle-dv>
      </div>
    </div>
   
   






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

.container {
  display: flex;
  flex-direction: row;
  height: 95vh; /* Definir a altura da container para ocupar 95% da altura da janela de visualização */
}

 .b {
  /* border: 5px solid rgb(39, 149, 182); */
  width: 5%;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  padding-top: 15px;
}

.c {
  background-color: #FFCCCC !important; /* Cor de fundo personalizada para c */
}

.b {
  /* background-color: #CCCCFF !important; Cor de fundo personalizada para b */
}
</style>
