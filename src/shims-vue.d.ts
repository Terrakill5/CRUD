/* eslint-disable */
/* Esto se usa para declarar variables globales 
y TypeScript este enterado de ellas (como router)
y asi no haya problemas*/
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
