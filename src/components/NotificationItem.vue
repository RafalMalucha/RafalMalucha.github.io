<template>
    <div id="item">
        <div>
            <img src="../assets/icons/checked.png" alt="Notification icon" />
        </div>
        <diV>
            <h4>
                <slot name="title"></slot>
            </h4>
            <p>
                <slot name="description"></slot>
            </p>
        </diV>
    </div>
</template>

<style scoped>
body {
    background-color: #fcfcff;
}

#item {
    display: flex;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e5e5e5;
}

#item>div:nth-of-type(1) {
    width: 15%;
    text-align: center;
}

#item>div:nth-of-type(2) {
    width: 85%;
}

h4 {
    font-size: 1.3rem;
    font-weight: bold;
}

img {
    width: 32px;
    margin-top: 16px;
}

@media screen and (max-width: 900px) {

    #item>div:nth-of-type(1) {
        width: 25%;
    }

    #item>div:nth-of-type(2) {
        width: 75%;
    }

}
</style>