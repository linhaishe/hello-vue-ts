import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import IAboutState from './module/about';

interface IRootState {
  //这里就写初始化好的模块，about对应模块中的name
  about: IAboutState;
}

export default new Vuex.Store<IRootState>({
  // state: {},
  // mutations: {},
  // actions: {},
  // modules: {},
});
