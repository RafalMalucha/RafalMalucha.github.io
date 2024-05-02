<template>
    <div class="shadow">
        <div id="menu-items">
            <router-link :to="{ name: 'Home' }">
                <img src="../assets/icons/home-icon.png" al="Home icon" />
                <p>Oferta</p>
            </router-link>
            <!-- <router-link :to="{ name: 'Cart' }">
                <img src="../assets/icons/cart-icon.png" al="Home icon" />
                <p>Koszyk</p>
            </router-link> -->
            <router-link :to="{ name: 'Account' }">
                <img src="../assets/icons/account-icon.png" al="Home icon" />
                <p>Konto</p>
            </router-link>
            <!-- <router-link :to="{ name: 'Notifications' }">
                <img src="../assets/icons/notification-icon.png" al="Home icon" />
                <p>Powiadomienia</p>
            </router-link> -->
        </div>
    </div>
</template>

<style scoped>
div {
    width: 100%;
    position: absolute;
    background-color: var(--color-white);
    border-top: 1px solid var(--color-light-grey);
    bottom: 0;
    display: flex;
    justify-content: center;
    padding: 10px 20px 10px 20px;
    border-radius: 12px;
}

img {
    width: 32px;
    padding-bottom: 8px;
}

p {
    display: inline-block;
    margin-left: 15px;
    color: var(--color-black);
    font-weight: bold;
}

a {
    padding-left: 40px;
    padding-right: 40px;
    margin-left: 40px;
    margin-right: 40px;
    background-color: #eafaf2;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
}

a:hover {
    background-color: #cff8e4;
}

@media only screen and (max-width: 900px) {
    div {
        justify-content: space-around;
    }

    img {
        width: 48px;
        padding: 12px;
    }

    a {
        padding-left: 10px;
        padding-right: 10px;
        margin-left: 0px;
        margin-right: 0px;
    }

    p {
        display: none;
    }
}
</style>
