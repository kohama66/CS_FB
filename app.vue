<script lang="ts" setup>
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";

const urls = ref<string[]>([]);

onMounted(async () => {
  const storage = getStorage();
  const listRef = storageRef(storage);
  const list = await listAll(listRef);

  list.items.forEach(async (item) => {
    const url = await getDownloadURL(item);
    urls.value.push(url);
  });
});

async function fileSelect(e: Event) {
  const target = e.target as HTMLInputElement;
  const file = target.files?.item(0);

  if (!file) {
    return;
  }

  const storage = getStorage();
  const name = Math.random();

  const _storageRef = storageRef(storage, name.toString());
  const result = await uploadBytes(_storageRef, file);
  console.log(result);
}
</script>

<template>
  <div style="border: 1px black solid; padding: 8px; margin-bottom: 20px">
    <h1>画像一覧</h1>

    <div v-for="url in urls" :key="url">
      <img :src="url" alt="image" />
    </div>
  </div>

  <div style="border: 1px black solid; padding: 8px">
    <h1>upload</h1>

    <form>
      <input type="file" @change="fileSelect" />
    </form>
  </div>
</template>
