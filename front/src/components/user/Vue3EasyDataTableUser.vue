
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
      <template #item-player="{ player, avator, page }">
        <div class="player-wrapper">
          <img class="avator" :src="avator" alt="" />
          <a target="_blank" :href="page">{{ player }}</a>
        </div>
      </template>
      <template #item-team="{ teamName, teamUrl }">
        <a target="_blank" :href="teamUrl">{{ teamName }}</a>
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
    { text: "USERNAME", value: "username", sortable: true },
    { text: "EMAIL", value: "email", sortable: true },
    { text: "ROLE", value: "role", sortable: true },
    { text: "Operation", value: "operation" },
  ];
  let items: Item[] = [
    { username: "Mathis", id: 1, email: 'mat@gmail.com', role: "admin" },
    { username: "Thomas", id: 2, email: 'thomas@gmail.com', role: "admin" },
    { username: "Maxime", id: 3, email: 'maxime@gmail.com', role: "manager" },
    { username: "Laurent", id: 4, email: 'laurent@gmail.com', role: "manager" },

  ];
  
  
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
  });
  const isEditing = ref(false);

  const deleteItem =    async (val: Item) => {
      items = items.filter((item) => item.id !== val.id);
      console.log(items)
      await axios.delete(
        "http://" + "35.180.243.83" + ":4000/api/users/" + val.id
      );
    };
    const editItem = (val: Item) => {
      isEditing.value = true;
      // const { height, weight, id } = val;
      // editingItem.height = height;
      // editingItem.weight = weight;
      // editingItem.id = id;
    };

  </script>

<style>
.operation-wrapper .operation-icon {
  width: 20px;
  cursor: pointer;
}
.player-wrapper {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-items: center;
}
.avator {
  margin-right: 10px;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 10%);
}
</style>
