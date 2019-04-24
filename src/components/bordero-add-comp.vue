<template>
<div class="content">
      <div class="content-block" id="bordero">
                    <div class="content-block-wrapp__title">
                         <p class="content-block__subtitle">Добавление</p>
                    </div>
                        <p class="content-block__text">
                     Модуль “Бордеро” позволяет автоматизировать передачу данных по 
                     заключенным договорам страхования, изменение данных по ранее 
                     переданным договорам, а также аннулирование ранее переданных договоров. 
                     Поле <span class="yellow-line"> policy_id  </span>  <span class="yellow-line">(либо policy_guid)</span> уникальным образом идентифицирует договор 
                     страхования в целом. Поле <span class="yellow-line">person_id (либо person_guid)</span>  идентифицирует конкретное 
                     застрахованное лицо в рамках договора страхования. Указанные поля устанавливаются
                      при вызове метода добавления
                      и используются впоследствии при вызове метода обновления или удаления. За один 
                      вызов любого из методов возможно передавать данные по нескольким записям.
                        </p>
                        <div class="content-block__stuff">
                            <p class="content-block-stuff__item"><span class="content-block-stuff__itemspan">URL:</span>https://api.accidentlaw.ru/partner/v2/?method=addData</p>
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
                              <div class="codeoutput">
                            <div class="codeoutput__item item1">
                                    <div class="curcle-box">
                                        <p class="codeoutput-top__text">Пример поля data в формате JSON</p>
                                    </div>
                                    <p class="code">
                                    [{ 
                                        "test_data": true, 
                                        "policy_id": 2301153, 
                                        "policy_guid": "c471e3a1-88e1-44cd-a040-ccef054d3243", 
                                        "policy_number": "1", 
                                        "policy_type": "0", 
                                        "person_id": 4949745, 
                                        "person_guid": "955a9851-636b-46d3-8545-d741e885a709", 
                                        "fullname": "Тестов Тест Тестович", 
                                        "dob": "20/12/10", 
                                        "vip": false, 
                                        "date_of_issue": "25.01.2005", 
                                        "date_beg": "01.10.2017", 
                                        "date_end": "07.09.2018", 
                                        "duration": "257", 
                                        "territory_id": [1,2,3], 
                                        "territory_code": ["RUS", 1, "USA"], 
                                        "territory": "French Polynesia", 
                                        "insurer": "Тестов Батя Тестович", 
                                        "sales_channel": "Voomm", 
                                        "turoperator": "Kohler LLC", 
                                        "department": "Alendronate Sodium", 
                                        "ins_med_program_id": [4,5,6], 
                                        "ins_med_program": "Standard", 
                                        "ins_med_sum": "7350", 
                                        "ins_med_sum_currency_code": "EUR", 
                                        "ins_med_deduct": "9865346", 
                                        "ins_med_deduct_currency_code": "EUR", 
                                        "ins_med_deduct_currency_percent": 3, 
                                        "ins_bag_program_id": [7,8,9], 
                                        "ins_bag_program": "Lotstring", 
                                        "ins_bag_sum": 61250, 
                                        "ins_bag_sum_currency_code": "RUB", 
                                        "ins_bag_deduct": 557, 
                                        "ins_bag_deduct_currency_code": "USD", 
                                        "ins_bag_deduct_currency_percent": 1, 
                                        "ins_special_condition_id": [23,24,25], 
                                        "ins_special_condition": "Panthera tigris", 
                                        "ins_rules_id": [1], 
                                        "ins_rules": "2", 
                                        "ins_ratio": [K2,K4,K2.7], 
                                        "premium": 49673, 
                                        "premium_currency_code": "USD",
                                        "premium_national": 33820,
                                        "exchange_rate": 87.52, 
                                        "passport": "0511888099", 
                                        "home_address": "916 Ridgeview Parkway", 
                                        "phone_number": "+712388656", 
                                        "email": "mail1@mail.ru", 
                                        "description": "" 
                                        }]
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
                                        &lt;form action="https://api.accidentlaw.ru/?req=upload_bordero" method="post">
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
  name: 'bordero-add-comp',
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