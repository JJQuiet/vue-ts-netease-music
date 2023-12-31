import { IState } from './store/interface'; // 导入您的 Vuex state 类型
import { Store } from 'vuex';
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'vue/types/vue' {
  interface Vue {
    $store: Store<any>;
  }
}