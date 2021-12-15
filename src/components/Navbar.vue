<template>
    <nav>
        <v-navigation-drawer  v-model="drawer" app class="nav-bg py-0">
            <v-container class="my-12">
                <v-row align="center">
                    <v-col md="3" class="mb-4">
                        <v-img 
                        src="../assets/images/starbucks.svg"
                        height="30"
                        width="30"
                        class="ml-2"
                        >
                        </v-img>
                    </v-col>
                    <v-col md="6">
                        <p class="black--text logo-title">Singapore Manufacturing Federation</p>
                    </v-col>
                    <v-col md="3" class="mb-4 pl-4 logo-arrow">
                        <span>></span>
                    </v-col>
                </v-row>
            </v-container>
            
            <v-list dense nav>
                <v-list-item class="sub-menu-bg nav-item" router to="/" style="border-radius: 14px;">
                    <v-list-item-action>
                        <v-icon size="30">fas fa-id-card</v-icon>
                    </v-list-item-action>
                    <v-list-item-content >
                        <v-list-item-title class="subtitle-1 font-weight-bold glo-text-title" >Home Page</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item class="sub-menu-bg nav-item" router to="/teammates" style="border-radius: 14px;">
                    <v-list-item-action>
                        <v-img 
                        src="../assets/images/your_team.svg"
                        height="30"
                        width="30"
                        class="ml-2"
                        >
                        </v-img>
                    </v-list-item-action>
                    <v-list-item-content >
                        <v-list-item-title class="subtitle-1 font-weight-bold glo-text-title" >Your Team</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            
            <div class="nav-bottom-panel">
                <div class="row">
                    <v-img 
                        src="../assets/images/03.png"
                        height="30"
                        width="30"
                        class="ml-2"
                        >
                    </v-img>
                    <p class="glo-text-title body2 ml-2 pt-1 font-weight-bold">Joshua Pang</p>
                </div>
            </div>
        </v-navigation-drawer>
    </nav>
</template>
<script>
//import Popup from './Popup.vue'
export default {
   data: () => ({
      drawer: true,
     
    }),
    components: {
    //Popup
  },
    mounted () {

    },

   
}
</script>
<style scoped>
.logo-title{
    letter-spacing: .0.5rem;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.2rem;
}
.logo-arrow{
    font-weight: bold;
    font-size: 22px;
    color:#2C305D;
    cursor: pointer;
}
.nav-bottom-panel{
    bottom:0;
    position: absolute;
    margin: 3rem;
}
.v-progress-circular {
margin: 1rem;
}
.soft {
    margin-top: auto;
    margin-bottom: 5px;
}

.theme--light.v-list-item--active:hover::before, .theme--light.v-list-item--active::before {
    border-radius: 14px!important;
}

</style>
