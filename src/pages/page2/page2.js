/**
 * Created by Clovin on 03/11/2017.
 */
import './stylesheets/page2.css'
import Page from '../../lib/Page'
import Charts from '../../lib/Charts'

var initFunc = function () {
  this.chart = new Charts('.js-page2-chart', {
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        data: [
          {value: 17, name: '14级', itemStyle: {normal: {color: '#d13623'}}},
          {value: 29, name: '15级', itemStyle: {normal: {color: '#d1c036'}}},
          {value: 34, name: '16级', itemStyle: {normal: {color: '#8E60D1'}}},
          {value: 63, name: '17级', itemStyle: {normal: {color: '#1bb7d1'}}}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ],
    textStyle: {
      fontFamily: 'FZJLT',
      fontSize: 18
    }
  })
  this.chart.init()
}

var playFunc = function () {
  let p2 = document.getElementsByClassName('page2')[0]
  p2.addEventListener('animationstart', function () {
    document.getElementsByClassName('title2')[0].style.animation = 'FadeIn 1s linear 3500ms forwards'
    document.getElementsByClassName('title2')[0].addEventListener('animationend', function () {
      page2.chart.draw()
      document.getElementsByClassName('text_2')[0].style.animation = 'FadeIn 1s linear 250ms forwards'
    })
  })
  document.getElementsByClassName('text_2')[0].addEventListener('animationend', function () {
    p2.className = p2.className + ' ' + 'page2Change'
    document.getElementsByClassName('page2Change')[0].style.animation = 'P2Out 2s ease-in 1s forwards'
  })
}

let page2 = new Page('.page2', initFunc, playFunc)

export {page2 as default}
