<template>
  <div class="hello">
    <p>firstName:{{ firstName }}</p>
    <p>lastName:{{ lastName }}</p>
    <p>fullName:{{ fullName }}</p>
    <button @click="modifyFullName">changeName</button>
    <hr />
    <user
      v-for="item in userList"
      :key="item.id"
      v-bind="item"
      @on-remove="remove"
      @add-age="addAge"
      v-model="firstName"
    ></user>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import User from '../components/User.vue';
/*
vue-property-decorator 装饰器
@Component
@Watch
@Prop
@Model
@Emit

export default {
  name:"HelloWorld",
  data(){
    return{
      firstname:'zhang'
    }
  },
  computed:{
    fullName(){
      return this.firstName + "" + this.lastName
    }
    fullName:{
        get(){
          return this.firstName + "" + this.lastName
        }
        set(val){
          const arr = val.split(' ');
          this.firstName = arr[0];
          this.lastName = arr[1];
        }
      
    }
  }

  methods:{

  }
}

*/
interface IUser {
  id: number;
  userName: string;
  userAge: number;
  userGender?: number;
}

@Component({
  components: {
    User,
  },
})
export default class HelloWorld extends Vue {
  firstName: string = 'zhang';
  lastName: string = 'san';

  userList: Array<IUser> = [
    { id: 1, userName: 'zhangsan', userAge: 20, userGender: 0 },
    { id: 2, userName: 'lisi', userAge: 20 },
  ];
  //自定义属性
  @Prop() private msg!: string;

  //get 相当于computed
  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(val: string) {
    const arr = val.split(' ');
    this.firstName = arr[0];
    this.lastName = arr[1];
  }

  //如果set方法删除，则赋值就会失败，因为 Cannot assign to 'fullName' because it is a read-only property.

  //相当于methods
  modifyFullName(): void {
    this.fullName = 'li si';
    //使用赋值的方式的时候是走setter，即set的方法
  }

  printSomething(): void {
    // eslint-disable-next-line no-undef
    console.log('for test');
  }

  remove(id: number): void {
    // eslint-disable-next-line no-undef
    // console.log(id);
    const index = this.userList.findIndex((user) => user.id === id);
    this.userList.splice(index, 1);
  }

  addAge(id: number): void {
    const user: IUser = this.userList.find((user) => user.id === id);
    user.userAge++;
  }

  @Watch('firstName')
  onFirstNameChange(newVal: string, oldVal: string): void {
    // eslint-disable-next-line no-undef
    console.log(newVal, oldVal);
  }
  //钩子函数写法没变
  created() {
    this.fullName = 'wang wu';
  }

  mounted() {
    this.printSomething();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
