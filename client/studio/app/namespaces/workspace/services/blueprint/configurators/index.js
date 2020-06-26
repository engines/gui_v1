app.namespaces.workspace.services.blueprint.configurators.index = blueprint => controller => (a,x) => [

  a.h5( 'Configurators' ),
  a.hr,

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New configurator' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New configurator',
    } ),
    app.close( controller, {title: 'Return to blueprint'}),
  ] ) ),

  blueprint.configurators.map(
    ( item, i ) => a.div( app.button( {
      label: `${ i + 1 }. ${ item.object.name }`,
      onclick: () => controller.open( `${i}` ),
    } ) )
  ),

]
