<template>
    <div style="border: 0px solid rgb(255, 0, 200);  height: 100%;" class="fundoSuppliers">
      <div style="border: 0px solid rgb(38, 0, 255)" class="conteudoSuppliers">
        <div style="border: 0px solid rgb(0, 255, 42)">
        
          <!-- CABEÇALHO -->
          <div style="border-bottom: 2px solid #9f9f9f; height: 75px; padding: 10px;">
            <v-row style="border: 0px solid rgb(0, 157, 255) !important;  padding-top: 10px; display: flex;">
              <v-col style="border: 0px solid rgb(0, 255, 153) !important;  padding-left: 25px;" cols="10">
                Suppliers
              </v-col>
              <v-col style="border: 0px solid rgb(0, 255, 153) !important; display: flex; align-items: right; justify-content: flex-end;" cols="2">
                <div style="border: 0px solid rgb(0, 255, 153) !important; ">
                  <!-- <button class="upload-btn"><i class="fa fa-file-pdf-o" aria-hidden="true" style="font-size: 24px;color: #222222;"></i></button> -->
                  <v-dialog v-model="dialog" persistent width="1024">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        
                        v-bind="props"
                        style="background-color: #E90505 !important;"
                      >
                      <i class="fa fa-file-pdf-o" aria-hidden="true" style="font-size: 24px;color: #ffffff;"></i>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">User Profile</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                label="Legal first name*"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                label="Legal middle name"
                                hint="example of helper text only on focus"
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                label="Legal last name*"
                                hint="example of persistent helper text"
                                persistent-hint
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="Email*"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="Password*"
                                type="password"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                            >
                              <v-select
                                :items="['0-17', '18-29', '30-54', '54+']"
                                label="Age*"
                                required
                              ></v-select>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                            >
                              <v-autocomplete
                                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                label="Interests"
                                multiple
                              ></v-autocomplete>
                            </v-col>
                          </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue-darken-1"
                          variant="text"
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn
                          color="blue-darken-1"
                          variant="text"
                          @click="dialog = false"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                </div>
              </v-col>
            </v-row>
          </div> 
    
          <!-- DIV COM FORM E TABELA ESTOQUE -->
          <v-row style="border: 0px solid rgb(0, 255, 42); padding: 10px;">

            <!-- FORM ESTOQUE -->
            <v-col style="border: 0px solid red !important;"  cols="12" lg="8">
                    <v-container >
                      <v-row>
                        <v-col cols="12" lg="7">
                          
                          <v-text-field
                            v-model="companyName"
                            :rules="rules"
                            label="Company"
                            placeholder="Company"
                            variant="outlined"
                            ref="companyName"
                          ></v-text-field>

                        </v-col>   
                        <v-col cols="12" lg="5">
                          
                          <v-text-field
                            v-model="cnpj"
                            :rules="rules"
                            label="CNPJ"
                            placeholder="00.000.000/0000-00"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row >   
                        <v-col cols="6" lg="4">
                          
                          <v-select
                          v-model="segment"
                          :items="items"
                          :rules="[v => !!v || 'Segment is required']"
                          label="Segment"
                          required
                          variant="outlined"
                        ></v-select>
                  
                        </v-col>
                        <v-col cols="6" lg="3">
                          
                          <v-select
                          v-model="payment"
                          :items="items"
                          :rules="[v => !!v || 'Payment is required']"
                          label="Payment"
                          required
                          variant="outlined"
                        ></v-select>
                  
                        </v-col>
                        <v-col cols="6" lg="2">
                
                          <v-text-field
                          v-model="payday"
                    
                          label="Pay Day"
                          placeholder="15"
                          variant="outlined"
                        ></v-text-field>
                        </v-col>
                        <v-col cols="6" lg="3">
                  

          
                      <v-text-field
                      v-model="forecast"
                      :rules="rules"
                      label="Forecast Delivery"
                      variant="outlined"
                    ></v-text-field>
                  
                  
                        </v-col>
                      </v-row>

                      <v-row >
                        <v-col cols="12" lg="12">
                    
                          <v-text-field
                          v-model="address"
                          :rules="rules"
                          label="Address"
                          variant="outlined"
                        ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="6" lg="3">
                          
                          <v-text-field
                          v-model="city"
                          :rules="rules"
                          label="City"
                          variant="outlined"
                        ></v-text-field>
                        </v-col>
                        <v-col cols="6" lg="3">
                          
                          <v-text-field
                          v-model="state"
                          :rules="rules"
                          label="State"
                          variant="outlined"
                        ></v-text-field>
                        </v-col>
                        <v-col cols="6" lg="3">
                          
                          <v-text-field
                          v-model="number1"
                          :rules="rules"
                          label="Number 1"
                          variant="outlined"
                        ></v-text-field>
                        </v-col>
                        <v-col cols="6" lg="3">
        
                          <v-select
                          v-model="status"
                          :items="itemStatus"
                          :rules="[v => !!v || 'Status is required']"
                          label="Status"
                          variant="outlined"
                        ></v-select>
                      
                        
                          <!-- <v-text-field
                          v-model="number2"
                          :rules="rules"
                          label="Number 2"
                          placeholder="(99)99999-999"
                          variant="outlined"
                        ></v-text-field> -->
                        </v-col>            
                      </v-row>
                    </v-container>

                    <div style="border: 0px solid red; padding-left: 35px;"><button class="Register-btn" @click="Registerbtn">Register</button> <button class="Delete-btn">Delete</button></div>

            </v-col>  
            
            <!-- TABELA ESTOQUE -->
            <v-col style="border: 0px solid rgb(255, 217, 0) !important;" cols="12" lg="4">
                  <!-- Feedstock -->
                  <v-table
                    fixed-header
                    height="300px"
                    style="border: 1px solid #a5a5a5; border-radius: 10px; padding: 3px;"
                  >
                    <thead>
                      <!-- <tr>
                        <th class="text-left">
                          Name
                        </th>
                        <th class="text-left">
                          Price
                        </th>
                        <th class="text-left">
                          Type
                        </th>
                      </tr> -->
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in desserts"
                        :key="item.name"
                      >
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.type }}</td>
                      </tr>
                    </tbody>
                  </v-table>
            </v-col>

          </v-row>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
      name: 'Suppliers',
      data() {
      return {
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
        dialog: false,
        desserts: [
          {
            name: 'Sushi',
            price: 'R$25,00',
            type: 'KG',
          },
          {
            name: 'Nigiri',
            price: 'R$45,00',
            type: 'KG',
          },
          {
            name: 'Temaki',
            price: 'R$5,00',
            type: 'KG',
          },
          {
            name: 'Gunkan',
            price: 'R$2,00',
            type: 'KG',
          },
          {
            name: 'Hossomaki Tekkamaki',
            price: 'R$85,00',
            type: 'KG',
          },
          {
            name: 'Hot roll',
            price: 'R$95,00',
            type: 'KG',
          },
          {
            name: 'Uramaki',
            price: 'R$12,00',
            type: 'KG',
          },
          {
            name: 'Tempurá',
            price: 'R$27,00',
            type: 'KG',
          },
          {
            name: 'Harumaki',
            price: 'R$65,00',
            type: 'KG',
          },
          {
            name: 'Sashimi',
            price: 'R$5,00',
            type: 'KG',
          },
        ],
        firstName: '',
        rules: [
                value => {
                  if (value) return true
                  return 'empty field'
                },
              ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
        ],
        itemStatus: [
          'Active',
          'Disabled',
        ],
        };
      },
      methods: {
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
            const response = await axios.post("/api/suppliers", postData);

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
          } catch (error) {
            // Em caso de erro, exiba-o no console
            console.error("Erro na solicitação POST:", error);
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
</style>
  