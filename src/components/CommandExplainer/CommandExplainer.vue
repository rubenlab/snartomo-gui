<script setup lang="ts">
import { reactive, computed } from "vue";
import type { Group } from "./model";

type Command = {
  name: string;
  groups: Array<Group>;
};

const props = defineProps<Command>();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _map = {} as any;
for (const g of props.groups) {
  for (const a of g.arguments) {
    _map[a.name] = "";
  }
}
const map = reactive(_map);
const state = reactive({
  activeNames: ["Required"],
});
const command = computed(() => {
  let result = props.name;
  for (const key in map) {
    let value = map[key];
    if (value != null) {
      value = value.trim();
    }
    if (value != null && value !== "") {
      result += ` --${key} ${value}`;
    }
  }
  return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const descriptionCollapse = reactive({} as any);

const setCollapse = (key: string, arr: Array<string>) => {
  descriptionCollapse[key] = arr;
};
</script>

<template>
  <el-affix position="top">
    <h3 style="background-color: black; color: yellow; margin-top: 0">
      Command:
      <pre>{{ command }}</pre>
    </h3>
  </el-affix>
  <el-collapse v-model="state.activeNames">
    <el-collapse-item
      v-for="group in props.groups"
      :key="group.name"
      :title="group.name"
      :name="group.name"
    >
      <el-card v-for="argument in group.arguments" :key="argument.name">
        <template #header>
          <div>
            <span>{{ argument.name }}</span>
          </div>
        </template>
        <el-row>
          <el-col :md="4" :sm="6">Input here:</el-col>
          <el-col :md="12" :sm="18">
            <el-select
              v-if="argument.type === 'bool'"
              v-model="map[argument.name]"
              placeholder="Select"
              clearable
            >
              <el-option label="True" value="true" />
              <el-option label="False" value="false" />
            </el-select>
            <el-input
              v-else
              :label="argument.name"
              v-model="map[argument.name]"
              placeholder="Please input"
              type="text"
              clearable
            >
            </el-input>
          </el-col>
          <el-col v-if="!!argument.default" :md="1" :sm="0"></el-col>
          <el-col v-if="!!argument.default" :md="7" :sm="24"
            >default value: {{ argument.default }}</el-col
          >
        </el-row>
        <el-row>
          <el-collapse
            :value="descriptionCollapse[argument.name]"
            @input="setCollapse(argument.name, $event)"
          >
            <el-collapse-item title="Description" :name="argument.name">
              <pre>{{ argument.description }}</pre>
            </el-collapse-item>
          </el-collapse>
        </el-row>
      </el-card>
    </el-collapse-item>
  </el-collapse>
</template>

<style scoped>
pre {
  white-space: pre-line;
}
</style>
