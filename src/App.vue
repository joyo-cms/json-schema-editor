<script setup>
import JsonSchemaEditor from './components/JsonSchemaEditor.vue'
const schema = JSON.stringify({
  "type": "object",
  "title": "条件",
  "properties": {
    "name": {
      "type": "string",
      "title": "名称",
      "maxLength": 10,
      "minLength": 2
    },
    "appId": {
      "type": "integer",
      "title": "应用ID"
    },
    "credate": {
      "type": "string",
      "title": "创建日期",
      "format": "date"
    }
  },
  "required": [
    "name",
    "appId",
    "credate"
  ]
})

</script>

<template>
  <JsonSchemaEditor v-model="schema" />
</template>

<style scoped>
</style>
