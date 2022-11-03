<template>
  {{ this.toHHMMSS(time) }}
</template>

<script>
import { mapState } from "vuex";

  export default {
      name: 'TimerCount',
      props: ['timerCount'],

      data() {
          return {
              time: this.timerCount
          }
      },

      watch: {

          timerEnabled(value) {
              if (value) {
                  setTimeout(() => {
                      this.time--;
                  }, 1000);
              }
          },

          time: {
              handler(value) {

                  if (value > 0 && this.timerEnabled) {
                      setTimeout(() => {
                        this.$store.dispatch("updateTimer", this.time);

                          this.time--;
                      }, 1000);
                  }

              },
              immediate: true // This ensures the watcher is triggered upon creation
          }

      },
      methods: {
    toHHMMSS(timer) {
    var sec_num = parseInt(timer, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

      },
      async mounted() {
  },
  computed: {
    ...mapState(["timerCount"]),
    ...mapState(["timerEnabled"]),
  },

  }

</script>