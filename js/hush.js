if (typeof InstallTrigger !== 'undefined')
  $('.firefox').show()
else if (!!window.chrome && !(!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0))
  $('.chrome').show()

$('.button-add').click(function () {
  chrome.webstore.install('https://chrome.google.com/webstore/detail/hjmoaenjknbdehbiaeeijcppnljflkff', function () {
    $('.button-add').prop('disabled', true)
    $('.button-add').text('Thanks for installing!')
  }, function (e) { console.log(e) })
})