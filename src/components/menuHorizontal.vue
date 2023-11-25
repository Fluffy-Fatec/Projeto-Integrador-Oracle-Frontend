<template>
  <!-- <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Essentials Preset
    </v-app-bar-title>
  </v-app-bar> -->
  
  <div class="menuHorizontal">
    <v-app-bar color="#393E3B" top dense fixed dark >
          <div class="d-flex align-center">
            <v-img
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
          
          <v-btn  @click="openModalNotification">
            <i class="fa fa-bell" aria-hidden="true" style="color: #ffffff; font-size: 20px; "></i>          
          </v-btn>
      
          <v-btn target="_blank" text>
            <i class="fa fa-user-circle-o" aria-hidden="true" style="color: #ffffff; font-size: 20px; "></i>
          
          </v-btn>
    </v-app-bar>
  </div>

  <v-dialog v-model="modalNotify" persistent width="512">
    <v-card>

      <v-card-title>
        <span class="text-h5">Notifications</span>
      </v-card-title>

      <v-card-text >
        <v-container>
          <v-row>
            <v-list>
              <v-list-item-group v-if="notificationsss.length > 0">
                <v-list-item
                  v-for="notification in notificationsss"
                  :key="notification.id_notification"
                  @click="listarNotifications"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ notification.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
              <v-list-item v-else>
                <v-list-item-content>Nenhuma notificação disponível</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-row>
        </v-container>
      </v-card-text>

      <!-- FOOTER -->
      <v-card-actions class="text-center">
        <v-spacer></v-spacer>
        <button class="Delete-btn" @click="modalNotify = false">Close</button>
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
      elected: '',
      data: [],
      notificationsss: [
        { id_notification: 1, name: 'Notificação A' },
        { id_notification: 2, name: 'Notificação B' },
        { id_notification: 3, name: 'Notificação C' },
      ],
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

    methods: {
      listarNotifications(){
        axios.get('api/notificacao')
          .then(response => {
            // Extract the "name" properties from the response and store them in this.suppliers
            this.notificationsss = response.data.map(notification => notification.name);
            console.log(this.notificationsss)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      openModalNotification(){
        this.modalNotify = true;
      },
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
</style>