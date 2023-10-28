<template>
  <div style="border: 1px solid rgb(255, 0, 200);  height: 100%;" class="fundoSuppliers">
    <div style="border: 1px solid rgb(38, 0, 255)" class="conteudoSuppliers">
      <div style="border: 1px solid rgb(0, 255, 42)">
      
        <!-- CABEÇALHO -->
        <div style="border-bottom: 4px solid #f0efed; height: 75px; padding: 10px;">
          <v-row style="border: 0px solid rgb(0, 157, 255) !important;  padding-top: 10px; display: flex;">
            <v-col style="border: 0px solid rgb(0, 255, 153) !important;  padding-left: 25px;" cols="10">
              Suppliers
            </v-col>
            <v-col style="border: 0px solid rgb(0, 255, 153) !important; display: flex; align-items: right; justify-content: flex-end;" cols="2">
              <div style="border: 0px solid rgb(0, 255, 153) !important; ">
              </div>
            </v-col>
          </v-row>
        </div> 
  
        <!-- DIV COM FORM E TABELA ESTOQUE -->
        <v-row style="border: 1px solid rgb(0, 255, 42); padding: 10px;">

          <!-- FORM ESTOQUE -->
          <v-col style="border: 1px solid red !important;"  cols="12">
                  <v-container >
                    <v-row>
                      <v-col cols="12" lg="6">    
                        <v-text-field
                          v-model="itemName"
                          label="Item Name"
                          placeholder="Sushi"
                          variant="outlined"
                          ref="itemName"
                          append-inner-icon="mdi-account-multiple"
                          @click:append-inner="handleAppendInnerClick"
                        ></v-text-field>
                        <v-dialog v-model="modalOpen" max-width="1500">
                          <v-card>
                            <!-- CONTEUDO DA MODAL -->
                            <v-card-text>
                              <v-container >
                                <v-row>
                                  <v-col cols="12" lg="12">
                                    <v-autocomplete
                                    v-model="selectedSupplier"
                                    :items="supplierss"
                                    label="Select Supplier"
                                    item-text="name"
                                    item-value="idSupplier"
                                    append-inner-icon="mdi-account-plus"
                                    @click:append-inner="pesquisarEvento"
                                  ></v-autocomplete>
                                  </v-col>  
                                </v-row>
                                <v-row>
                                  <v-col cols="12" lg="7">
                                    <v-text-field
                                      v-model="idSupplierModal"
                                      variant="outlined"
                                      style="display: none;"
                                    ></v-text-field>
                                    <v-text-field
                                      v-model="companyNameModal"                                 
                                      label="Company"
                                      placeholder="Company"
                                      variant="outlined"
                                      ref="companyNameModal"
                                      :disabled="isFieldDisabled"
                                    ></v-text-field>
                                  </v-col>  
                                  <v-col cols="12" lg="5">                                       
                                    <v-text-field
                                      v-model="cnpjModal"
                                      label="CNPJ"
                                      placeholder="00.000.000/0000-00"
                                      variant="outlined"
                                      :disabled="isFieldDisabled"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                                <v-row >   
                                  <v-col cols="6" lg="4">
                                    <v-select
                                    v-model="segmentModal"
                                    :items="itemsSegment"                                     
                                    label="Segment"
                                    required
                                    variant="outlined"
                                    :disabled="isFieldDisabled"
                                  ></v-select>
                                  </v-col>
                                  <v-col cols="6" lg="3">
                                    <v-select
                                    v-model="paymentModal"
                                    :items="itemsPayment"
                                    label="Payment"
                                    required
                                    variant="outlined"
                                    :disabled="isFieldDisabled"
                                  ></v-select>
                                  </v-col>
                                  <v-col cols="6" lg="2">
                                    <v-text-field
                                    v-model="paydayModal"
                                    label="Pay Day"
                                    placeholder="15"
                                    variant="outlined"
                                    :disabled="isFieldDisabled"
                                  ></v-text-field>
                                  </v-col>
                                  <v-col cols="6" lg="3">
                                <v-text-field
                                v-model="forecastModal"
                                label="Forecast Delivery"
                                variant="outlined"
                                :disabled="isFieldDisabled"
                              ></v-text-field>
                                  </v-col>
                                </v-row>
                                <v-row >
                                  <v-col cols="12" lg="12">
                                    <v-text-field
                                    v-model="addressModal"
                                    label="Address"
                                    variant="outlined"
                                    :disabled="isFieldDisabled"
                                  ></v-text-field>
                                  </v-col>
                                </v-row>
                                <v-row>
                                  <v-col cols="6" lg="3">
                                    <v-text-field
                                    v-model="cityModal"
                                    label="City"
                                    variant="outlined"
                                    :disabled="isFieldDisabled"
                                  ></v-text-field>
                                  </v-col>
                                  <v-col cols="6" lg="3">
                                    <v-text-field
                                    v-model="stateModal"
                                    label="State"
                                    variant="outlined"
                                    :disabled="isFieldDisabled"
                                  ></v-text-field>
                                  </v-col>
                                  <v-col cols="6" lg="3">
                                    <v-text-field
                                    v-model="number1Modal"
                                    label="Phone"
                                    variant="outlined"
                                    :disabled="isFieldDisabled"
                                  ></v-text-field>
                                  </v-col>
                                  <v-col cols="6" lg="3">
                                    <v-select
                                    v-model="statusModal"
                                    :items="itemStatus"
                                    label="Status"
                                    variant="outlined"
                                    :disabled="isFieldDisabled"
                                  ></v-select>
                                  </v-col>            
                                </v-row>
                              </v-container>
                            </v-card-text>
                            <v-card-actions style="border: 0px solid rgb(255, 0, 200); justify-content: center;">
                          <div style="border: 0px solid red; display: inline-block;">
                            <button class="Register-btn" @click="updateButton">Update</button> <button class="Delete-btn" @click="deleteButton">Delete</button>
                          </div>
                        </v-card-actions>
                          </v-card>
