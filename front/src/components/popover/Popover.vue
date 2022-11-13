<template>
    <Popper class="my-auto">
        <img class="profile-image " src="https://imgs.search.brave.com/NjlS_k1s47CIdaVpSbW9I2JiYkUp4GdXWru2Gh-SC4c/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24tYncv/YW5vbnltb3VzLWF2/YXRhci1pY29uLTE5/LnBuZw">
        <template #content>
            <div class="my-popover shadow">
                <h5>Profile</h5>
                <div class="justify-content-around flex-column my-3 content-popover">
                    <div>
                        Username: Thomas
                    </div>
                    <div>
                        email: Thomas.epitech@gmai.com
                    </div>
                    <div>
                        Role: Employee
                    </div>
                    <div>
                        Team : Alpha
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