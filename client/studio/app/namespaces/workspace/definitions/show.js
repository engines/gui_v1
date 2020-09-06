app.namespaces.workspace.definitions.show = controller => (a,x) => [

  app.http(
    `/-/namespaces/${ controller.params.namespace_id }/workspace/definitions/query`,
    ( definition, el ) => el.$nodes = [

      a.h5( definition.type ),

      a['div.clearfix']( [
        a['div.btn-group.float-right']( [
          app.close( controller, {title: 'Return to workspace'}),
        ] ),
      ] ),

      x.out( definition.object ),

      a.hr,

      a['div.clearfix']( a['div.btn-group.float-right'](
        app.button( {
          label: app.icon( 'fa fa-trash', 'Delete' ),
          class: 'btn app-btn-danger',
          onclick: (e,el) => {
            controller.open( 'delete', controller.query )
          },
          title: 'Delete namespace',
        } ),
      ) ),

    ],
    {
      query: controller.query,
      placeholder: a.p(
        app.hourglass( 'Loading definition' )
      )
    }
  ),

]
