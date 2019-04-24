<template>
<div class="content">
        <div class="content-block" id="bordero">
                    <div class="content-block-wrapp__title">
                         <p class="content-block__title">Бордеро</p>
                    </div>
                        <p class="content-block__text">
                       Модуль “Бордеро” позволяет автоматизировать передачу данных по заключенным 
                       договорам страхования, изменение данных по ранее переданным договорам, 
                       а также аннулирование ранее переданных договоров. Поле<span class="yellow-line"> policy_id (либо policy_guid)</span> 
                        уникальным образом идентифицирует договор страхования в целом. Поле <span class="yellow-line"> person_id (либо person_guid)</span>
                         идентифицирует конкретное застрахованное лицо в рамках договора страхования. 
                         Указанные поля устанавливаются при вызове метода 
                       добавления и используются впоследствии при вызове метода обновления или удаления. 
                       За один вызов любого из методов возможно передавать данные по нескольким записям.
                        </p>
            </div>
        </div>
</template>

<script>
export default {
  name: 'bordero-comp',
  components: {
  }
}
</script>

<style scoped>

</style>