<template>
<div class="content">
      <div class="content-block" id="bordero">
                    <div class="content-block-wrapp__title">
                         <p class="content-block__subtitle">Обновление</p>
                    </div>
                        <p class="content-block__text">
                     Метод обновления позволяет обновить данные по ранее переданным договорам страхования.
                     Ниже приведен перечень полей, принимаемых методом. Для удобства поля разбиты на
                      категории, кроме того, обозначено, является ли поле обязательным.
                       Необходимо обратить внимание,
                     что некоторые поля являются обязательными в любой ситуации, в то время 
                     как другие - в определенных ситуациях. Точная информация представлена 
                     напротив каждого поля. 
                     <br><br>
                     Передавать необходимо один из пяти обязательных параметров: 
                   <span class="yellow-line">policy_id, policy_guid, person_id, person_guid, ba_policy_id.</span>  
                      Далее передаются поля, которые необходимо обновить.
                        </p>
                        <div class="content-block__stuff">
                            <p class="content-block-stuff__item"><span class="content-block-stuff__itemspan">URL:</span>https://api.accidentlaw.ru/partner/v2/?method=updateData</p>
                            <p class="content-block-stuff__item"><span class="content-block-stuff__itemspan">Метод запроса:</span>POST</p>
                            <p class="content-block-stuff__item"><span class="content-block-stuff__itemspan">Параметры:</span>key, data</p>
                            <p class="content-block-stuff__item"><span class="content-block-stuff__itemspan">Поля:</span></p>
                        </div>
                       
                        
                             <div class="btn-wrap">
                            <input type="submit" id="btn" @click="showToggle" value="показать все поля">
                        </div>
                        <div class="show" v-if="show">
                        <div class="content-block__field">
                              <div class="content-block-category">
                                <p class="category__item">Категории</p>
                                <p class="category__item">Имя поля</p>
                                <p class="category__item">Тип</p>
                                <p class="category__item">Обязательно</p>
                                <p class="category__item">Описание</p>
                        </div>
                                <div class="content-block-filed__item" v-for="item in myJson" :key="item.field">
                                        <p class="coutput-text">{{item.cat}}</p>
                                        <p class="coutput-text">{{item.name}}</p>
                                        <p class="coutput-text">{{item.type}}</p>
                                        <p class="coutput-text">{{item.rec}}</p>
                                        <p class="coutput-text">{{item.desc}}</p>
                            </div>
                        </div>
                        </div>
                        <!--  -->
                           <div class="codeoutput">
                            <div class="codeoutput__item item1">
                                    <div class="curcle-box">
                                        <p class="codeoutput-top__text">Пример поля data в формате JSON</p>
                                    </div>
                                    <p class="code">
                                    [{ 
                                    "policy_id":"10001", 
                                    "policy_guid":"c471e3a1-88e1-44cd-a040-ccef054d3243", 
                                    "person_id":"100441", 
                                    "person_guid":"c4742e3a1-88e1-44cd-a040-ccaaf4d3243", 
                                    "ba_policy_id":"23013221", 
                                    "duration":"10", 
                                    "phone_number":"+1911*****20", 
                                    "email":"testmail@domain.eu" 
                                    }] 

                                    Данный пример обновляет: 
                                    1. Количество дней пребывания 
                                    2. Контактный телефон в стране проживания 
                                    3. Адрес электронной почты
                                    </p>
                                    </div>
                                    <div class="codeoutput__item item2">
                                    <div class="curcle-box">
                                        <!-- <div class="cur-one"></div>
                                        <div class="cur-one"></div>
                                        <div class="cur-one"></div> -->
                                        <p class="codeoutput-top__text">Пример формы</p>
                                    </div>
                                    <p class="code">
                                        &lt;form action="https://api.accidentlaw.ru/partner/v2/?method=updateData" method="post">
                                        &lt;div&gt; &lt;input type="text" name="key" placeholder="API KEY" style="width: 400px;height: 40px;" /&gt;
                                        &lt;/div&gt;
                                        &lt;div&gt; &lt;textarea name="data" placeholder="JSON DATA" style="width: 400px;height: 300px;">
                                        &lt;/textarea&gt; &lt;/div&gt;
                                        &lt;div&gt; &lt;button&gt;Send json data &lt;/button&gt; &lt;/div&gt;
                                        &lt;/form&gt;
                                    </p>
                                    </div>
                                    <div class="codeoutput__item item3">
                                    <div class="curcle-box">
                                        <!-- <div class="cur-one"></div>
                                        <div class="cur-one"></div>
                                        <div class="cur-one"></div> -->
                                        <p class="codeoutput-top__text">Варианты ответа API</p>
                                    </div>
                                    <p class="code">
                                        {"status":"0","result":"OK"} //// Бордеро корректно загружено
                                        {"status":"1","result":"Invalid API-key"} //// Неверный API - ключ
                                        {"status":"2","result":"Missing data "} //// Не переданы данные
                                        {"status":"3","result":"Incorrect JSON: "} //// Проблемы с передаваемыми данными
                                        {"status":"4","result":"You're banned until "} //// Много неверных запросов к API. Блокировка на 30 минут
                                    </p>
                                    </div>
                             </div>
             </div> 
        
        </div>
</template>

<script>
import myData from '../JSON/data.json'
export default {
  name: 'bordero-ref-comp',
  components: {
  },
        data() {
        return {
            show: false,
            myJson: myData,
        }
    },
    methods:{
        showToggle:function(){
         this.show = !this.show;
         console.log(document.getElementById('btn').value)
        //  document.getElementById('btn').value = "показать все поля" ? "скрыть все поля" : "показать все поля";
        var kakashka = '';
        if (document.getElementById('btn').value == "показать все поля") {
            document.getElementById('btn').value = "скрыть все поля";
        } else{
            document.getElementById('btn').value = "показать все поля";
            
        }
        // kakashka = (document.getElementById('btn').value == "показать все поля") ? "скрыть все поля" : "показать все поля";
         console.log(document.getElementById('btn').value)
        }
    }
    
}
</script>

<style scoped>
.codeoutput{
    display: grid;
    grid-template-areas: "nav  main"
                         "nav foot";
    grid-template-columns: 1fr 2fr;
        padding-top: 1.5rem;
}
.item1{
    grid-area:nav;
    background: var(--main-black);
    margin: 0.5rem;
     height: 40rem;
     overflow: scroll;

}
.item2{
    grid-area: main;
    background: var(--main-black);
        margin: 0.5rem;
}
.item3{
    grid-area: foot;
    background: var(--main-black);
        margin: 0.5rem;
}
  .code {
    padding: 2rem;
    color: white;
       
  }
  .curcle-box {
    display: grid;
    background: var(--top-code);
    padding: 0.5rem 0;
    border-radius: 15px 15px 0px 00px;
  }
  .codeoutput-top__text {
    padding-left: 2rem;
  }
  .codeoutput__item {
    border-radius: 16px 16px 0px 00px;
  }
  .category__item-text{
     color: var(--main-black);
  }
  .item_name{
    font-weight: 700;
  }
  @media (max-width: 1200px) {
    .codeoutput{
    display: grid;
    grid-template-areas: "nav"
                         "main"
                         "foot";
    grid-template-columns: 1fr;
}
 }
</style>