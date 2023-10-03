<template>
    <div class="fundoSuppliers">
      <div class="conteudoSuppliers">
        <div style="border: 2px solid red">

          <v-container >
            <v-row no-gutters>
              <v-col style="background-color: #ffffff ; border: 2px solid red !important;" cols="8">
                <v-container >
                  <v-row>
                    <v-col cols="7">
                      
                      <v-text-field
                      v-model="companyName"
                      :rules="rules"
                      label="Company"
                      placeholder="Company"
                      style="background-color: #ffffff; "
                    ></v-text-field>
                    </v-col>
                    
                    <v-col cols="5">
                      
                      <v-text-field
                      v-model="cnpj"
                      :rules="rules"
                      label="CNPJ"
                      placeholder="00.000.000/0000-00"
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
                    ></v-select>
              
                    </v-col>
                    <v-col cols="3">
                      
                      <v-select
                      v-model="payment"
                      :items="items"
                      :rules="[v => !!v || 'Payment is required']"
                      label="Payment"
                      required
                    ></v-select>
              
                    </v-col>

                    <v-col cols="2">
             
                      <v-text-field
                      v-model="companyName"
                
                      label="Pay Day"
                      placeholder="15"
                    ></v-text-field>
                    </v-col>


                    <v-col cols="3">
                      Status
                      <v-checkbox
                      v-model="checkbox"
                      :rules="[v => !!v || 'AAAAAAAAAAAAAAA']"
                      label="Active"
                      required
                    ></v-checkbox>

                  
              
              
                    </v-col>



                  </v-row>

                  <v-row no-gutters>
                    <v-col cols="12">
                      
                      <v-text-field
                      v-model="address"
                      :rules="rules"
                      label="Address"
                    ></v-text-field>
                    </v-col>
                  </v-row>


                  <v-row>
                    <v-col cols="3">
                      
                      <v-text-field
                      v-model="city"
                      :rules="rules"
                      label="City"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      
                      <v-text-field
                      v-model="state"
                      :rules="rules"
                      label="State"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      
                      <v-text-field
                      v-model="number1"
                      :rules="rules"
                      label="Number 1"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="3">
    
                      <v-text-field
                      v-model="number2"
                      :rules="rules"
                      label="Number 2"
                      placeholder="(99)99999-999"
                    ></v-text-field>
                    </v-col>

                    
                  </v-row>
                </v-container>
                <div ><button class="Register-btn" type="submit">Register</button> <button class="Delete-btn" type="submit">Delete</button></div>

              </v-col>
             
              <v-col style="background-color: #ffffff ;" cols="4">
                <v-table
                  fixed-header
                  height="300px"
                >
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Calories
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in desserts"
                      :key="item.name"
                    >
                      <td>{{ item.name }}</td>
                      <td>{{ item.calories }}</td>
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
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
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
  background-color: #717171; 
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
</style>
  