<template>
    <Modal :show="show" @close="onClose">
        <div class="edit_confirm_modal">
            <div class="modal-body">
                <div class="my-3">
                    <div class="modal-body-section">
                        <div class="center-focus">
                            <p class=".glo-text-title text-center confirm_text">You’ve successfully edited the card details for your team member. The changes will be reflected on the card for all future and existing recipients.</p>
                        </div>
                        <div class="center-focus bottom-btn">
                            <div class="add-button" @click="onClose()">
                                <a target="_blank" rel="noopener"><label class="add-button-text" style="padding-top: 4px; font-size:15px;">Done</label></a>
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
  name: 'EditConfirm',

  components: {
    Modal
  },

  directives: {
    ClickOutside,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
        test:''
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
@import '../assets/styles/responsive.css';

.center-focus{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.confirm_text{
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #2C305D;

}

.bottom-btn{

}

</style>