swal({
  title: '<redirecting-text>' + 'Redirecting...' + '<redirecting-text>',
  width: '262px',
  height: '108px',
  imageUrl: 'spinner.gif',
  imageWidth: 48,
  imageHeight: 48,
  animation: true,
  showConfirmButton: false,
  onOpen: function () {
    setTimeout(() => {
      swal({
          title: '<redirecting-title>' + 'REDIRECTION TIMED OUT' + '<redirecting-title>',
          html: '<redirecting-text>' + 'Lorem ipsum dolor sir amet.' + '<redirecting-text>',
          width: '262px',
          height: '95px',
          allowOutsideClick: false,
          allowEscapeKey: false,
          //confirmButtonClass: 'confirm-button',
          confirmButtonText: '<button-text>' + 'OK' + '<button-text>',
          buttonsStyling: false
      });
    }, 2000)
  }
})
