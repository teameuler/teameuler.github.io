$('.button-add').click(function () {
  chrome.webstore.install('https://chrome.google.com/webstore/detail/hjmoaenjknbdehbiaeeijcppnljflkff', function () {
    $('.button-add').prop('disabled', true)
    $('.button-add').text('Thanks for installing!')
  }, function (e) { console.log(e) })
})