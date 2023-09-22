<template>
  <v-app>
    <div class="menuHorizontal">
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
      
      <div class="menuVertical">
      
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

            <v-list-item link @click="selectItem('ingestao')" :class="{ 'selected-item': selectedItem === 'ingestao' }">
              <v-list-item-icon>
                <div class="indicator" v-if="selectedItem === 'ingestao'"></div>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Ingestão</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

      </div>

      <div class="conteudo-dash" v-if="selectedItem !== 'ingestao'">
          <!-- <oracle-dv project-path="/@Catalog/users/aldrik.alvaro@fatec.sp.gov.br/Novo Arquivo de Trabalho" active-page="canvas" active-tab-id="1">
        </oracle-dv>  -->
      </div>

      <div class="conteudo-ingestao" v-if="selectedItem === 'ingestao'">
          <!-- Conteúdo da Ingestão (sobreposto) -->
          <div class="conteudo-sobreposto" v-if="selectedItem === 'ingestao'">

            <form @submit.prevent="submitCSV">
              <div class="ingestao-upload">
                

                <input type="file" id="csvFile" accept=".csv" ref="fileInput">
                <!-- <br> 
                <div>Drag or select a file from your computer</div> -->
                <!-- <label for="csvFile">Drag or select a file from your computer</label> -->
                        
              
              </div>
              <br>
              <button class="ingestao-btn" type="submit">Upload</button>
            </form>
          </div>
      </div>

    </div>
    <!-- <v-main class="main-container">
      <router-view></router-view>
    </v-main> -->
  </v-app>
</template>

<script>
import axios from "axios";

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
    },
    async submitCSV() {
      const fileInput = this.$refs.fileInput;
      const selectedFile = fileInput.files[0];

      if (!selectedFile) {
        alert('Por favor, selecione um arquivo CSV.');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      try { 
        const response = await axios.post('/api/csv/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log('Resposta do servidor:', response.data);
        alert('Arquivo CSV enviado com sucesso!');
      } catch (error) {
        console.error('Erro ao enviar o arquivo CSV:', error);
        alert('Ocorreu um erro ao enviar o arquivo CSV.');
      }
    },
  },
};
</script>






<style scoped>
.custom-top-bar {
  height: 64px; 
}
.negrito-font {
  font-size: 14px;
  font-weight: bold;
}
.clearfix {
  clear: both; /* Limpa elementos flutuantes antes de iniciar uma nova linha */
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

.conteudo-dash {
  border: 5px solid rgb(39, 149, 182); 
  background-color: #CCCCFF !important;/* Cor de fundo personalizada para b */
  width: 5%;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  padding-top: 15px;

}






.menuVertical {
  background-color: #FFCCCC !important; /* Cor de fundo personalizada para c */
}



.menuHorizontal{
  border: 5px solid red; 
  width: 100%; 
  height: 5%;
}



/* ############################################################ */
.ingestao-btn{
  /* border: 5px solid rgb(192, 44, 137); */
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 35px;
  padding-right: 35px;
  margin-left: 47%;
  border-radius: 50px;
  background-color: #E90505; 
  color: white;
}

.conteudo-ingestao {
  border: 5px solid rgb(24, 226, 115); 
  background-color: #80ec97 !important;/* Cor de fundo personalizada para b */
  width: 5%;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  padding-top: 15px;

}

.ingestao-upload{
  border: 5px solid rgb(255, 255, 255); 
  background-color:  rgb(255, 255, 255); 
  border-radius: 10px;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 20vh; /* Isso define a altura da div pai para ocupar toda a altura da janela de visualização. Você pode ajustar conforme necessário. */
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 15%;
}

</style>
