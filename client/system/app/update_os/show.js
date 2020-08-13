app.update_os.show = controller => (a,x) => [
  a.p('Update operating system?'),
  app.btn(
    app.icon( "fa fa-times", "Cancel" ),
    () => history.back(),
    {buttonTag: {class: 'btn btn-secondary'}}
  ),
  ' ',
  app.btn(
    app.icon( "fa fa-check", "Submit" ),
    () => controller.open('start'),
    {buttonTag: {class: 'btn btn-primary'}}
  ),
]
