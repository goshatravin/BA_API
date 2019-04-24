<template>
    <div id="nav">
         <div class="burger-nav">
          <img class="burger-menu"    src="../assets/menu.svg" alt="burger-menu" v-on:click="manmenu = !manmenu">
          <!-- <img class="burger-menu"  src="../assets/cancel.svg" alt="burger-menu" v-on:click="manmenu = !manmenu"> -->
        </div>
      <div class="nav-info"  v-if="manmenu">
        <img class="logo" src="../assets/main_logo.svg" alt="логотип">
        <p class="title"><span class="yellow-title">&#9749;</span>разработчикам<span class="yellow-title"></span></p>
      </div>
      <div class="nav-ul" v-if="manmenu">
      <router-link class="a-main" to="/">Основы</router-link>
      <router-link to="/instruction">Инструкция</router-link>
      <router-link class="a-main" to="/bordero">Бордеро</router-link>
       <router-link to="/add">Добавление</router-link>
      <router-link to="/ref">Обновление</router-link>
      <router-link to="/del">Удаление</router-link>
      <router-link class="a-main" to="/losses">Убытки</router-link>
      <router-link to="/setup">Установить webhook</router-link>
      <router-link to="/getalldate">Получить всю информацию</router-link>
      </div>
      </div>
</template>
<script>
export default {
  data:function(){
    return{
     manmenu: true,
    }
  
  },
  methods:{
    onResize(){
      if(window.innerWidth < 768){
        this.manmenu = false;
        console.log(this.manmenu)
      }else if(window.innerWidth > 768){
        this.manmenu = true;
        console.log(this.manmenu)
      }
    },
  },
  watch:{
    $route (to, from){
      if(window.innerWidth < 768){
          this.manmenu = false;
      }
       
    }
} ,

  beforeMount() {
   window.addEventListener('load', this.onResize)
},
//  created(){
//     window.addEventListener('resize', this.onResize)
//  }
}
</script>

<style>
a{
  color: var(--main-black);
  text-decoration: none;
  padding-left: 2rem;
  padding-bottom: 0.5rem;
}
.nav-ul a.router-link-exact-active {
  border-right: 1rem solid var(--yellow);
}
a:hover{
  background: var(--top-code);
}
.a-main{
  font-size: 1.5rem;
  font-weight: 600;
}
#nav {
  background: var(--main-bg);
  z-index: 1000;
   
}
.nav-ul{
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 2rem;
   position: sticky;
   top: 0;
}
.logo{
  max-width: 5rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  padding-top: 1rem;
}
.nav-info{
  text-align: center;
}
.title{
  text-align: center;
  padding-bottom: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
}
.yellow-title{
   color: var(--main-black);
   font-weight: 700;
   padding: 0.5rem;
}
.burger-nav{
  text-align: right;
  padding: 1rem;
  display: none;
}
.burger-menu{
  max-width: 3rem;
  cursor: pointer;
}
@media (max-width: 768px) { 
  a{
    padding-left: 0;
  }
  /* .nav-info{
    display: none;
  } */
  .burger-nav{
    display: block;
    margin-top: 1rem;
  }

  .nav-ul{
    display: flex;
    margin: 0 auto;
    padding-bottom: 2rem;
    text-align: center;
  }
  #nav{
   position: sticky;
   top: 0;
  }
  .nav-ul >*{
    padding: 0.5rem;
   
  }
 }
</style>
