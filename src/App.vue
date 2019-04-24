<template>
  <div id="app">
    <mainmenu/>
    <router-view/>
  </div>
</template>

<style>
html{
  font-size: 16px;
  line-height: 1.8rem;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-areas: "menu main";
  grid-template-columns: 15rem 1fr;
}
:root{
  --main-black: #455A64;  /* основной цвет шрифтов */
  --main-bg: #F8FAFC;     /* цвет фона у меню */
  --border-grey: #d3d3d3;  /* цвет границы */
  --top-code: #E4EBF2;     /* цвет шапки */ 
  --yellow: #fcc600;       /*Самый крутой желтый в мире */
  --hover: #F1F1EF;  /* цвет для hover */
}

.content{
  padding: 5rem;
  height: 100%;
   
}
.yellow-line{
  border-bottom: 2px solid var(--yellow);
}
.content-block{
   text-align: left;
   padding-bottom: 1.5rem;
   
  
}
.content-block__text{
  max-width: 60%; 
}
.content-block__subtitle{
    font-size: 1.5rem;
    font-weight: 300;
}
.content-block__title{
    font-size: 2rem;
    font-weight: 700;
}
.content-block-wrapp__title{
    padding-bottom: 2rem; 
}
.content-block__stuff{
  padding-top: 1rem;
}
.content-block-stuff__item{
  font-weight: 500;
}
.content-block-stuff__itemspan{
  margin-right: 2rem;
  font-weight: 200;
  border-bottom: 1px solid var(--yellow);
}
.content-block-category{
  display: grid;
  grid-template-columns: 10rem 10rem 10rem 20rem 1fr;
  padding-bottom: 1rem;
 
}
.content-block-category-short{
  display: grid;
  grid-template-columns: 15rem 10rem 1fr 1fr;
  padding-bottom: 1rem;
 
}
.content-block-category-shortel{
  display: grid;
  grid-template-columns: 15rem 1fr 1fr;
  padding-bottom: 1rem;
 
}
.category__item{
  font-weight: 200;
}
.content-block__field{
  padding-top: 1rem;
  
}
.content-block-filed__item{
  display: grid;
  /* grid-template-columns:  10rem 15rem 10rem 15rem 20rem; */
  grid-template-columns: 15rem 10rem 10rem 20rem 1fr;
   font-weight: 400;
  
}
.content-block-filed__item-short{
  display: grid;
  /* grid-template-columns:  10rem 15rem 10rem 15rem 20rem; */
  grid-template-columns: 15rem 10rem 1fr 1fr;
   font-weight: 400;
  
}
.content-block-filed__item-shortel{
  display: grid;
  /* grid-template-columns:  10rem 15rem 10rem 15rem 20rem; */
  grid-template-columns: 15rem 1fr 1fr;
   font-weight: 400;
  
}
.coutput-text{
  word-wrap: break-word;
  padding-right: 0.1rem;
}
.content-block-filed__item:hover{
  background: var(--hover);
}
#btn{
  outline: none;
  border: 2px solid var(--yellow);
  padding: 0.5rem;
  font-weight: 400;
  cursor: pointer;
}
.btn-wrap{
  text-align: center;
  padding-bottom: 2rem;
  padding-top: 1rem;
}
@media (max-width: 1200px) {
  html{
    font-size: 14px;
  }
  .content-block__text{
    max-width: 90%; 
  }
  .content{
    padding: 2rem 2.5rem;
  }
 }

@media (max-width: 992px) {
  html{
    font-size: 13px;
  }
  .content-block__text{
    max-width: 100%; 
  }
  .content{
    padding: 2rem 2.5rem;
  }
  
 }

@media (max-width: 768px) {
  html{
    font-size: 12px;
  }
  .content{
    padding: 1rem 1.5rem;
  }
  #app{
    display: grid;
    grid-template-areas: "menu"
                         "main";
    grid-template-columns: 1fr;
    
  }
  .content-block__text{
    max-width: 100%; 
  }
 }
</style>

<script>
import mainmenu from './components/menu.vue'
export default {
  components: {
    mainmenu,
  },
  
}
</script>
