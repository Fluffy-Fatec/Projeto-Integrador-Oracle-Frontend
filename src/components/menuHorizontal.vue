<template>
  
  <div class="menuHorizontal">
    <v-app-bar color="#393E3B" top dense fixed dark >
          <div class="d-flex align-center">
        
            <v-img
              @click="handleItemClick()"
              alt="Oracle Logo"
              class="oracle-logo mr-5 ml-5"
              src="@/assets/oraclelogo.png"
              transition="scale-transition"
              width="35"
            />
         
           <span class="negrito-font mr-2">OracleDine</span>
            <span class="normal-font mr-2">|</span>
            <span class="normal-font mr-2">RestaurantName</span>
          </div>
          <v-spacer></v-spacer>
          
          <v-btn  @click="openModalNotification" :color="buttonColor">
            <i :class="{'fa fa-bell red-icon': notificationsss.some(notification => notification.nsStatus === 'ABERTO'), 'fa fa-bell': !notificationsss.some(notification => notification.nsStatus === 'ABERTO')}" aria-hidden="true" style="font-size: 20px;"></i>          </v-btn>
      
          <v-btn target="_blank" text>
            <i class="fa fa-user-circle-o" aria-hidden="true" style="color: #ffffff; font-size: 20px; "></i>
          
          </v-btn>
    </v-app-bar>
  </div>


  <v-dialog
     v-model="modalNotify"
      persistent
      width="1024"
    >

      <v-card>
        <v-card-title>
          <span class="text-h5">Notifications</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row v-if="notificationsss.length > 0">
              <v-container fluid>
                <v-table
                  fixed-header
                  height="750px"
                  style="border: 1px solid #a5a5a5; border-radius: 10px; padding: 0px;"
                >
                    <thead>
                      <tr>
                        <th >
                          Item                           
                        </th>
                        <th >
                          Low Stock Since       
                        </th>
                        <th >
                          Quantity
                        </th>
                        <th >
                          Visualization
                        </th>
                      </tr> 
                    </thead>
                    <tbody>
                      <tr
                      v-for="notification in notificationsss"
                        :key="notification.nsId"
                      >
                      <td>{{ capitalizeString(notification.stocks.name) }}</td>
                        <td>{{ formatDate(notification.nsDatetime) }}</td>
                        <td>{{ notification.stocks.amountAvailable }} {{ notification.stocks.measurement }}</td>
                        <td style="text-align: center;">
                          <span v-if="notification.nsStatus === 'FECHADO'">
                            <i class="fa fa-eye" aria-hidden="true" style="color: #000000; font-size: 20px;"></i>
                          </span>
                          <span v-if="notification.nsStatus === 'ABERTO'">
                            <i class="fa fa-eye-slash" aria-hidden="true" style="color: #000000; font-size: 20px;"></i>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-container>
            </v-row>
            <v-row v-else>
              <v-list>
                <v-list-item>
                  <v-list-item-content>No notifications available</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-row>



          </v-container>
        </v-card-text>


        <v-card-actions>
          <v-spacer></v-spacer>
          <button class="Delete-btn" @click="closeModalNotification">Close</button>
          <v-spacer></v-spacer>
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
    
      idNotifications: [],
      idsNotifications: [],
      elected: '',
      data: [],
      notificationsss: [],
      modalNotify: false,
      isFieldDisabled: true, // Defina o campo como desabilitado inicialmente
      modalOpen: false,
      isMobile: window.innerWidth <= 700,
      dialog: false,
      select: null,

      };
    },
    created() {
        this.listarNotifications();
    },
    computed: {
      buttonColor() {
        return this.notificationsss.some(notification => notification.nsStatus === 'ABERTO') ? 'red' : '';
      },
    },
    methods: {

    refresh() {
      window.location.reload();
    },

    handleItemClick() {
      this.$router.push('/dashboard');
      setTimeout(() => {this.refresh(); }, 250);
    },
      openModal() {
      this.modalNotify = true;
    },
    capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },
    closeModalNotification() {
      this.modalNotify = false;
    },
    
      formatDate(dateString) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return new Date(dateString).toLocaleDateString('pt-BR', options);
      },
      listarNotifications(){
        axios.get('/notification')
          .then(response => {
            // Extract the "name" properties from the response and store them in this.suppliers
            this.notificationsss = response.data;

            this.idNotifications = this.notificationsss.map(notification => notification.nsId);

          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      atualizarNotification(idsNotifications){
        for (const idNotification of idsNotifications) {
          console.log(idNotification)
          try{        
            console.log('antes de atualizar');
            const response = axios.put(`/notification/${idNotification}/updateStatus`, { nsStatus: 'FECHADO' });
            console.log('Item atualizado com sucesso', response);
          }
          catch(error){
            console.log('Erro ao excluir o item', error);
          };  
        }
      },
      openModalNotification(){
        this.modalNotify = true;
      },
      closeModalNotification(){
        this.modalNotify = false;

        const idsNotify = this.idNotifications;
        console.log(idsNotify)

        this.atualizarNotification(idsNotify);
        this.listarNotifications();
      },
    },
    mounted() {
    this.$nextTick(() => {
      if (this.modalNotify) {
        // Focar na tabela quando a modal é aberta
        this.$refs.notificationTable.$el.focus();
      }
    });
  },

  }
</script>


<style scoped>
/* ############################################################ */
/* CSS - MENU HORIZONTAL */
.menuHorizontal{
  border: 0px solid red; 
  width: 0%; 
  height: 0%;
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
.normal-font {
  font-size: 14px;
}
.custom-top-bar {
  height: 30px; 
}
.negrito-font {
  font-size: 14px;
  font-weight: bold;
}

.border-items {
    border: 2px solid #ffffff; /* Light gray border color */
    border-radius: 5px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1); /* Black shadow */
  }
  .red-icon {
    color: red;
  }
</style>