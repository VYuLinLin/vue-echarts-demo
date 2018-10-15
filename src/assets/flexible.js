;(function flexible(window, document) {
  var docEl = document.documentElement
  // 1rem 对应的像素
  var rem = 16
  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = rem * 0.75 + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    if (docEl.clientWidth) {
      rem = (docEl.clientWidth / 2880) * 16
    }
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function(e) {
    console.log(e)
    if (e.persisted) {
      setRemUnit()
    }
  })
})(window, document)

export default {}
