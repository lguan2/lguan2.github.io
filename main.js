swal({
    html: 'test',
    allowOutsideClick: false,
    allowEscapeKey: false,
  
    onOpen: function () {
      swal.showLoading();
      swal.disableButtons();
      setTimeout(swal.disableLoading, 'test'.length * 500)
      setTimeout(swal.enableButtons, 'test'.length * 500) 
    }
  })
