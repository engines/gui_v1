app.applications.blueprint.schedules.index = blueprint => controller => (a,x) => [

  a.h5( 'Schedules' ),
  a.hr,

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New schedule' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New schedule',
    } ),
  ] ) ),

  blueprint.schedules.map(
    ( item, i ) => [ app.button( {
      label: `${ i + 1 }. ${ item.object.label }`,
      onclick: () => controller.open( `${i}` ),
    } ) ]
  ),

]
