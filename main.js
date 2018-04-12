
swal({
  html: 'test',
  allowOutsideClick: false,
  allowEscapeKey: false,

  onOpen: function () {
    var b = swal.getConfirmButton()
    b.hidden = true
    b.disabled = true
    
    setTimeout(function() {
      b.disabled = false
      b.hidden = false
    }, 'test'.length * 500) 
  }
})