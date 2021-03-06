app.namespaces.workspace.services.definition = controller => (a,x) => [

  app.http(
    `/-/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/definition`,
    ( definition, el ) => el.$nodes = [

      a.h5( 'Service definition' ),

      a.p( 'Update workspace with definition from blueprint?' ),

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
        label: app.icon( 'fas fa-copy', 'Update' ),
        class: 'btn btn-primary',
        title: 'Update service definition',
        onclick: (e,el) => {

          el.$('^').$nodes = app.http(
            `/-/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/definition`,
            ( result, el ) => el.$nodes = [
              a.p( 'Workspace service definition has been updated.' ),
              app.button( {
                label: app.icon( 'fa fa-check', 'OK' ),
                onclick: (e,el) => {
                  controller.open( '..' )
                },
                title: 'Return to service',
              } ),
            ],
            {
              method: 'POST',
              placeholder: a.p(
                app.hourglass( 'Updating definition' )
              )
            }
          )

        },
      } ),

      a.hr,


      a['div.row']( [
        a['div.col']( [
          app.collapse( {
            label: 'From workspace repo',
            body: x.out( definition.workspace ),
          } )
        ] ),
        a['div.col']( [
          app.collapse( {
            label: 'Generated by blueprint',
            body: x.out( definition.blueprint ),
          } )
        ] ),
      ] ),

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading definition' )
      )
    }
  ),

]
