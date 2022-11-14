<template>
    <Popper class="my-auto mx-3">
        <BIconPersonCircle class="profile-image" style="font-size: 4.2rem; color: white;" />
        <template #content>
            <div class="my-popover shadow card-glass-white-bg">
                <h5>Profile</h5>
                <div class="justify-content-around flex-column my-3 content-popover">
                    <div>
                        Username: {{ $store.state.loggedUser.username}}
                    </div>
                    <div>
                        email: {{ $store.state.loggedUser.email}}
                    </div>
                    <div>
                        Role: {{ $store.state.loggedUser.role}}
                    </div>
                    <div>
                        Team : {{ $store.state.loggedUser.team }}
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