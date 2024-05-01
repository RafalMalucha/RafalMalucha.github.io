<template>
    <div class="card shadow">
        <img src="../assets/images/profile-photo.png" class="card-img-top" alt="Profile iamge">
        <div class="card-body">
            <h5 class="card-title">Imię i nazwisko</h5>
            <p class="card-text">Opis profilu</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Adres e-amil</li>
                <li class="list-group-item">Numer telefonu</li>
                <li class="list-group-item">Ades do dostawy</li>
            </ul>
            <!-- <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div> -->
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 60%;
    margin: 0 auto;
    border-radius: 12px !important;
}

img {
    width: 250px;
    border-radius: 50%;
    margin: 20px auto 20px auto;
}

@media screen and (max-width: 900px) {
    .card {
        width: 90%;
        margin: 0 auto;
    }

    img {
        width: 60%;
    }

}
</style>