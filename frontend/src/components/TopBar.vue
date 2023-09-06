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
  
        <v-btn
          target="_blank"
          text
        >
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </v-app-bar>
    </v-app>
</template>

<style scoped>
.custom-top-bar {
  height: 20px;
}
.negrito-font {
  font-size: 14px;
  font-weight: bold;
}
.normal-font{
  font-size: 14px;
}
</style>
