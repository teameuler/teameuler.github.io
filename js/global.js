if (typeof InstallTrigger !== 'undefined')
  $('.firefox').show()
else if (!!window.chrome && !(!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0))
  $('.chrome').show()
else
  $('.browser').show()

$('.chrome-add').click(function () {
  chrome.webstore.install('https://chrome.google.com/webstore/detail/hjmoaenjknbdehbiaeeijcppnljflkff', function () {
    $('.chrome-add').prop('disabled', true)
    $('.chrome-add').text('Thanks for installing!')
  }, function (e) { console.log(e) })
})