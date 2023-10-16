<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-chart-areaspline"
        title="Dashboard Sales"
        value="dashboard"
        @click="handleItemClick('dashboardSales')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-chart-bar"
        title="Dashboard Suppliers"
        value="dashboard"
        @click="handleItemClick('dashboardSuppliers')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-download"
        title="Upload"
        value="upload"
        @click="handleItemClick('upload')"
      ></v-list-item>
      <v-list-item
      prepend-icon="mdi-account-multiple"
      title="Suppliers"
      value="suppliers"
      @click="handleItemClick('suppliers')"
    ></v-list-item>
    
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: 'App',
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    handleItemClick(itemTitle) {
      //alert(`Você selecionou o item: ${itemTitle}`);
      if (itemTitle == "dashboard") {
          //router.push("/dashboard");
          window.location.href = "http://localhost:3000/dashboard";
      }
      if (itemTitle == "dashboardSuppliers") {
          //router.push("/dashboard");
          window.location.href = "http://localhost:3000/dashboardSuppliers";
      }
      if (itemTitle == "upload") {
          router.push("/upload");
      }

      if (itemTitle == "suppliers") {
          router.push("/suppliers");
      }
      
    },
  },
};
</script>

<style scoped>
.menuVertical {
  margin-top: 10px;
  background-color: #fafafa !important; /* Cor de fundo personalizada para c */
}
.indicator {
  width: 4px;
  background-color: #E90505; 
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}
.selected-item {
  background-color: #F1EFEE;
  position: relative;
}
</style>