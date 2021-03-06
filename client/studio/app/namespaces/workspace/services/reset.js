app.namespaces.workspace.services.reset = controller => (a,x) => [

  a.p( 'Reset service? Local changes will be lost.' ),
  a.p( [

    app.button( {
      label: app.icon( 'fa fa-times', 'Cancel' ),
      class: 'btn btn-secondary',
      title: 'Cancel',
      onclick: (e,el) => {
        controller.open('..')
      },
    } ),
    ' ',
    app.button( {
      label: app.icon( 'fa fa-undo', 'Reset' ),
      class: 'btn btn-danger',
      title: 'Reset service',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/-/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/reset`,
          ( result, el ) => el.$nodes = [
            a.pre( result.message ),
            a['div.clearfix']( [
              app.button( {
                label: app.icon( 'fa fa-check', 'OK' ),
                onclick: (e,el) => {
                  controller.open( '..' )
                },
                title: 'Return to service',
              } ),
            ] ),
          ],
          {
            method: 'POST',
            placeholder: a.p(
              app.hourglass( 'Resetting branch' )
            )
          }
        )

      },
    } ),

  ] )

]
