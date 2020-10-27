import longList from './src/index.vue'

const p = {
  install(vue: any){
    vue.component('llist',longList)
  }
}

export default p