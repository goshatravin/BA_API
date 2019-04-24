<template>
<div class="content">
            <div class="content-block">
                    <div class="content-block-wrapp__title">
                         <p class="content-block__title">Основы</p>
                    </div>
                        <p class="content-block__text ">
                        Сервис Партнер API (далее - Сервис)позволяет осуществлять взаимодействие с компанией Балт Ассистанс через сеть Интернет. 
                        Сервис состоит из двух модулей, благодаря которым Партнер может осуществлять обмен данными c автоматизированной информационной 
                        системой Балт Ассистанс (далее - АИС Балт Ассистанс), в частности передавать данные по договорам страхования и получать данные по
                        страховым случаям. 
                        <br><br>
                        Взаимодействие с сервисом осуществляется через функциональность,
                        реализованную в АИС Партнера, которая вызывает методы Сервиса и 
                        обрабатывает результаты их работы. Использование Сервиса позволяет
                        минимизировать ошибки вследствие человеческого фактора, сократить
                        временные задержки при обмене данными между АИС Балт Ассистанс и 
                        АИС Партнера. 
                        <br><br>
                        Аутентификация и авторизация Партнера осуществляется посредством ключа, 
                        передаваемого при вызове метода (для получения ключа необходимо написать
                        запрос на адрес support@calltravel.eu). Для защиты данных в процессе передачи
                        через сеть Интернет используется TLS-шифрование.
                        </p>
 <img class="jostko" id="jostko" src="../assets/IMG_4706.png" alt="">
                        
                        
            </div>
         <!--  -->
        <!-- <div class="content-block">
                        <div class="content-block-wrapp__title">
                            <p class="content-block__subtitle">Инструкция для самых маленьких</p>
                        </div>
                            <p class="content-block__text">
                            Настоящая документация содержит общее описание каждого модуля Сервиса,
                            а также детальное описание методов,
                            реализованных в модуле. Информация разбита на 
                            разделы и пункты, быстрый доступ к которым возможен через левую навигационную панель.
                            <br><br>
                            Описание каждого метода включает информацию о том, что он выполняет, какой
                            метод запроса необходимо использовать (GET, POST), какой URL необходимо использовать,
                                передаваемые параметры, перечень полей, а также примеры.
                            </p>
        </div> -->
         <!--  -->
           <!-- <div class="content-block" id="bordero">
                    <div class="content-block-wrapp__title">
                         <p class="content-block__title">Бордеро</p>
                    </div>
                        <p class="content-block__text">
                       Модуль “Бордеро” позволяет автоматизировать передачу данных по заключенным 
                       договорам страхования, изменение данных по ранее переданным договорам, 
                       а также аннулирование ранее переданных договоров. Поле policy_id (либо policy_guid)
                        уникальным образом идентифицирует договор страхования в целом. Поле person_id (либо person_guid)
                         идентифицирует конкретное застрахованное лицо в рамках договора страхования. 
                         Указанные поля устанавливаются при вызове метода 
                       добавления и используются впоследствии при вызове метода обновления или удаления. 
                       За один вызов любого из методов возможно передавать данные по нескольким записям.
                        </p>
            </div> -->
         <!--  -->
              <!-- <div class="content-block" id="bordero">
                    <div class="content-block-wrapp__title">
                         <p class="content-block__subtitle">Добавление</p>
                    </div>
                        <p class="content-block__text">
                     Модуль “Бордеро” позволяет автоматизировать передачу данных по 
                     заключенным договорам страхования, изменение данных по ранее 
                     переданным договорам, а также аннулирование ранее переданных договоров. 
                     Поле policy_id (либо policy_guid) уникальным образом идентифицирует договор 
                     страхования в целом. Поле person_id (либо person_guid) идентифицирует конкретное 
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
                        </div> -->
                        <!-- <div class="content-block__field">
                             <div class="content-block-filed__item" v-for="item in myJson" :key="item.field">
                                <p class="coutput-text">{{item.cat}}</p>
                                <p class="coutput-text">{{item.name}}</p>
                                <p class="coutput-text">{{item.type}}</p>
                                <p class="coutput-text">{{item.rec}}</p>
                                <p class="coutput-text">{{item.desc}}</p>
                            </div>
                        </div> -->
            <!-- </div> -->
         <!--  -->
                
</div>
</template>
<script>
import myData from '../JSON/data.json'
export default {
        data() {
      return {
        myJson: myData,
      }
    },
    methods:{
        showimg:function(){
            setTimeout(function(){
          document.getElementById('jostko').style.transform ="translateY(10%)"
            },1000)
        }
    },
   mounted(){
       setInterval(this.showimg(), 1000)
    //  this.showimg()
    },
}
</script>

<style scoped>
.content-block__stuff{
    margin-top: 1rem;
    padding-right: 1rem;
    
}
.content-block-stuff__itemspan{
    background: var( --top-code);
    padding-right: 2rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
}
.content-block-filed__item{
    display: grid;
    grid-template-columns: 10rem 25rem 5rem 1fr 1fr;
}
.coutput-text{
    border-bottom: 1px solid var( --top-code);
}

.jostko{
    max-width: 30rem;
    position: absolute;
    right: 10rem;
    transform: translateY(-200%);
    transition: 1s all;
}
@media (max-width: 1200px) {
  .content-block{
      max-width: 100%;
  }

 }
 @media (max-width: 700px) {
 .jostko{
     display: none;
 }

 }
</style>
