<template>
  <div style=" height: 100%;" class="fundoSuppliers">
    <div  class="conteudoSuppliers">
      <div >
      
        <!-- CABEÇALHO -->
        <div style="border-bottom: 4px solid #f0efed; height: 75px; padding: 10px;">
          <v-row style=" padding-top: 10px; display: flex;">
            <v-col style="border: 0px solid rgb(0, 255, 153) !important;  padding-left: 25px;" cols="10">
              Products
            </v-col>
            <v-col style="border: 0px solid rgb(0, 255, 153) !important; display: flex; align-items: right; justify-content: flex-end;" cols="2">
              <div style="border: 0px solid rgb(0, 255, 153) !important; ">
              </div>
            </v-col>
          </v-row>
        </div> 
  
        <!-- DIV COM FORM E TABELA ESTOQUE -->
        <v-row style=" padding: 10px;">

          <!-- FORM ESTOQUE -->
          <v-col  cols="12">
                  <v-container > 
                    <v-row>
                      <v-col cols="12" lg="6">    
                        <v-autocomplete
                        v-model="itemName"
                        :items="itenss"
                        label="Item Name"
                        item-text="name"
                        item-value="idstock"
                        append-inner-icon="mdi-find-replace"
                        @click:append-inner="listarItens"
                        ></v-autocomplete>
                        <v-text-field style="display: none;"
                          v-model="idItemSelected"       
                          variant="outlined"
                        ></v-text-field>
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
                        <v-text-field
                          v-model="value"       
                          label="Value"
                          placeholder="200,00"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>            
                    </v-row>
                    
                  </v-container>
                  <v-container>
                            <v-table
                              
                            >
                            <thead>
                              <tr class="cabecalho" style="background-color: #333333">
                                <th style="color: white; text-align: center">ID</th>
                                <th style="color: white; text-align: center">Supplier Name</th>
                                <th style="color: white; text-align: center">CNPJ</th>
                                <th style="color: white; text-align: center">Phone Number</th>
                                <th style="color: white; text-align: center">Payment Method</th>
                                <th style="color: white; text-align: center">Delivery Forecast</th>
                                <th style="color: white; text-align: center">Values</th>
                                <th style="color: white; text-align: center">QNT</th>
                                <th style="color: white; text-align: center">UM</th>
                                <th style="color: white; text-align: center">Status</th>
                                <th style="color: white; text-align: center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in itemSupplierss" :key="item.stocks.name">
                              <td style="text-align: center">{{ item.supplierStockOffer.idSfOffer }}</td>
                              <td style="text-align: center">{{ item.supplierStockOffer.suppliers.name }}</td>
                              <td style="text-align: center">{{ item.supplierStockOffer.suppliers.cnpj }}</td>
                              <td style="text-align: center">{{ item.supplierStockOffer.suppliers.phone }}</td>
                              <td style="text-align: center">{{ item.supplierStockOffer.suppliers.paymentsMethods.name }}</td>
                              <td style="text-align: center">{{ item.supplierStockOffer.suppliers.deliveryForecast }}</td>
                              <td style="text-align: center">{{ item.supplierStockOffer.value }}</td>
                              <td style="text-align: center">{{ item.supplierStockOffer.quantityCan }}</td>
                              <td style="text-align: center">{{ item.supplierStockOffer.measurement }}</td>
                              <td style="text-align: center">{{ item.supplierStockOffer.suppliers.status }}</td>
                              <td style="text-align: center"> <button  @click="deleteSupplierStock( item.supplierStockOffer.idSfOffer )" >
                                <i class="fa fa-trash-o" aria-hidden="true"></i>  </button></td>

                              <!-- <td style="text-align: center">{{ botãodelete - funcaodelete(item.supplierStockOffer.idSfOffer) }}</td> -->

                            </tr>
                          </tbody>

                          </v-table>
                          </v-container>
                  <!-- botões -->
          </v-col>
          
        </v-row>
          <div class="button-container">
            <button class="Register-btn" @click="openModalRegister">Register</button> <button class="Delete-btn" @click="openModalLinkSupplier">Link Supplier</button>
          </div>
      </div>
    </div>
  </div>
  <!-- Modal editar itens -->
  <v-dialog
      v-model="modalLink"
      persistent
      width="1024"
    >
      <v-card>

        <!-- TITULO -->
        <v-card-title>
          <span class="text-h5">Selection of Suppliers</span>
        </v-card-title>

         <!-- CONTEUDO -->
        <v-card-text>
          <v-container>
            <v-row>
              <v-autocomplete
                v-model="supplierName"
                :items="suppliersss"
                label="Suppliers name"
                item-text="name"
                item-value="idsupplier"
                @click:append-inner="listarSupplier"
              ></v-autocomplete>
            </v-row>
          </v-container>
        </v-card-text>


        <!-- FOOTER -->
        <v-card-actions>
          <v-spacer></v-spacer>

          <button class="Register-btn" @click="linkSupplier">Register</button> <button class="Delete-btn" @click="modalLink = false">Close</button>
          <v-text-field style="display: none;"
                          v-model="idSupplierSelected"       
                          variant="outlined"
                        ></v-text-field>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <!-- Modal registrar itens -->
    <v-dialog
      v-model="modalRegister"
      persistent
      width="1024"
    >
      <v-card>

        <!-- TITULO -->
        <v-card-title>
          <span class="text-h5">Create Item</span>
        </v-card-title>



         <!-- CONTEUDO -->
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
              
              <v-text-field
                          v-model="nameItemRegister"       
                          label="Name"
                          variant="outlined"
                        ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
              <v-text-field
                          v-model="amountRegister"       
                          label="Amount"
                          placeholder="150,00"
                          variant="outlined"
                        ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
              <v-select
                          v-model="measurementRegister"
                          :items="itemMeasurement"
                          label="Measuarement"
                          required
                          variant="outlined"
                        ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>


        <!-- FOOTER -->
        <v-card-actions>
          <v-spacer></v-spacer>

          <button class="Register-btn" @click="registerItem">Register</button> <button class="Delete-btn" @click="modalRegister = false">Close</button>
          <v-text-field style="display: none;"
                          v-model="idSupplierSelected"       
                          variant="outlined"
                        ></v-text-field>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
