<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ countNum }} <button @click="add1">+1</button></p>
    <p>{{ filterList }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AboutStore } from '../store/module/about';

@Component({
  name: 'About',
})
export default class About extends Vue {
  get countNum(): number {
    return AboutStore.count;
  }

  get filterList(): Array<number> {
    return AboutStore.filterList;
  }

  add1(): void {
    AboutStore.updateCount(1);
  }

  created(): void {
    //返回的是promise的时候就可以进行then操作了
    AboutStore.getList().then((res) => {
      // eslint-disable-next-line no-undef
      console.log('success');
    });
  }
}
</script>
