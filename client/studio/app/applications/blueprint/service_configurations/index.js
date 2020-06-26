app.applications.blueprint.service_configurations.index = blueprint => controller => (a,x) => [

  a.h5( 'Service configurations' ),
  a.hr,

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New service configuration' ),
      onclick: (e,el) => {
        controller.open( 'new_namespace' )
      },
      title: 'New service configurations',
    } ),
    app.close( controller, {title: 'Return to blueprint'}),
  ] ) ),

  blueprint.serviceConfigurations.map(
    ( item, i ) => a.div( app.button( {
      label: `${ i + 1 }. ${ item.object.publisher_namespace } ${ item.object.type_path }`,
      onclick: () => controller.open( `${i}` ),
    } ) )
  ),

]