import axios from "axios";
export default {

    name: 'Product',
    data() {
    return {
      nameItemRegister: '',
      amountRegister: '',
      idSupplierOfferValue: '',
      idSupplier: '',
      amountValue: '',
      value: '',
      measurementValue: '',
      idItem: '',
      idSupplierSelected: '',
      idItemSelected: '',
      data: [],
      supplierName: '',
      supplierNameSelected: '',
      suppliersss: [],
      modalLink: false,
      modalRegister: false,
      amount:'',
      value: '',
      measurement: '',
      measurementRegister: '',
      itemName: '',
      itenss: [],
      itemSupplierss: [],
      isFieldDisabled: true, // Defina o campo como desabilitado inicialmente
      modalOpen: false,
      isMobile: window.innerWidth <= 700,
      dialog: false,
      select: null,

      itemMeasurement: [
        'Kg',
        'Un',
        'Cx',
        'l',
      ],

      itemStatus: [
        'Active',
        'Inactive',
      ],
      };
    },
    created() {
        // Realizar a chamada HTTP GET para obter os dados dos fornecedores
        this.fetchItems();
        this.listarSupplier();
        //this.listarItens();


      },

    methods: {
      async deleteSupplierStock(idSupplierOfferValue){
          try{        
            console.log('antes de excluir');
            const response = await axios.delete('supplier-stock-offers/' + idSupplierOfferValue)
            console.log('Item excluído com sucesso', response);
            this.listarItens();
          }
          catch(error){
            console.log('Erro ao excluir o item', error);
          };  
          
          
      },
      fetchItems() {
        axios.get('api/stocks')
          .then(response => {
            // Extract the "name" properties from the response and store them in this.suppliers
            this.itenss = response.data.map(item => item.name);
            console.log(this.itenss)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      listarItens(){
        const selectedItemName = this.itemName;
        console.log(selectedItemName)


        axios.get('api/stocks/' + selectedItemName)
          .then(response => {
            // Extract the "name" properties  from the response and store them in this.suppliers
            this.itemSupplierss = response.data
            console.log(this.itemSupplierss)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
        this.setIdItem(selectedItemName);

      },
      setIdItem(item){
        axios.get('api/stocks/' + item)
          .then(response => {
            const data = response.data[0];
            this.idItemSelected = data.stocks.idstock;
            console.log(idItemSelected)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });

      },
      async selectedIdSupplier(supplier){
        await axios.get('api/suppliers/' + supplier)
          .then(response => {
            const data = response.data[0];
            this.idSupplierSelected = data.idSupplier;
            console.log(idSupplierSelected)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      listarSupplier(){
        axios.get('api/suppliers')
          .then(response => {
            // Extract the "name" properties from the response and store them in this.suppliers
            this.suppliersss = response.data.map(supplier => supplier.name);
            console.log(this.suppliersss)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      openModalLinkSupplier(){
        this.modalLink = true;
      },
      openModalRegister(){
        this.modalRegister = true
      },
      async registerItem(){
        const nameItemRegisterSelected = this.nameItemRegister;
        const amountRegisterSelected = this.amountRegister;
        const measurementRegisterSelected = this.measurementRegister;

        console.log(nameItemRegisterSelected)
        console.log(amountRegisterSelected)
        console.log(measurementRegisterSelected)

        const postDataRegister = {
          amountAvailable: amountRegisterSelected,
          measurement: measurementRegisterSelected,
          name: nameItemRegisterSelected
        }

        try {
            // Faça a solicitação POST usando o Axios
            const response = await axios.post("/api/stocks/create", postDataRegister);

            // Exiba a resposta no console (pode ser útil para depuração)
            console.log("Resposta da solicitação POST:", response);

            // Limpe os campos após o envio bem-sucedido (opcional)
            this.nameItemRegister =  '';
            this.amountRegister =  '';
            this.measurementRegister =  '';

            alert("Item successfully registered");
          } catch (error) {
            // Em caso de erro, exiba-o no console
            console.error("Erro na solicitação POST:", error);
            alert('An error occurred while registering an item');
          }
          this.fetchItems();
      },
      async linkSupplier(){
        const supplierNameSelected = this.supplierName;
        await this.selectedIdSupplier(supplierNameSelected);

        const idSupplier = this.idSupplierSelected;
        const amountValue =  this.amount;
        const value = this.value;
        const measurementValue = this.measurement;
        const idItem = this.idItemSelected;

        const postData ={
          measurement: measurementValue,
          quantityCan: amountValue,
          stockId: idItem,
          supplierId: idSupplier,
          value: value
        }
        try {
            // Faça a solicitação POST usando o Axios
            const response = await axios.post("supplier-stock-offers/create", postData);

            // Exiba a resposta no console (pode ser útil para depuração)
            console.log("Resposta da solicitação POST:", response);

            // Limpe os campos após o envio bem-sucedido (opcional)
            this.supplierName =  '';

            alert("Item successfully registered");
          } catch (error) {
            // Em caso de erro, exiba-o no console
            console.error("Erro na solicitação POST:", error);
            alert('An error occurred while registering an item');
          }
          this.listarItens();
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

.Deletetable-btn{
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

.Delete-btn{
 background-color: 5px solid rgb(51, 51, 51); 
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

.button-container {
  border: 0px solid red;
  padding-left: 30px;
  text-align: center; /* Isso centralizará os botões */
}

/* Media query para telas menores, como as de dispositivos móveis */
@media (max-width: 768px) {
  .button-container {
    padding-left: 0; /* Ajuste do espaçamento lateral */
  }

  /* Opcional: Faça outros ajustes de estilo conforme necessário para dispositivos móveis */
}

</style>
