<script setup>
import { onMounted, toRefs } from 'vue';
const props = defineProps({
    modelValue: Object
});

</script>

<template>
    <div class="row g-1">
        <div class="col">
            <input type="text" class="form-control" v-model="props.modelValue.name" />
        </div>
        <div class="col">
            <input type="text" class="form-control" v-model="props.modelValue.options.title" />
        </div>
    </div>
</template>