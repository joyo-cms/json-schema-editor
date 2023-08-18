<script setup>
import { ref, watch, reactive, onMounted, nextTick, watchEffect } from 'vue'
import ArrayField from './ArrayField.vue'
import BooleanField from './BooleanField.vue'
import NumberField from './NumberField.vue'
import ObjectField from './ObjectField.vue'
import StringField from './StringField.vue'

const fields = {
  'array': ArrayField,
  'object': ObjectField,
  'number': NumberField,
  'string': StringField,
  'boolean': BooleanField
};

const props = defineProps({
  modelValue: String,
});

const defaultSchema = {
  type: 'object'
};

const schema = reactive(Object.assign({}, defaultSchema));
const properties = ref([])

let valid = ref(true)

function parseSchema(val) {
  try {
    const newSchema = JSON.parse(val);
    valid = newSchema instanceof Object && !(newSchema instanceof Array);
    if (valid) {
      Object.assign(schema, newSchema, defaultSchema)
      properties.value = []
      for (var name in schema.properties) {
        properties.value.push({
          name: name,
          ref: name,
          open: false,
          editing: {
            name: false,
            description: false,
            type: false
          },
          options: schema.properties[name]
        })
      }
    }
  } catch {
    valid = false;
  }
}

watch(() => props.modelValue, (val) => {
  parseSchema(val);
})

onMounted(() => {
  parseSchema(props.modelValue)
})

function printSchema() {
  console.log(JSON.stringify(schema))
}
const title = ref(null)
const name = ref(null)
const type = ref(null)

watchEffect(() => {
  if (title.value && title.value[0]) title.value[0].select();
  if (name.value && name.value[0]) name.value[0].select();
  // if (type.value && type.value[0]) type.value[0].select();
})

async function edit(index, field) {
  console.log(index)
  properties.value[index].editing[field] = true;
}

const types = {
  string: '字符串',
  boolean: '布尔',
  integer: '整数',
  number: '数字',
  array: '数组',
  object: '对象'
}

</script>

<template>
  <div>
    <button type="button" class="btn btn-primary" v-on:click="printSchema">Print Schema</button>
    <div class="d-flex flex-column">
      <div v-for="(property, index) in properties">{{ property }} {{ index }}</div>
      <ul class="p-0 m-0">
        <li v-for="(property, index) in properties" class="d-flex align-items-center justify-content-between node-item">
          <div class="pe-2">
            <template v-if="property.editing.name">
              <input type="text" ref="name" class="form-control form-control-sm" v-model="property.name"
                v-on:blur="property.editing.name = false" />
            </template>
            <template v-else>
              <a href="javascript:;" v-on:click="property.open = !property.open" class="me-1 link-dark">
                <i class="bi bi-chevron-down" v-if="property.open"></i>
                <i class="bi bi-chevron-right" v-else></i>
              </a>
              <span>{{ property.name }}</span>
            </template>
          </div>
          <div class="px-2">
            <select ref="type" class="form-control form-control-sm" v-model="property.options.type"
              v-if="property.editing.type" v-on:change="property.editing.type = false">
              <option v-for="(val, key) in types" :value="key">{{ val }}</option>
            </select>
            <span class="text-body-secondary text-description" v-else>
              {{ types[property.options.type] || '未知' }}</span>
          </div>
          <div class="ps-2 dropdown d-flex align-items-center">
            <input type="text" ref="title" class="form-control form-control-sm" v-model="property.options.title"
              placeholder="描述" v-if="property.editing.title" v-on:blur="property.editing.title = false" />
            <span class="text-body-secondary text-description" v-else>{{ property.options.title || '[无描述]' }}</span>

            <a href="javascript:;" class="link-dark ms-1" data-bs-toggle="dropdown">
              <i class="bi bi-three-dots-vertical"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="javascript:;" class="dropdown-item" v-bind:class="{ 'disabled': property.editing.name }"
                  v-on:click="property.editing.name = true">修改字段</a>
                <a href="javascript:;" class="dropdown-item" v-bind:class="{ 'disabled': property.editing.description }"
                  v-on:click="property.editing.title = true">修改描述</a>
                <a href="javascript:;" class="dropdown-item" v-bind:class="{ 'disabled': property.editing.type }"
                  v-on:click="property.editing.type = true">修改类型</a>
                <a href="javascript:;" class="dropdown-item" v-bind:class="{ 'disabled': property.editing.title }"
                  v-on:click="more(index)">高级设置</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <component v-for="(property, index) in properties" :is="fields[property.options.type]" v-model="properties[index]">
      </component>
    </div>
  </div>
</template>

<style scoped>
* {
  font-size: 14px;
}

.dropdown-item,
.text-description {
  font-size: 12px;
  white-space: nowrap;
}

.bi {
  font-size: 13px;
}

.node-item {
  position: relative;
}

.node-item>div {
  background: white;
}

.node-item::after {
  content: ' ';
  z-index: -1;
  border-top: 1px dashed var(--bs-secondary);
  position: absolute;
  left: 0;
  right: 0;
  top: 55%;
}
</style>
