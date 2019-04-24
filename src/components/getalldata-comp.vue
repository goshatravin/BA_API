<template>
<div class="content">
      <div class="content-block" id="bordero">
                    <div class="content-block-wrapp__title">
                         <p class="content-block__subtitle">Получить всю информацию</p>
                    </div>
                        <p class="content-block__text">
                    Позволяет осуществить предварительную загрузку данных, сгенерированных в АИС Балт Ассистанс до момента установления Webhook.
                        </p>
                        <div class="content-block__stuff">
                            <p class="content-block-stuff__item"><span class="content-block-stuff__itemspan">URL:</span>https://api.accidentlaw.ru/partner/v2/?method=getCases</p>
                            <p class="content-block-stuff__item"><span class="content-block-stuff__itemspan">Метод запроса:</span>POST</p>
                            <!-- <p class="content-block-stuff__item"><span class="content-block-stuff__itemspan">Параметры:</span>key, data</p> -->
                            <p class="content-block-stuff__item"><span class="content-block-stuff__itemspan">Принимаемые параметры:</span></p>
                        </div>
                       
                        
                             <div class="btn-wrap">
                            <input type="submit" id="btn" @click="showToggle" value="Показать все поля">
                        </div>
                        <div class="show" v-if="show">
                        <div class="content-block__field">
                              <div class="content-block-category-shortel">
                                <p class="category__item">Параметр</p>
                                <p class="category__item">Значение</p>
                                <p class="category__item">Тип</p>
                        </div>
                                <div class="content-block-filed__item-shortel">
                                        <p class="coutput-text">key</p>
                                        <p class="coutput-text">Ключ доступа</p>
                                        <p class="coutput-text">Уникальный идентификатор.</p>
                                        <!--  -->
                                        <p class="coutput-text">dateBeg</p>
                                        <p class="coutput-text">Дата, с которой начинать сбор данных</p>
                                        <p class="coutput-text">date</p>
                                        <!--  -->
                                        <p class="coutput-text">dateEnd</p>
                                        <p class="coutput-text">Дата, по которую собирать данные</p>
                                        <p class="coutput-text">date</p>
                            </div>
                        </div>
                        </div>
                        <!--  -->
                           <div class="codeoutput">
                            <div class="codeoutput__item item1">
                                    <div class="curcle-box">
                                        <p class="codeoutput-top__text">После установки WebHook на указанный адрес при изменении любого из полей будет отправлятся JSON-объект формата:</p>
                                    </div>
                                    <p class="code">
                                    { 
                                       
                                    "id_case":1097217, 
                                    "ref_nr":"50164836-1", 
                                    "status_code":"1", 
                                    "status_name":"Организация помощи", 
                                    "substatus_code":null, 
                                    "substatus_name":null, 
                                    "policy_series":null, 
                                    "policy_nr":"test 501955", 
                                    "date_beg":"2017-12-02", 
                                    "date_end":"2017-12-09", 
                                    "duration":8, 
                                    "territory":"шенген", 
                                    "fullname":"Nikita", 
                                    "dob":"1980-11-27", 
                                    "ins_med_sum":null, 
                                    "ins_med_sum_currency_code":null, 
                                    "ins_med_deduct":null, 
                                    "ins_med_deduct_currency_code":null, 
                                    "aid_type":"тех.ассистанс ВЗР (тех.ассистанс ВЗР)", 
                                    "circumstances":"обстоятельста травма / заболевание", 
                                    "diagnose":null, 
                                    "diagnose_icd":null, 
                                    "first_symptom_date":"2017-12-05", 
                                    "help_date_first":"2017-12-14", 
                                    "help_date_each":"2017-12-14", 
                                    "date_registered":"2017-12-14T16:51:16.136735+02:00", 
                                    "provider_sum":null, 
                                    "provider_currency":null, 
                                    "fee_sum":null, 
                                    "fee_currency":null, 
                                    "rzu_sum":null, 
                                    "rzu_currency":null, 
                                    "provider":"«Balt Assistanсе» LTD", 
                                    "phone_number":"79114912520", 
                                    "country":"РОССИЯ", 
                                    "country_iso":"RUS", 
                                    "visit_city":"Москва", 
                                    "hotel":null, 
                                    "address":"Лубянка дом 1", 
                                    "has_file":"Да" 
                                    }
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
                                        &lt;form action="https://api.accidentlaw.ru/partner/v2/?method=getCases" method="post">
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
                                        {"status_code":"1","text_status":"OK"}  //// Корректный запрос.  <br>
                                        {"status_code":"0","text_status":"Invalid API-key"} //// Неверный API - ключ
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
        if (document.getElementById('btn').value == "Показать все поля") {
            document.getElementById('btn').value = "Скрыть все поля";
        } else{
            document.getElementById('btn').value = "Показать все поля";
            
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