<template>
    <transition leave-active-class="modal-leave-active-class">
        <div v-show="show" class="show-modal" style="z-index:99">
            <transition enter-active-class="close-enter-active-class"
                    enter-class="close-enter-class"
                    enter-to-class="close-enter-to-class"
                    leave-active-class="close-leave-active-class"
                    leave-class="close-leave-class"
                    leave-to-class="close-leave-to-class">
                <div v-show="show" class="close-button-modal" @click="close"></div>
            </transition>

            <transition enter-active-class="modal-main-enter-active-class"
                    enter-class="modal-main-enter-class"
                    enter-to-class="modal-main-enter-to-class"
                    leave-active-class="modal-main-leave-active-class"
                    leave-class="modal-main-leave-class"
                    leave-to-class="modal-main-leave-to-class">
                <div v-show="show" class="modal-main-show">
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',

    props: {
        show: {
            type: Boolean,
            default: false
        }
    },

    watch: {
        show: {
            immediate: true,
            handler: (show) => {
                if (show) {
                    document.body.style.overflow = 'hidden'
                } else {
                    document.body.style.overflow = null
                }
            }
        }
    },

    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.show-modal{
    top: opx;
    right: 0px;
    bottom: 0px;
    left: 0px;
    position: fixed;
    width: 100vw;
    height: 100vw;
    overflow-y: hidden;
}
.modal-leave-active-class{
    transition-duration: 200ms;
}
.close-enter-active-class{
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 300ms;
}
.close-enter-class{
    opacity: 0;
}
.close-enter-to-class{
    opacity: 1;
}
.close-leave-active-class{
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 200ms;
}
.close-leave-class{
    opacity: 1;
}
.close-leave-to-class{
    opacity: 0;
}
.close-button-modal{
    position:absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: black;
    opacity: 0.5;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

}

.modal-main-enter-active-class{
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 300ms;
}
.modal-main-enter-class{
    opacity: 0;
    transform: translateY(1rem);
}
.modal-main-enter-to-class{
    opacity: 1;
    transform: translateY(0px);
}
.modal-main-leave-active-class{
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 200ms;
}
.modal-main-leave-class{
    opacity: 1;
    transform: translateY(0px);
    transform: scale(1);
}
.modal-main-leave-to-class{
    opacity:0;
    transform: translateY(1rem);
}
.modal-main-show{
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: hidden;
    position: fixed;
    left:0;
    top:80px;
    width:100%;
    height:100%;
    z-index: 50;
}

@media only screen and (min-width: 640px) {
 .modal-main-enter-class{
     transform: translateY(0px);
     transform: scale(.95);
 }
 .modal-main-enter-to-class{
     transform: scale(1);
 }
 .modal-main-leave-to-class{
    transform: translateY(0px);
    transform: scale(.95);
 }
}

</style>