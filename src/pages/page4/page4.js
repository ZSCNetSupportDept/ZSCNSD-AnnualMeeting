import './stylesheets/page4.css'
import Page from '../../lib/Page'

let initFunc = function () {
  console.log('init')
}

let playFunc = function () {
  console.log('draw')
}

let page4 = new Page('page4', initFunc, playFunc)

export {page4 as default}
