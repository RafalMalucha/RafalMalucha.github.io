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
    border: 1px solid red;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e5e5e5;

}

#item>div:nth-of-type(1) {
    width: 15%;
}

#item>div:nth-of-type(2) {
    width: 85%;
}

h4 {
    font-weight: bold;
}

img{
    width: 32px;
    margin-top: 16px;
    margin-left: 6px;
}
</style>