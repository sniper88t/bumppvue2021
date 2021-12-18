<template>
    <Modal :show="show" @close="onClose">
        <div class="modal-layout">
            <div class="modal-body">
                <div class="my-3">
                    <div class="modal-body-section">
                        <div class="modal-close-button" @click="onClose">
                            <img src="../assets/images/close.svg" alt="" />
                        </div>
                        <div class="center-focus edit_logo">
                            <img :src="user_avatar" alt="" style="height:50px; width:50px;"/>
                        </div>
                        <div class="center-focus">
                            <p class="glo-text-title font-weight-bold edit_title" style="font-size: 18px;">{{user_first_name}}:{{user_last_name}}</p>
                        </div>
                        <div class="center-focus">
                            <div class="modal-input">
                                <input v-model="job_title" type="text" class="modal-input px-3 py-3" placeholder="Job Title">
                            </div>
                        </div>
                        <div class="center-focus">
                            <v-row>
                                <v-col cols="3" sm="2">
                                    <select name="platform_access" class="form-control phone_prefix" placeholder="+65">
                                        <option value="admin" >{{phone_code}}</option>
                                    </select>
                                </v-col>
                                <v-col cols="9" sm="4">
                                    <div class="modal-input">
                                        <input v-model="phone_num" type="text" class="modal-input px-3 py-3" placeholder="Mobile Number*">
                                    </div>
                                </v-col>
                                <v-col cols="3" sm="2">
                                    <select name="platform_access" class="form-control phone_prefix" style="opacity:0.6;">
                                        <option value="admin">{{add_phone_code}}</option>
                                    </select>
                                </v-col>
                                <v-col cols="9" sm="4">
                                    <div class="modal-input" style="opacity:0.6;">
                                        <input v-model="add_phone_num" type="text" class="modal-input px-3 py-3" placeholder="Additional Number*" >
                                    </div>
                                </v-col>
                            </v-row>
                            
                        </div>
                        <div class="center-focus">
                            <div class="modal-input">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/images/Email Icon.svg" alt=""/>
                                </button>
                                <input v-model="email" type="text" class="modal-input" placeholder="Email Address*">
                            </div>
                        </div>
                        <div class="center-focus">
                            <div class="modal-input" style="opacity:0.6;">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/images/Email Icon.svg" alt=""/>
                                </button>
                                <input v-model="add_email" type="text" class="modal-input" placeholder="Additional Email Address*">
                            </div>
                        </div>
                        <div class="center-focus">
                            <div class="modal-input">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/images/LinkedIn.png" alt=""/>
                                </button>
                                <input v-model="social_linkedin" type="text" class="modal-input" placeholder="Linkedin Link">
                            </div>
                        </div>
                        <div class="center-focus">
                            <div class="modal-input">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/images/Facebook.png" alt=""/>
                                </button>
                                <input v-model="social_facebook" type="text" class="modal-input" placeholder="Facebook Link">
                            </div>
                        </div>
                        <div class="center-focus">
                            <div class="modal-input mr-8">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/images/Instagram.png" alt=""/>
                                </button>
                                <input v-model="social_instagram" type="text" class="modal-input" placeholder="@Instagram Link">
                            </div>
                            <div class="modal-input">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/images/Telegram.png" alt=""/>
                                </button>
                                <input v-model="social_telegram" type="text" class="modal-input" placeholder="@Telegram Link">
                            </div>
                        </div>
                        <div class="center-focus">
                            <p class="edit_desc">Names and profile pictures can only be edited by users themselves, through the mobile app. Company details can be edited through your company’s page on this platform.</p>
                        </div>
                        <div class="bottom-btn">
                            <div class="add-button" @click="saveData()">
                                <a target="_blank" rel="noopener"><label class="add-button-text" style="padding-top: 4px;">Save Changes</label></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </Modal>
</template>


<script>
import ClickOutside from 'vue-click-outside';
import Modal from './Modal';

export default {
  name: 'AddMember',

  components: {
    Modal
  },

  directives: {
    ClickOutside,
  },
  props: {
    status: {
      type: String,
      default: '',
    },
    detail: {
      type: Object,
      default: () => [],
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
        user_avatar:'',
        user_first_name:'',
        user_last_name:'',
        job_title:'',
        phone_code:'+65',
        phone_num:'',
        add_phone_code:'+65',
        add_phone_num:'',
        email:'',
        add_email:'',
        social_linkedin:'',
        social_facebook:'',
        social_instagram:'',
        social_telegram:'',
    }
  },
    watch: {
        show(val) {
            if (val) {
                this.initFunc();
            }
        },
    },
  moutned(){
  },
  methods: {
    initFunc(){
        this.user_avatar = this.detail.user?.avatar;
        this.user_first_name = this.detail.user?.first_name;
        this.user_last_name =  this.detail.user?.last_name;
        this.job_title= this.detail.overview?.job_title;
        this.phone_code = this.detail.overview?.phone_number?.code;
        this.phone_num = this.detail.overview?.phone_number.number;
        this.add_phone_code =  this.detail.overview?.add_phone_number.code;
        this.add_phone_num = this.detail.overview?.add_phone_number.number;
        this.email = this.detail.overview?.email;
        this.add_email =  this.detail.overview?.add_email;
        this.social_linkedin = this.detail.overview.social_links[1]?.url;
        this.social_facebook = this.detail.overview.social_links[0]?.url;
        this.social_instagram = this.detail.overview.social_links[2]?.url;
        this.social_telegram = this.detail.overview.social_links[3]?.url;

    },
    onClose() {
      this.$emit('close');
    },
    saveData(){
        if(this.detail.id){
            const baseURI = 'https://bumpp-assessment.herokuapp.com/members/' + this.detail.id;
            const body = {
                "overview": {
                    "job_title": this.job_title,
                    "phone_code": this.phone_code,
                }
            }
            this.$http.put(baseURI, body)
            .then((result) => {
                console.log(result.data.success);
                if(result.data.success == true){
                     this.$emit('saveStatus')
                    this.onClose();
                }
                else{
                    console.log("Saving data failed!");
                }
            })
        }
        

       
    }
  }

}
</script>

<style scoped>
@import '../assets/styles/common.css';
@import '../assets/styles/responsive.css';

Input:focus {
  outline: none;
}

.center-focus{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
}

.modal-input{
  background-color: white;
  border-radius: 10px;
  display: flex;
  width: 100%;
}

.modal-input-body {
    border-right: none;
    padding: 5px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;
    font-size: 20px;
    width:100%;
}

.modal-input img{
    height: 20px;
    width: 20px;
    margin-top: 6px;
}

.bottom-btn {
    display: flex;
    justify-content: end;
}

label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

select {
    margin-bottom: 10px;
    margin-top: 10px;
}

.phone-custom{
  border-radius: 10px;
}

@media only screen and (max-width: 640px) {
    input, select{
        height: 34px!important;
        font-size: 12px;
    }
    ::placeholder{
        overflow: visible;
        font-size: 12px;
    }
}
</style>