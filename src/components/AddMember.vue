<template>
    <Modal :show="show" @close="onClose">
        <div class="modal-layout">
            <div class="modal-body">
                <div class="my-3">
                    <div class="modal-body-section">
                        <div class="modal-close-button" @click="onClose">
                            <img src="../assets/close.svg" alt="" />
                        </div>
                        <div class="center-focus">
                            <img src="../assets/avatar_filter.svg" alt="" style="height:50px; width:50px;"/>
                        </div>
                        <div class="center-focus">
                            <p class="glo-text-title font-weight-medium" style="font-size: 18px;">Rishabh Dubhey S/O Krishvaran</p>
                        </div>
                        <div class="center-focus">
                            <div class="modal-input">
                                <input type="text" class="modal-input px-3 py-3" placeholder="Job Title">
                            </div>
                        </div>
                        <div class="center-focus">
                            <v-row>
                                <v-col cols="2">
                                    <v-select
                                    :items="tesPrefix"
                                    placeholder="+65"
                                    background-color="white"
                                    height="24"
                                    dense
                                    class="phone-custom"
                                    >
                                    </v-select>
                                </v-col>
                                <v-col cols="4">
                                    <div class="modal-input">
                                        <input type="text" class="modal-input px-3 py-3" placeholder="Mobile Number*">
                                    </div>
                                </v-col>
                                <v-col cols="2">
                                    <v-select
                                    :items="tesPrefix"
                                    placeholder="+65"
                                    background-color="white"
                                    height="24"
                                    class="phone-custom"
                                    disabled
                                    dense
                                    >
                                    </v-select>
                                </v-col>
                                <v-col cols="4">
                                    <div class="modal-input">
                                        <input type="text" class="modal-input px-3 py-3" placeholder="Additional Number*" disabled>
                                    </div>
                                </v-col>
                            </v-row>
                            
                        </div>
                        <div class="center-focus">
                            <div class="modal-input">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/Email Icon.svg" alt=""/>
                                </button>
                                <input type="text" class="modal-input" placeholder="Email Address*">
                            </div>
                        </div>
                        <div class="center-focus">
                            <div class="modal-input">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/Email Icon.svg" alt=""/>
                                </button>
                                <input type="text" class="modal-input" placeholder="Additional Email Address*">
                            </div>
                        </div>
                        <div class="center-focus">
                            <div class="modal-input">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/Email Icon.svg" alt=""/>
                                </button>
                                <input type="text" class="modal-input" placeholder="Additional Email Address*">
                            </div>
                        </div>
                        <div class="center-focus">
                            <div class="modal-input">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/LinkedIn.png" alt=""/>
                                </button>
                                <input type="text" class="modal-input" placeholder="Linkedin Link">
                            </div>
                        </div>
                        <div class="center-focus">
                            <div class="modal-input">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/Facebook.png" alt=""/>
                                </button>
                                <input type="text" class="modal-input" placeholder="Facebook Link">
                            </div>
                        </div>
                        <div class="center-focus">
                            <div class="modal-input mr-8">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/Instagram.png" alt=""/>
                                </button>
                                <input type="text" class="modal-input" placeholder="@Instagram Link">
                            </div>
                            <div class="modal-input">
                                <button type="submit" class="searchButton">
                                    <img src="../assets/Telegram.png" alt=""/>
                                </button>
                                <input type="text" class="modal-input" placeholder="@Telegram Link">
                            </div>
                        </div>
                        <div class="center-focus">
                            <p class="subtitle-1 glo-text-title text-center font-weight-medium">Names and profile pictures can only be edited by users themselves, through the mobile app. Company details can be edited through your company’s page on this platform.</p>
                        </div>
                        <div class="bottom-btn">
                            <div class="add-button">
                                <a target="_blank" rel="noopener"><label class="add-button-text">Add Members</label></a>
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
      default: 'create',
    },
    detail: {
      type: Object,
      default: () => {},
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
        test:'',
        telPrefix: ['+65', '+884', '+334', '+876'],
    }
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
  }

}
</script>

<style scoped>
@import '../assets/styles/common.css';
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
    height: 40px;
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
</style>