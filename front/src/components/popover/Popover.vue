<template>
    <Popper class="my-auto mx-3">
        <img class="profile-image " src="https://imgs.search.brave.com/NjlS_k1s47CIdaVpSbW9I2JiYkUp4GdXWru2Gh-SC4c/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24tYncv/YW5vbnltb3VzLWF2/YXRhci1pY29uLTE5/LnBuZw">
        <template #content>
            <div class="my-popover shadow card-glass-white-bg">
                <h5>Profile</h5>
                <div class="justify-content-around flex-column my-3 content-popover">
                    <div>
                        Username: {{ this.form.username}}
                    </div>
                    <div>
                        email: {{ this.form.email}}
                    </div>
                    <div>
                        Role: {{ this.form.role}}
                    </div>
                    <div>
                        Team : {{ this.form.team }}
                    </div>
                </div>
            </div>
        </template>
    </Popper>
</template>
  
<script>
import { defineComponent } from "vue";
import Popper from "vue3-popper";

export default defineComponent({
    components: {
        Popper,
    },
    data() {
    return {
      form: {
        username: "Thomas",
        email: "thomas@gmail.com",
        role: "admin",
        team: "alpha",
      },
    };
  },
});
</script>


<style>
.my-popover {
    background-color: white;
    border-radius: 8px;
    padding: 5px;
}
.profile-image{
    max-height: 70px; 
    max-width: 70px;
}

.content-popover{
    text-align:left;
}

</style>