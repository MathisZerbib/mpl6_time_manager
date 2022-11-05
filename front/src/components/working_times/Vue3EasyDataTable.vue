
<template>
  <EasyDataTable
    v-model:items-selected="itemsSelected"
    buttons-pagination
    :headers="headers"
    :items="items"
  >
    <template #loading>
      <img
        src="https://thumbs.gfycat.com/AngelicYellowIberianmole.webp"
        style="width: 60px; height: 100px"
      />
    </template>

<template #item-operation="item">
      <div class="operation-wrapper">
        <img
          src="../../assets/img/delete.png"
          class="operation-icon"
          @click="deleteItem(item)"
        />
        <img
          src="../../assets/img/edit.png"
          class="operation-icon"
          @click="editItem(item)"
        />
      </div>
    </template>
  </EasyDataTable>
</template>


<script lang="ts" setup>
import axios from "axios";
import type { Header, Item } from "vue3-easy-data-table";
import { ref, onMounted, computed, reactive, onUnmounted } from 'vue'
const itemsSelected = ref<Item[]>([]);

const headers: Header[] = [
  { text: "ID", value: "id", sortable: true },
  { text: "START", value: "start", sortable: true },
  { text: "END", value: "end", sortable: true },
  { text: "Operation", value: "operation" },

];

const items: Item[] = [
  {  id: 1, start: "8:00", end: '17:00'},
  {  id: 2, start: "9:00", end: '16:20'},
  {  id: 3, start: "07:00",  end: '19:00'},
  {  id: 4, start: "06:00",  end: '14:00'},
];


    const isEditing = ref(false);

    const deleteItem = (val: Item) => {
      console.log('delete');
    };

    const editItem = (val: Item) => {
      isEditing.value = true;
      // const { height, weight, id } = val;
      // editingItem.height = height;
      // editingItem.weight = weight;
      // editingItem.id = id;
    };

    const submitEdit = () => {
      isEditing.value = false;
      // const item = items.value.find((item) => item.id === editingItem.id);
      // item.height = editingItem.height;
      // item.weight = editingItem.weight;
    };

async function deleteWorkingTime(id) {
  await axios.delete(
    "http://" +
    "35.180.243.83" +
    ":4000/api/workingtime/" +
    id
  );
};

onMounted(async () => {
  const { data } = await axios.get(
    "http://" + "35.180.243.83" + ":4000/api/workingtime/1"
  );
  for (let i = 0; i < data.data.length; i++) {
    data.data[i].start = data.data[i].start.substring(11, 16);
    data.data[i].end = data.data[i].end.substring(11, 16);
    items.push(data.data[i]);
  }
  return {
      submitEdit,
      headers,
      items,
        deleteItem,
    };
});
</script>