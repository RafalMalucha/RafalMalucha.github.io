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
    background-color: var(--color-light-orange);
    border-radius: 12px;
    box-shadow: 0 2px 4px var(--color-orange);
    transition: box-shadow 0.3s ease;
    /* height: 200px; */
}

div:hover {
    opacity: 0.9;
    cursor: pointer;
}

h3 {
    width: 100%;
    color: var(--color-black);
    text-align: left;
    padding: 20px 40px;
    font-weight: bold;
}
</style>
