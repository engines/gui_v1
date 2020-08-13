app.service.show = controller => (a,x) => {

  const name = controller.params.name

  return app.http(
    [
      `/-/-/containers/service/${ name }/status`,
      `/-/-/containers/service/${ name }/websites`,
    ],
    ( [ status, websites ], el ) => {
      let container = {
        type: 'service',
        name: name,
        status: status,
        websites: websites,
      }
      el.$nodes = [
        a['app-container-state'](
          ax.x.transition.fade( {
            initial: app.container.show( 'service', controller, container )
          } ),
          {
            name: name,
            $state: container,
            $update: (el) => {
              el.$('ax-appkit-transition').$to( app.container.show( 'service', controller, el.$state ) )
            }
          }
        ),
      ]
    },
    {
      placeholder: app.hourglass( 'Loading container' )
    }
  )

}
