<script setup>
import { onMounted } from 'vue';
import DefaultField from './DefaultField.vue';
const props = defineProps({
    modelValue: Object
});
onMounted(() => {
    console.log(props)
})
</script>

<template>
    <DefaultField v-model="props.modelValue" />
</template>