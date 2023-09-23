<template>
  <!-- <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Essentials Preset
    </v-app-bar-title>
  </v-app-bar> -->
  
  <div class="menuHorizontal">
    <v-app-bar color="#393E3B" top dense fixed dark >
          <div class="d-flex align-center">
            <v-img
              alt="Oracle Logo"
              class="oracle-logo mr-5 ml-5"
              src="@/assets/oraclelogo.png"
              transition="scale-transition"
              width="35"
            />
            <span class="negrito-font mr-2">OracleDine</span>
            <span class="normal-font mr-2">|</span>
            <span class="normal-font mr-2">RestaurantName</span>
          </div>
          <v-spacer></v-spacer>
          <v-btn target="_blank" text>
            <i class="fa fa-user-circle-o" aria-hidden="true" style="color: #ffffff; font-size: 20px; "></i>
          
          </v-btn>
    </v-app-bar>
  </div>
</template>

<script setup>
  //
</script>

<style scoped>
/* ############################################################ */
/* CSS - MENU HORIZONTAL */
.menuHorizontal{
  border: 0px solid red; 
  width: 0%; 
  height: 0%;
}
.normal-font {
  font-size: 14px;
}
.custom-top-bar {
  height: 30px; 
}
.negrito-font {
  font-size: 14px;
  font-weight: bold;
}
</style>