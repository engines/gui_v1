app.namespaces.workspace.push = controller => (a,x) => [

  a.p( 'Push commits?' ),
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
      label: app.icon( 'fas fa-file-upload', 'Push' ),
      class: 'btn btn-primary',
      title: 'Push commits',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/-/namespaces/${ controller.params.namespace_id }/workspace/push`,
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
              app.hourglass( 'Pushing workspace' )
            )
          }
        )

      },
    } ),

  ] )

]