</v-dialog>
                      </v-col>               
                      <v-col cols="12" lg="2">
                        <v-text-field
                          v-model="amount"       
                          label="Amount"
                          placeholder="150,00"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>  
                      <v-col cols="6" lg="2">
                        <v-select
                          v-model="measurement"
                          :items="itemMeasurement"
                          label="Measuarement"
                          required
                          variant="outlined"
                        ></v-select>
                      </v-col>
                      <v-col cols="6" lg="2">
                        <v-select
                          v-model="status"
                          :items="itemStatus"
                          label="Status"
                          required
                          variant="outlined"
                        ></v-select>
                      </v-col>            
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-app>
                          <v-container>
                            <v-table
                              height="450"
                            >
                            <thead>
                              <tr class="cabecalho" style="background-color: #333333">
                                <th style="color: white; text-align: center">ID</th>
                                <th style="color: white; text-align: center">Supplier Name</th>
                                <th style="color: white; text-align: center">CNPJ</th>
                                <th style="color: white; text-align: center">Phone Number</th>
                                <th style="color: white; text-align: center">Payment Method</th>
                                <th style="color: white; text-align: center">Delivery Forecastr</th>
                                <th style="color: white; text-align: center">Values</th>
                                <th style="color: white; text-align: center">QNT</th>
                                <th style="color: white; text-align: center">UM</th>
                                <th style="color: white; text-align: center">Status</th>
                              </tr>
                            </thead>
                            <tbody style="align-items: center">
                              <tr v-for="(item, index) in items" :key="index">
                                <td style="border-bottom: 1px solid black">{{ item.formula }}</td>
                                <td style="border-bottom: 1px solid black">{{ item.itemNome }}</td>
                                <td style="border-bottom: 1px solid black">{{ item.dtCadastro }}</td>
                                <td style="border-bottom: 1px solid black">
                                  <v-btn @click="editItem(item)">Edit</v-btn>
                                  <v-btn @click="deleteItem(item)">Delete</v-btn>
                                </td>
                              </tr>
                            </tbody>
                          </v-table>
                        </v-container>
                          <!-- Edit Modal -->
                          <v-dialog v-model="editModalOpen" max-width="500px">
                            <v-card>
                              <v-card-title>Edit Rule</v-card-title>
                              <v-card-text>
                                <v-form ref="form">
                                  <v-text-field label="Rule" v-model="usuarioEditado.formula" required></v-text-field>
                                </v-form>
                              </v-card-text>
                              <v-card-actions>
                                <v-btn @click="cancelEdit">Cancel</v-btn>
                                <v-btn @click="saveEdit">Save</v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-app>
                      </v-col>
                    </v-row>            
                  </v-container>
                  <div style="border: 0px solid red; padding-left: 35px;"><button class="Register-btn" @click="Registerbtn">Register</button></div>
          </v-col>  
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
    name: 'Upload',
    name: 'Product',
    data() {
    return {
    usuarioEditado: {
      formula: '',
      itemNome: '',
      dtCadastro: '',
    },
    selectedSupplier: null,
    supplierss: [],
    itemsss: ['foo', 'bar', 'fizz', 'buzz'],
    values: 'foo',
      companyNameModal: '', // Seu valor v-model
      isFieldDisabled: true, // Defina o campo como desabilitado inicialmente
      modalOpen: false,
      selectedItem: null,
      selectedFileName: 'Select a file from your computer',
      isMobile: window.innerWidth <= 700,
      companyName: '',
      cnpj: '',
      segment:'',
      payment:'',
      payday:'',
      forecast:'',
      address:'',
      city:'',
      state:'',
      number1:'',
      status:'',
      companyNameModal:'',
      cnpjModal:'',
      segmentModal:'',
      paymentModal:'',
      paydayModal:'',
      forecastModal:'',
      addressModal:'',
      cityModal:'',
      stateModal:'',
      number1Modal:'',
      statusModal:'',
      selectedSupplier:'',
      idSupplierModal:'',
      dialog: false,
      // desserts: [
      //   {
      //     name: 'Sushi',
      //     price: 'R$25,00',
      //     type: 'KG',
      //   },
      //   {
      //     name: 'Nigiri',
      //     price: 'R$45,00',
      //     type: 'KG',
      //   },
      //   {
      //     name: 'Temaki',
      //     price: 'R$5,00',
      //     type: 'KG',
      //   },
      //   {
      //     name: 'Gunkan',
      //     price: 'R$2,00',
      //     type: 'KG',
      //   },
      //   {
      //     name: 'Hossomaki Tekkamaki',
      //     price: 'R$85,00',
      //     type: 'KG',
      //   },
      //   {
      //     name: 'Hot roll',
      //     price: 'R$95,00',
      //     type: 'KG',
      //   },
      //   {
      //     name: 'Uramaki',
      //     price: 'R$12,00',
      //     type: 'KG',
      //   },
      //   {
      //     name: 'Tempurá',
      //     price: 'R$27,00',
      //     type: 'KG',
      //   },
      //   {
      //     name: 'Harumaki',
      //     price: 'R$65,00',
      //     type: 'KG',
      //   },
      //   {
      //     name: 'Sashimi',
      //     price: 'R$5,00',
      //     type: 'KG',
      //   },
      // ],
      desserts: [],
      firstName: '',
      rules: [
              value => {
                if (value) return true
                return 'empty field'
              },
            ],
      select: null,

      itemsPayment: [
      'Boleto',
      'PIX',
      'Cartão',
      'Dinheiro',
      'Cheque',

      ],

      itemsSegment: [
      'Comidas Frescas',
      'Bebidas',
      'Frutas',
      'Verduras e Legumes',
      'Peixes',
      'Temperos',
      ],



      itemStatus: [
        'Active',
        'Inactive',
      ],
      };
    },
    created() {
        // Realizar a chamada HTTP GET para obter os dados dos fornecedores
        this.fetchSuppliers();
        this.table();


      },

    methods: {
      verificarCamposVazios(campos) {

    // Verifica se algum campo está vazio
    const campoVazio = campos.some((campo) => campo.trim() === "");

    if (campoVazio) {
      alert("Preencha todos os campos antes de continuar.");
      throw new Error("Campos não preenchidos"); // Lança uma exceção para interromper a execução
    } else {
      console.log("Todos os campos estão preenchidos.");
      
    }
  },
      table(){
        axios
          .get("api/feedstocks")
          .then((response) => {
            this.desserts = response.data;
          })
          .catch((error) => {
            console.error("Erro ao obter os dados dos fornecedores: ", error);
          });
      },
      fetchSuppliers() {
        axios.get('api/product')
          .then(response => {
            // Extract the "name" properties from the response and store them in this.suppliers
            this.supplierss = response.data.map(supplier => supplier.name);
            //console.log(this.supplierss)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      enableField() {
        this.isFieldDisabled = false; // Habilita o campo
      },
      disableField() {
        this.isFieldDisabled = true; // Desabilita o campo
      },
      handleAppendInnerClick() {
        this.modalOpen = true;
        //alert('Ícone do Apêndice Interno Clicado');
      },
      pesquisarEvento() {
        const selectedSupplierValue = this.selectedSupplier;
        //alert(selectedSupplierValue);
        // Fazer a solicitação Axios
        axios.get(`http://localhost:8080/api/suppliers/${selectedSupplierValue}`)
          .then(response => {
            // Atribuir o valor do campo "name" ao componente Vue
            const data = response.data[0];
            this.companyNameModal = data.name;
            this.segmentModal = data.segment;
            this.forecastModal = data.deliveryForecast;
            this.cnpjModal = data.cnpj;
            this.number1Modal = data.phone;
            this.addressModal = data.address;
            this.cityModal = data.city;
            this.stateModal = data.state;
            this.statusModal = data.status;
            this.paymentModal = data.paymentsMethods.name;
            this.paydayModal = data.paymentsMethods.payDay;
            this.idSupplierModal = data.idSupplier;
            
          })
          .catch(error => {
            console.error('Erro na solicitação: ', error);
          });
        this.enableField();

      },
      async Registerbtn() {




        // Resgata os valores dos campos
        const companyNameValue = this.companyName;
        const cnpjValue = this.cnpj;
        const segmentValue = this.segment;
        const paymentValue = this.payment;
        const paydayValue = this.payday;
        const forecastValue = this.forecast;
        const addressValue = this.address;
        const cityValue = this.city;
        const stateValue = this.state;
        const number1Value = this.number1;
        const statusValue = this.status;

      //   const campos = [
      //   this.idSupplierValue,
      //   this.companyNameValue,
      //   this.cnpjValue,
      //   this.segmentValue,
      //   this.paymentValue,
      //   this.paydayValue,
      //   this.forecastValue,
      //   this.addressValue,
      //   this.cityValue,
      //   this.stateValue,
      //   this.number1Value,
      //   this.statusValue,
      //   ];


      // try {
      //   this.verificarCamposVazios(campos);
      //   // Continua com o restante da lógica da outraFuncao
      // } catch (error) {
      //   if (error.message === "Campos não preenchidos") {
      //     return
      //   }}

        // Crie um objeto JSON com os valores
        const postData = {
          name: companyNameValue,
          segment: segmentValue,
          deliveryForecast: forecastValue,
          cnpj: cnpjValue,
          phone: number1Value,
          address: addressValue,
          city: cityValue,
          state: stateValue,
          status: statusValue,
          paymentMethodName: paymentValue,
          paymentMethodPayDay: paydayValue
        };


        

        try {
          // Faça a solicitação POST usando o Axios
          const response = await axios.post("/api/product", postData);

          // Exiba a resposta no console (pode ser útil para depuração)
          console.log("Resposta da solicitação POST:", response);

          // Limpe os campos após o envio bem-sucedido (opcional)
          this.companyName =  '';
          this.cnpj =  '';
          this.segment = '';
          this.payment = '';
          this.payday = '';
          this.forecast = '';
          this.address = '';
          this.city = '';
          this.state = '';
          this.number1 = '';
          this.status = '';
          this.selectedSupplier = '';
          this.fetchSuppliers();
          alert("Item successfully registered");
        } catch (error) {
          // Em caso de erro, exiba-o no console
          console.error("Erro na solicitação POST:", error);
          alert('An error occurred while registering an item');
        }

      },
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
          const response = await axios.post('/api/csv/supplier/upload', formData, {
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
      async updateButton() {
       // Resgata os valores dos campos

 
      

        const idSupplierModalValue = this.idSupplierModal;
        const companyNameModalValue = this.companyNameModal;
        const cnpjModalValue = this.cnpjModal;
        const segmentModalValue = this.segmentModal;
        const paymentModalValue = this.paymentModal;
        const paydayModalValue = this.paydayModal;
        const forecastModalValue = this.forecastModal;
        const addressModalValue = this.addressModal;
        const cityModalValue = this.cityModal;
        const stateModalValue = this.stateModal;
        const number1ModalValue = this.number1Modal;
        const statusModalValue = this.statusModal;


      //   const campos = [
      //   this.idSupplierModalValue,
      //   this.companyNameModalValue,
      //   this.cnpjModalValue,
      //   this.segmentModalValue,
      //   this.paymentModalValue,
      //   this.paydayModalValue,
      //   this.forecastModalValue,
      //   this.addressModalValue,
      //   this.cityModalValue,
      //   this.stateModalValue,
      //   this.number1ModalValue,
      //   this.statusModalValue,
      //   ];

      //   try {
      //   this.verificarCamposVazios(campos);
      //   // Continua com o restante da lógica da outraFuncao
      // } catch (error) {
      //   if (error.message === "Campos não preenchidos") {
      //     return
      //   }}
        

        // Crie um objeto JSON com os valores
        const postData = {
          name: companyNameModalValue,
          segment: segmentModalValue,
          deliveryForecast: forecastModalValue,
          cnpj: cnpjModalValue,
          phone: number1ModalValue,
          address: addressModalValue,
          city: cityModalValue,
          state: stateModalValue,
          status: statusModalValue,
          paymentMethodName: paymentModalValue,
          paymentMethodPayDay: paydayModalValue
        };

        try {
          // Faça a solicitação POST usando o Axios
          const response = await axios.put('/api/suppliers/update/' + companyNameModalValue, postData);

          // Exiba a resposta no console (pode ser útil para depuração)
          console.log("Resposta da solicitação POST:", response);

          // Limpe os campos após o envio bem-sucedido (opcional)
          this.companyNameModal =  '';
          this.cnpjModal =  '';
          this.segmentModal = '';
          this.paymentModal = '';
          this.paydayModal = '';
          this.forecastModal = '';
          this.addressModal = '';
          this.cityModal = '';
          this.stateModal = '';
          this.number1Modal = '';
          this.statusModal = '';
          this.selectedSupplier = '';
          this.disableField();
          this.fetchSuppliers();
          alert('Item successfully modified');

        } catch (error) {
          // Em caso de erro, exiba-o no console
          console.error("Erro na solicitação POST:", error);
          // Limpe os campos após o envio bem-sucedido (opcional)
          this.companyNameModal =  '';
          this.cnpjModal =  '';
          this.segmentModal = '';
          this.paymentModal = '';
          this.paydayModal = '';
          this.forecastModal = '';
          this.addressModal = '';
          this.cityModal = '';
          this.stateModal = '';
          this.number1Modal = '';
          this.statusModal = '';
          this.selectedSupplier = '';
          this.disableField();
          this.fetchSuppliers();
          alert('An error occurred while modifying the item');
        }

      },
      async deleteButton() {
        const idSupplierModalValue = this.idSupplierModal;
        try {
          // Fazer a solicitação DELETE usando Axios
          const response = await axios.delete('/api/suppliers/' + idSupplierModalValue);
          console.log('Item excluído com sucesso', response);
          // Limpe os campos após o envio bem-sucedido (opcional)
          this.companyNameModal =  '';
          this.cnpjModal =  '';
          this.segmentModal = '';
          this.paymentModal = '';
          this.paydayModal = '';
          this.forecastModal = '';
          this.addressModal = '';
          this.cityModal = '';
          this.stateModal = '';
          this.number1Modal = '';
          this.statusModal = '';
          this.selectedSupplier = '';
          this.disableField();
          this.fetchSuppliers();
          alert('Item successfully deleted');
        } catch (error) {
          // Lidar com erros, se houver algum problema na exclusão
          console.log('Erro ao excluir o item', error);
          // Limpe os campos após o envio bem-sucedido (opcional)
          this.companyNameModal =  '';
          this.cnpjModal =  '';
          this.segmentModal = '';
          this.paymentModal = '';
          this.paydayModal = '';
          this.forecastModal = '';
          this.addressModal = '';
          this.cityModal = '';
          this.stateModal = '';
          this.number1Modal = '';
          this.statusModal = '';
          this.selectedSupplier = '';
          this.disableField();
          this.fetchSuppliers();
          alert('An error occurred while deleting the item');
        }
      },
  },
}
</script>

<style scoped>
.fundoSuppliers {
background-color: #f0efed !important;/* Cor de fundo personalizada para b */
display: flex;
flex-direction: row;
height: 95vh; /* Definir a altura da container para ocupar 95% da altura da janela de visualização */
}
.conteudoSuppliers {
/* border: 5px solid red; width: 100%; height: 100%; */
  
  background-color: #ffffff !important;
  border-radius: 10px;
  margin: 15px;
  width: 5%;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;

}













.Register-btn:hover {
background-color: #ec4040; 
}

.upload-btn:hover {
background-color: #9f9f9f; 
}

.upload-btn{
/* border: 5px solid rgb(192, 44, 137);
background-color: #E90505; */
padding-top: 0px;
/*  padding-top: 0px;
padding-bottom: 0px;
padding-left: 0px;
padding-right: 0px;   */

/* margin-left: 46%; */
border-radius: 5px;

color: white;
}


.Register-btn{
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

.Delete-btn:hover {
background-color: #ababab; 
}

.Delete-btn{
/* border: 5px solid rgb(192, 44, 137); */
padding-top: 10px;
padding-bottom: 10px;
padding-left: 35px;
padding-right: 35px;

/* margin-left: 46%; */
border-radius: 50px;
background-color: #393e3b; 
color: white;
}
.negrito-font {
font-size: 16px;
font-weight: bold;
}

.fundoUpload {
display: flex;
flex-direction: row;
height: 30vh; /* Definir a altura da container para ocupar 95% da altura da janela de visualização */
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
  height: 25vh;

  margin-top: 5%;
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
  background-color: #ffffff; 
}
.close{
  color: #393e3b;
}
.ingestao-btn{
  color: #E90505; 
}
</style>
