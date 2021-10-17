<template>
  <div>
    <div>
      firName: <input type="text" :value="firName" @input="onchangeFirName" />
      <p>
        name:{{ gatUserName }} gender:{{ GENDER[userGender] }} age:{{ userAge }}
      </p>

      <button @click="remove(id)">del</button>
      <button @click="addAge(id)">addAge+1</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Model } from 'vue-property-decorator';

enum Gender {
  '男' = 0,
  '女' = 1,
}

@Component({
  name: 'User',
})
export default class User extends Vue {
  //设定一个属性等于枚举里面的值
  GENDER: any = Gender;

  get gatUserName(): any {
    return this.userName;
  }
  @Prop(Number)
  //非空断言，表示一定会有
  id!: number;

  @Prop([String, Number])
  userName!: string | number;

  @Prop({ type: Number })
  userAge!: number;

  @Prop({ type: Number, default: 1 })
  userGender!: number;

  //触发父组件的事件，删除内容
  @Emit('on-remove')
  remove(id: number): number {
    return id;
    //也可以不return  默认会将参数进行传递
  }

  //这里的emit不写事件名
  @Emit()
  addAge(id: number) {
    //事件名会变成驼峰式的名字 add-age
    //不return  默认会将参数进行传递
  }

  //第一个参数是emit事件的名称,拿到父组件中v-model传过来的数据
  //使得firName = firstName
  @Model('changeFirstName', { type: String })
  //属性名称
  firName!: string;

  //要修改v-model里的数据，那么emit就要写@Model里的事件名
  @Emit('changeFirstName')
  onchangeFirName(e: any) {
    return e.target.value;
  }
}
</script>

<style></style>
