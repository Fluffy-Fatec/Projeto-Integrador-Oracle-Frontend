<template>
  <div style="border: 0px solid rgb(255, 0, 200); background-color: #f0efed !important;" class="fundoSuppliers">
    <v-app-bar-nav-icon
      v-if="isMobile"
      variant="text"
      @click.stop="drawer = !drawer"
      class="icon-mobile"
    ></v-app-bar-nav-icon>
   
  <v-navigation-drawer  v-model="drawer" expand-on-hover rail>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-chart-areaspline"
        title="Dashboard Sales"
        value="dashboardSales"
        @click="handleItemClick('dashboardSales')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-chart-bar"
        title="Dashboard Suppliers"
        value="dashboardSuppliers"
        @click="handleItemClick('dashboardSuppliers')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-chart-bar-stacked"
        title="Dashboard Stock"
        value="dashboardStock"
        @click="handleItemClick('dashboardStock')"
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
      <v-list-item
      prepend-icon="mdi-food-fork-drink"
      title="Products"
      value="products"
      @click="handleItemClick('product')"
      ></v-list-item>
    
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: 'App',
  data() {
    return {
      selectedItem: null,
      drawer: false,
      isMobile: false,
    };
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
    this.checkIfDesktop();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile);
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768; // Define o tamanho que você considera como mobile
    },
    
    checkIfDesktop() {
      if (!this.isMobile) {
        this.drawer = true; // Se não for mobile, o drawer será sempre exibido
      }
    },

    refresh() {
      window.location.reload();
    },

    handleItemClick(itemTitle) {
      //alert(`Você selecionou o item: ${itemTitle}`);
      if (itemTitle == "dashboardSales") {
          //router.push("/dashboard");
          //window.location.href = "http://localhost:3000/dashboard";
          window.location.href = "https://oracledinner.vercel.app/dashboard";
          this.refresh();
          
      }
      if (itemTitle == "dashboardSuppliers") {
          //router.push("/dashboard");
          //window.location.href = "http://localhost:3000/dashboardSuppliers";
          window.location.href = "https://oracledinner.vercel.app/dashboardSuppliers";
          this.refresh();
      }
      if (itemTitle == "dashboardStock") {
          //router.push("/dashboard");
          //window.location.href = "http://localhost:3000/dashboardStock";
          window.location.href = "https://oracledinner.vercel.app/dashboardStock";
          this.refresh();
      }
      
      if (itemTitle == "upload") {
          router.push("/upload");
      }

      if (itemTitle == "suppliers") {
          router.push("/suppliers");
      }

      if (itemTitle == "product") {
          router.push("/product");
      }
      
    },
    watch: {
      group () {
        this.drawer = false
      },
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

.icon-mobile {
  font-size: 15px; /* Altere o tamanho conforme necessário */
}
</style>