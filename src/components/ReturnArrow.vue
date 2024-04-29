<template>
    <router-link :to="{ name: 'Home' }">
        <div>
            <span>
                < </span>
        </div>
    </router-link>
</template>

<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fdf5ed !important;
    color: #da6317 !important;
    font-size: 36px;
    margin-left: 20px;
    width: 45px !important;
    height: 45px !important;
    border-radius: 12px;
}

span {
    padding-top: 0px;
    margin-top: 0px;
}
</style>