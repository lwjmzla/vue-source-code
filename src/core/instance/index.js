import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue) ) { // !不是生产环境 而且 不是Vue实例
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options) // ! 里面是挂载原型方法
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
