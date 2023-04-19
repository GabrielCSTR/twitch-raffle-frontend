<template>
    <div v-if="isLoading" class="loader-container">
        <div class="row col-md-12">
            <div :style="{
                width: small ? '30px' : '100px',
                height: small ? '30px' : '100px',
                margin: small ? '1em' : '3em',
            }" class="cssload-loader"></div>
            <p :style="{ fontSize: small ? '14px' : '22px' }" class="text-center">
                {{ loadingText || 'Data is loading...' }}
            </p>
        </div>
    </div>
</template>
  
<script lang="ts">
export default {
    props: {
        isLoading: {
            type: Boolean,
            required: true,
        },
        loadingText: {
            type: String
        },
        small: {
            type: Boolean
        }
    }
}
</script>
  
<style>
.loader-container {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.cssload-loader {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 3em;
    display: inline-block;
    position: relative;
    vertical-align: middle;
}

.cssload-loader,
.cssload-loader:before,
.cssload-loader:after {
    animation: 3.15s infinite ease-in-out;
}

.cssload-loader:before,
.cssload-loader:after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
}

.cssload-loader:before,
.cssload-loader:after {
    content: "";
}

.cssload-loader {
    background-color: rgba(246, 246, 246, 0);
    animation: cssload-flower-fan 1s infinite linear;
}

.cssload-loader:before {
    content: "";
    width: 80%;
    height: 80%;
    background-color: rgba(246, 246, 246, 0);
    top: 10%;
    left: 10%;
    box-shadow: 5px -3px 0 rgba(255, 100, 100, 0.7),
        5px 5px 0 rgba(100, 255, 100, 0.7),
        -3px 5px 0 rgba(100, 100, 255, 0.7),
        -5px -5px 0 rgba(240, 240, 120, 0.7);
    -o-box-shadow: 5px -3px 0 rgba(255, 100, 100, 0.7),
        5px 5px 0 rgba(100, 255, 100, 0.7),
        -3px 5px 0 rgba(100, 100, 255, 0.7),
        -5px -5px 0 rgba(240, 240, 120, 0.7);
    -ms-box-shadow: 5px -3px 0 rgba(255, 100, 100, 0.7),
        5px 5px 0 rgba(100, 255, 100, 0.7),
        -3px 5px 0 rgba(100, 100, 255, 0.7),
        -5px -5px 0 rgba(240, 240, 120, 0.7);
    -webkit-box-shadow: 5px -3px 0 rgba(255, 100, 100, 0.7),
        5px 5px 0 rgba(100, 255, 100, 0.7),
        -3px 5px 0 rgba(100, 100, 255, 0.7),
        -5px -5px 0 rgba(240, 240, 120, 0.7);
    -moz-box-shadow: 5px -3px 0 rgba(255, 100, 100, 0.7),
        5px 5px 0 rgba(100, 255, 100, 0.7),
        -3px 5px 0 rgba(100, 100, 255, 0.7),
        -5px -5px 0 rgba(240, 240, 120, 0.7);
}

.cssload-loader:after {
    content: "";
    border: 3px solid white;
    z-index: 2;
    top: -3px;
    left: -3px;
}

@keyframes cssload-flower-fan {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@-o-keyframes cssload-flower-fan {
    0% {
        -o-transform: rotate(0deg);
    }

    100% {
        -o-transform: rotate(360deg);
    }
}

@-ms-keyframes cssload-flower-fan {
    0% {
        -ms-transform: rotate(0deg);
    }

    100% {
        -ms-transform: rotate(360deg);
    }
}

@-webkit-keyframes cssload-flower-fan {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@-moz-keyframes cssload-flower-fan {
    0% {
        -moz-transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(360deg);
    }
}
</style>