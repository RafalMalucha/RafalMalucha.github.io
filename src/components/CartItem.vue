<template>
    <div class="col-md-4">
        <div id="item">
            <div>
                <img class="img" src="../assets/images/menu_photo.png" alt="Notification icon" />
            </div>
            <div>
                <h4>
                    <slot name="title"></slot>
                </h4>
                <p>
                    <slot name="description"></slot>
                </p>
                <p>
                    <slot name="price"></slot>
                </p>
            </div>
            <div id="counter">
                <input type="number" class="form-control" placeholder="1">
            </div>
        </div>
    </div>
</template>

<style scoped>
#item {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e5e5e5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.3s ease;
}

#item>div:nth-of-type(1) {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
}

#item>div:nth-of-type(2) {
    width: 85%;
}

h4 {
    font-size: 1.3rem;
    font-weight: bold;
}

img {
    width: 40%;
}

@media screen and (max-width: 900px) {

    #item {
        flex-direction: row;
        padding: 0px;
    }

    #item>div {
        padding: 20px;
    }

    #item>div:nth-of-type(1) {
        width: 40%;
        margin-bottom: 0px;
    }

    #item>div:nth-of-type(2) {
        width: 60%;
    }

    img {
        width: 100%;
    }
}
</style>
