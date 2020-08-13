app.update_os.start = (controller) => (a,x) => [
  app.http(
    '/-/-/system/control/base_os/update',
    (response,el) => el.$send( 'app.os.updating' ),
    {
      placeholder: app.hourglass('Initiating update'),
      error: (result, el) => el.$nodes = [
        a['p.error'](result),
        app.btn(
          app.icon( "fa fa-check", "OK" ),
          () => controller.open('/'),
        ),
      ]
    }
  ),
]
