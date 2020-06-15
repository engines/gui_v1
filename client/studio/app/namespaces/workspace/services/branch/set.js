app.namespaces.workspace.services.branch.set = controller => (a,x) => [

  a.h3('Set branch'),

  app.http(
    `/-/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/branch`,
    ( branch, el ) => el.$nodes = [

      app.form( {
        url: `/-/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/branch`,
        object: branch,
        form: (f) => [
          f.field( {
            key: 'current',
            as: 'selectinput',
            customValueLabel: '+ New branch',
            label: false,
            required: true,
            vertical: true,
            selections: f.object.all,
            // placeholder: 'Select branch',
          } ),
          f.buttons( {
            cancel: {
              onclick: () => controller.open( '..' )
            }
          } ),
        ],
        success: ( result, el ) => {
          serviceBranch.$text = result.current
          el.$('^|appkit-asyncform').$nodes = [
            a.pre( result.message ),
            a['div.clearfix']( [
              app.button( {
                label: app.icon( 'fa fa-check', 'OK' ),
                onclick: (e,el) => {
                  controller.open( '..' )
                },
                title: 'Return to branch',
              } ),
            ] ),
          ]
        }
      } )

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading branch' )
      )
    }
  ),

]
