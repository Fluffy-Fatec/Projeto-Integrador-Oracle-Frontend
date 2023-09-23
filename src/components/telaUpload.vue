<template>
    <div class="fundoUpload">
      <div class="conteudoUpload">
        <form @submit.prevent="submitCSV">
              <div class="ingestao-upload">
                <input type="file" id="csvFile" accept=".csv" ref="fileInput" @change="updateSelectedFileName" style="display: none;" >
                <label for="csvFile" class="file-upload-button"><i class="fa fa-file-text" aria-hidden="true" style="font-size: 54px; color: #222222;"></i></label>
                <span class="selected-file-name">{{ selectedFileName }}</span>
              </div>
              <br>
              <!-- <div style="border: 1px solid red; display: flex; justify-content: center; align-items: center; height: 100vh;"><button class="ingestao-btn" type="submit">Upload</button></div> -->
              <div style="border: 0px solid red; display: flex; justify-content: center;"><button class="ingestao-btn" type="submit">Upload</button></div>
            </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";

  export default {
      name: 'Upload',
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
  }
  </script>

<style scoped>
.fundoUpload {
  background-color: #f0efed !important;/* Cor de fundo personalizada para b */
  display: flex;
  flex-direction: row;
  height: 95vh; /* Definir a altura da container para ocupar 95% da altura da janela de visualização */
}
.conteudoUpload {
  /* border: 5px solid red; width: 100%; height: 100%; */
    border: 2px solid #ffffff !important;
    background-color: #ffffff !important;
    border-radius: 10px;
    margin: 15px;
    width: 5%;
    flex-grow: 1;
    box-sizing: border-box;
    position: relative;

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
    margin-left: 22%;
    margin-right: 22%;
    margin-top: 15%;
  }
  .ingestao-upload label {
    margin-top: 10px; /* Espaço entre o campo de entrada e o rótulo */
  }

  .file-upload-button {
    cursor: pointer;
    padding: 10px 20px;
    /* background-color: #007bff;  */
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

  .ingestao-btn{
    /* border: 5px solid rgb(192, 44, 137); */
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 35px;
    padding-right: 35px;

    /* margin-left: 46%; */
    border-radius: 50px;
    background-color: #E90505; 
    color: white;
  }

</style>
  