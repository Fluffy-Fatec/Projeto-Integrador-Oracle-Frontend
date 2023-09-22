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
              <v-list-item-icon  style="justify-content: center; align-items: center;">
                <div class="indicator" v-if="selectedItem === 'dashboard'"></div>
                <i class="fa fa-bar-chart" aria-hidden="true" style="color: #757575; font-size: 22px; "></i>
              </v-list-item-icon>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>

            <v-list-item link @click="selectItem('ingestao')" :class="{ 'selected-item': selectedItem === 'ingestao' }">
              <v-list-item-icon  style="justify-content: center; align-items: center;">
             
                <div class="indicator" v-if="selectedItem === 'ingestao'"></div>
                <i class="fa fa-download" aria-hidden="true" style="color: #757575; font-size: 22px; "></i>
              
              </v-list-item-icon>
              <v-list-item-title>Upload</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

      </div>

      <div class="conteudo-dash" v-if="selectedItem !== 'ingestao'">
        <oracle-dv project-path="/@Catalog/users/aldrik.alvaro@fatec.sp.gov.br/Novo Arquivo de Trabalho" active-page="canvas" active-tab-id="1">
        </oracle-dv>  
      </div>

      <div class="conteudo-ingestao" v-if="selectedItem === 'ingestao'">
          <!-- Conteúdo da Ingestão (sobreposto) -->
          <div class="conteudo-sobreposto" v-if="selectedItem === 'ingestao'">
            <form @submit.prevent="submitCSV">
            <div class="ingestao-upload">
              <!-- <input type="file" id="csvFile" accept=".csv" ref="fileInput"> -->
              <!-- <input type="file" id="csvFile" accept=".csv" ref="fileInput" style="display: none;">
              <label for="csvFile" class="file-upload-button">Select CSV File</label> -->
              <input type="file" id="csvFile" accept=".csv" ref="fileInput" @change="updateSelectedFileName" style="display: none;" >
              <label for="csvFile" class="file-upload-button"><i class="fa fa-file-text" aria-hidden="true" style="font-size: 54px; color: #222222;"></i></label>
              <span class="selected-file-name">{{ selectedFileName }}</span>
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
      selectedItem: null,
      selectedFileName: 'Select a file from your computer',
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
    updateSelectedFileName(event) {
      // Quando o arquivo é selecionado, atualize o nome do arquivo
      this.selectedFileName = event.target.files[0].name;
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

.clearfix {
  clear: both; /* Limpa elementos flutuantes antes de iniciar uma nova linha */
}
.v-app-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}


/* ############################################################ */
/* CSS - CONTEUDO */
.container {
  background-color: #f0efed !important;/* Cor de fundo personalizada para b */
  display: flex;
  flex-direction: row;
  height: 95vh; /* Definir a altura da container para ocupar 95% da altura da janela de visualização */
}
.main-container {
  background-color: #F1EFEE; /* Cor de fundo cinza */
  padding: 20px; /* Espaçamento interno para o conteúdo */
}


/* ############################################################ */
/* CSS - MENU HORIZONTAL */
.menuHorizontal{
  border: 5px solid red; 
  width: 100%; 
  height: 5%;
}
.normal-font {
  font-size: 14px;
}
.custom-top-bar {
  height: 64px; 
}
.negrito-font {
  font-size: 14px;
  font-weight: bold;
}

/* ############################################################ */
/* CSS - MENU VERTICAL */
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

/* ############################################################ */
/* CSS - TELA BI */
.conteudo-dash {
  border: 5px solid #ffffff !important;
  background-color: #ffffff !important;
  border-radius: 30px;
  margin: 20px;
  width: 5%;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  /* width: 5%;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  padding-top: 15px; */
}

/* ############################################################ */
/* CSS - TELA INGESTAO */
  .ingestao-btn{
    /* border: 5px solid rgb(192, 44, 137); */
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 35px;
    padding-right: 35px;
    margin-left: 46%;
    border-radius: 50px;
    background-color: #E90505; 
    color: white;
  }
  .conteudo-ingestao {
    border: 5px solid #ffffff !important;
    background-color: #ffffff !important;
    border-radius: 30px;
    margin: 20px;
    width: 5%;
    flex-grow: 1;
    box-sizing: border-box;
    position: relative;
    padding-top: 15px;

  }
  .ingestao-upload {
    border: 5px dotted rgb(57 62 59);
    background-color: #f0efed;
    border-radius: 10px;
    display: flex;
    flex-direction: column; /* Altera a direção da flexbox para column */
    justify-content: center; /* Centraliza verticalmente */
    align-items: center; /* Centraliza horizontalmente */
    height: 20vh;
    margin-left: 30%;
    margin-right: 30%;
    margin-top: 15%;
  }
  .ingestao-upload label {
    margin-top: 10px; /* Espaço entre o campo de entrada e o rótulo */
  }
  .file-upload-button {
    cursor: pointer;
    padding: 10px 20px;
    /* background-color: #007bff; */
    color: #fff;
    border: none;
    border-radius: 5px;
  }
  .file-upload-button:hover {
    background-color: #cdcdcd;
  }
  .ingestao-btn:hover {
    background-color: #ec4040; 
  }


</style>
