app.system.update = controller => (a,x) => [

  a.h3( "Update" ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller ),
    ] )
  ),

  a['app-system-update-http'](
    [
      a.p( 'Update Engines system?' ),
      app.btn(
        app.icon( "fa fa-check", "OK" ),
        (e,el) => el.$('^app-system-update-http').$start(),
      ),
    ],
    {
      $start: function() {
        this.$nodes = app.http(
          '/-/-/system/control/engines_system/update',
          ( response, el ) => { el.$send( 'app.updating' ) },
          { placeholder: app.hourglass( 'Starting update...' ) }
        )
      },
    }
  ),

]
