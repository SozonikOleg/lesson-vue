<template>
    <div class="navigation-list">
        <nav class="nav">
            <div>
                <a href="">Вход</a>
            </div>
            <div>
                <a href="">Регистрация</a>
            </div>
            <div>
                <a href="">Контакты</a>
            </div>
        </nav>
        <img class="menu-icon" src="">
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}

.fas {
  font-size: 130px;
}

.fa-igloo {
  font-size: 40%;
}
.navigation-list {
    display: flex;
    justify-content: flex-end;
    background-color: #1E6FC5;
}

.nav {
    display: flex;
    justify-content: flex-end;
    width: 53.5%;
    height: 90px;
    color: #ffffff;
    font-family: Lato;
    font-size: 16px;
    font-weight: 500;
}

.nav div {
  margin:30px 30px 0px 0px;

}

.nav  a {
  margin:30px 30px 0px 0px;
  color: white;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 300;
}
</style>
