app.reboot.show = controller => (a,x) => [
  a.p('Reboot system?'),
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
