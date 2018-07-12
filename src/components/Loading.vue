<template>
  <div v-if="isVisible" class="u-loading"></div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['isVisible']
}
</script>

<style scoped>
/* Absolute Center CSS Spinner */
.u-loading {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgb(0, 0, 0, 0.2);
}


.u-loading:not(:required)::after {
    animation: 1500ms linear 0s normal none infinite running spinner;
    border-radius: 0.5em;
    box-shadow: 1.5em 0 0 0 rgba(0, 0, 0, 0.75), 1.1em 1.1em 0 0 rgba(0, 0, 0, 0.75), 0 1.5em 0 0 rgba(0, 0, 0, 0.75), -1.1em 1.1em 0 0 rgba(0, 0, 0, 0.75), -1.5em 0 0 0 rgba(0, 0, 0, 0.75), -1.1em -1.1em 0 0 rgba(0, 0, 0, 0.75), 0 -1.5em 0 0 rgba(0, 0, 0, 0.75), 1.1em -1.1em 0 0 rgba(0, 0, 0, 0.75);
    content: "";
    display: inherit;
    font-size: 10px;
    height: 1em;
    left: 50%;
    margin: 0 auto;
    overflow: visible;
    position: absolute;
    top: 50%;
    width: 1em;
    z-index: 9999;
}

/* Animation */

@-webkit-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-moz-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-o-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
