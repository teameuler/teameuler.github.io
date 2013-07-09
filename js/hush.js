$('#hero-add').click(function () {
  chrome.webstore.install(function () {
    $('#hero-add').prop('disabled', true)
    $('#hero-add').text('Thanks for installing!')
  })
})

if (chrome.app.isInstalled) {
  $('#hero-add').prop('disabled', true)
  $('#hero-add').text('Thanks for installing!')
}