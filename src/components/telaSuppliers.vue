<template>
    <div class="fundoSuppliers">
      <div class="conteudoSuppliers">
        <!-- <div style="border: 2px solid red"> -->
        <div >
           <!-- border-bottom: 1px solid #ababab; -->
          <div style="border-bottom: 1px solid #ababab; height: 10vh; margin:-1.5px">
            <!-- <div  style="border: 2px solid rgb(6, 235, 197);" class="negrito-font mr-2">Suppliers</div>
            <div style="border: 2px solid rgb(6, 235, 40);"></div> -->
            
            <v-row>
              <v-col style="border: 0px solid rgb(6, 235, 197);" class="negrito-font mr-2" cols="9">
                <div  style=" padding-top:1.5%; padding-left:3%;">
                  Suppliers
                </div>
                
              </v-col>   

              <v-col style="border: 0px solid rgb(6, 235, 197);" cols="2">
                <div style="padding-left:115%; padding-top:1.5%;">
                  <button class="upload-btn" type="submit"><i class="fa fa-file-text" aria-hidden="true" style="font-size: 24px; color: #222222;"></i></button>
                </div>
                
              </v-col>
            </v-row>

          </div>


          <v-container >
            <v-row no-gutters>
              <!-- <v-col style="background-color: #ffffff ; border: 2px solid red !important;" cols="8"> -->
              
              <v-col cols="8">
                <v-container >
                  <v-row>
                    <v-col cols="7">
                      
                      <v-text-field
                      v-model="companyName"
                      :rules="rules"
                      label="Company"
                      placeholder="Company"
                      variant="outlined"
                      
                    ></v-text-field>


                    </v-col>   
                    <v-col cols="5">
                      
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
                    <v-col cols="4">
                      
                      <v-select
                      v-model="segment"
                      :items="items"
                      :rules="[v => !!v || 'Segment is required']"
                      label="Segment"
                      required
                      variant="outlined"
                    ></v-select>
              
                    </v-col>
                    <v-col cols="3">
                      
                      <v-select
                      v-model="payment"
                      :items="items"
                      :rules="[v => !!v || 'Payment is required']"
                      label="Payment"
                      required
                      variant="outlined"
                    ></v-select>
              
                    </v-col>
                    <v-col cols="2">
             
                      <v-text-field
                      v-model="companyName"
                
                      label="Pay Day"
                      placeholder="15"
                      variant="outlined"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="3">
               

                    <!-- <v-select
                    v-model="checkbox"
                    :items="itemStatus"
                    :rules="[v => !!v || 'Status is required']"
                    label="Status"
                    variant="outlined"
                  ></v-select>
                   -->

                   <v-text-field
                   v-model="forecast"
                   :rules="rules"
                   label="Forecast Delivery"
                   variant="outlined"
                 ></v-text-field>
              
              
                    </v-col>
                  </v-row>

                  <v-row >
                    <v-col cols="12">
                
                      <v-text-field
                      v-model="address"
                      :rules="rules"
                      label="Address"
                      variant="outlined"
                    ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="3">
                      
                      <v-text-field
                      v-model="city"
                      :rules="rules"
                      label="City"
                      variant="outlined"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      
                      <v-text-field
                      v-model="state"
                      :rules="rules"
                      label="State"
                      variant="outlined"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      
                      <v-text-field
                      v-model="number1"
                      :rules="rules"
                      label="Number 1"
                      variant="outlined"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="3">
    
                      <v-select
                      v-model="checkbox"
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
                <div style="border: 0px solid red; padding-left: 35px;"><button class="Register-btn" type="submit">Register</button> <button class="Delete-btn" type="submit">Delete</button></div>

              </v-col>       
              <v-col style="background-color: #ffffff ;" cols="4">
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

          </v-container>

            <!-- <v-container class="bg-surface-variant">
              <v-form @submit.prevent>
                <v-row no-gutters>
                  <v-col cols="7">
                    <v-text-field
                    v-model="companyName"
                    :rules="rules"
                    label="Company"
                  ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-2 ma-2">
                      .v-col-auto
                    </v-sheet>
                  </v-col>
                </v-row>
            
                <v-row no-gutters>
                  <v-col>
                    <v-sheet class="pa-2 ma-2">
                      .v-col-auto
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-2 ma-2">
                      .v-col-auto
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-2 ma-2">
                      .v-col-auto
                    </v-sheet>
                  </v-col>
                </v-row>
            
                <v-row no-gutters>
                  <v-col cols="2">
                    <v-sheet class="pa-2 ma-2">
                      .v-col-2
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-2 ma-2">
                      .v-col-auto
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
        -->
          <!-- <v-sheet width="300" class="">
            <v-form @submit.prevent>


              <v-text-field
                v-model="firstName"
                :rules="rules"
                label="First name"
              ></v-text-field>

              <v-text-field
              v-model="firstName"
              :rules="rules"
              label="First name"
            ></v-text-field>



             <v-btn type="submit" block class="mt-2">Submit</v-btn> 
            </v-form>
          </v-sheet> -->

       
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
    border: 2px solid #ffffff !important;
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
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px; 

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
  