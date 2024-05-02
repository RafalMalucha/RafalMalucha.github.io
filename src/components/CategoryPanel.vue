<template>
    <div>
        <h3>
            <slot name="title"></slot>
        </h3>
    </div>
</template>

<style scoped>
div {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: rgba(254, 173, 29, 0.1);
    border-radius: 12px;
    box-shadow: 0 2px 4px #DA6317;
    transition: box-shadow 0.3s ease;
}

div:hover {
    opacity: 0.9;
    cursor: pointer;
}

h3 {
    width: 100%;
    color: #000000;
    text-align: left;
    padding: 20px 40px;
    font-weight: bold;
}
</style>
