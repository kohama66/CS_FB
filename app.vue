<script lang="ts" setup>
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
} from "firebase/storage";

const urls = ref<string[]>([]);

onMounted(async () => {
  const storage = getStorage();
  const url = await getDownloadURL(storageRef(storage, "neko.jpeg"));

  urls.value.push(url);
});
</script>

<template>
  <div>
    <h1>Cloud Storage for Firebase</h1>
    <img v-for="url in urls" :key="url" :src="url" alt="image" />
  </div>
</template>
