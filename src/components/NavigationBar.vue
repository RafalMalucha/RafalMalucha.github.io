<template>
    <div>
        <div id="menu-items">
            <router-link :to="{ name: 'Home' }">
                <p>HOME</p>
            </router-link>
            <router-link :to="{ name: 'Cart' }">
                <p>CART</p>
            </router-link>
            <router-link :to="{ name: 'Account' }">
                <p>ACCO</p>
            </router-link>
            <router-link :to="{ name: 'Notifications' }">
                <p>NOTI</p>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
div {
    width: 100%;
    position: absolute;
    background-color: #ffffff;
    ;
    border-top: 1px solid #e5e5e5;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    padding: 10px 20px 0px 20px;
    border-radius: 12px;
}

p {
    padding: 10px 15px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #eafaf2;
    border-radius: 12px;
    border: 1px solid #e5e5e5;
    color: #1ec47a;
    font-weight: bold;
}
</style>