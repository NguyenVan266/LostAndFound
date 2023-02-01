const next = document.querySelector('.next-cmt')
const prev = document.querySelector('.prev-cmt')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')

var translateY = 0
var count = commentItem.length

console.log(next)

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})
