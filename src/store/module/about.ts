import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';

import store from '@/store';

const getNewList = () => {
  return new Promise<Array<number>>((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5, 6]);
    }, 500);
  });
};

//interface导出，可以只导出IAboutState,在vuex里注册

export interface IAboutState {
  count: number;
  list: Array<number>;
}

/*
{
    state:{
        count:1,
        list:[1,2,3,4]
    }
}
*/

//初始化模块,name是模块的名称，方便在vuex中注册的时候一一对应。
@Module({
  name: 'about',
  //表示动态的模块
  dynamic: true,
  store,
})
export default class About extends VuexModule implements IAboutState {
  count: number = 1;
  list: Array<number> = [];

  //类似于computed，计算state的计算属性
  //getter
  get filterList(): Array<number> {
    return this.list.filter((item) => item % 2 === 0);
  }

  @Mutation
  updateCount(payload: number): void {
    this.count += payload;
  }

  @Mutation
  updateList(payload: Array<number>): void {
    this.list = payload;
  }

  // @Action
  // async getList(): Promise<boolean> {
  //   // console.log('获取数据成功');
  //   // return Promise.resolve(true);
  //   const res: Array<number> = await getNewList();
  //   this.updateList(res);
  //   return Promise.resolve(true);
  // }

  @Action
  async getList(): Promise<void> {
    const res: Array<number> = await getNewList();
    this.updateList(res);
  }
}

//about store module 导出
//仓库导出后就可以在所需要的模块中引入，对仓库进行使用了

export const AboutStore = getModule(About);
