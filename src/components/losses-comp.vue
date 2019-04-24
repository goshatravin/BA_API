<template>
<div class="content">
        <div class="content-block" id="bordero">
                    <div class="content-block-wrapp__title">
                         <p class="content-block__title">Убытки</p>
                    </div>
                        <p class="content-block__text">
                       Модуль “Убытки” позволяет Партнеру получать данные 
                       по страховым событиям в режиме реального времени. 
                       Прежде всего, необходимо установить Webhook - URL на 
                       стороне Партнера, на который Сервис будет отправлять данные 
                       по мере их появления или изменения в АИС Балт Ассистанс. 
                       После этого необходимо выполнить метод для загрузки данных,
                        сгенерированных до установки Webhook.
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