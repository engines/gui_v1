app.namespaces.workspace.services.blueprint.configurators.variables.show = blueprint => controller => (a,x) => {

  let configurator = blueprint.configurators.find( controller.params.configurator_id )
  let variable = configurator.variables.find( controller.params.variable_id )

  return [

    a.h5( `Configurator ${ configurator.id + 1 } variable ${ variable.id + 1 }` ),
    a.hr,

    a['div.clearfix']( a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),
      app.close( controller, {title: 'Return to variables'}),
    ] ) ),

    app.report( {
      object: variable.object,
      report: (r) => [
        r.field( {
          key: 'name',
        } ),
        r.field( {
          key: 'value',
        } ),
        r.field( {
          key: 'mandatory',
          as: 'boolean',
        } ),
        a.hr,
        app.reportEnginesV1Input(r),
      ]
    } ),

    a.hr,
    a['div.clearfix']( a['div.btn-group.float-right'](
      app.button( {
        label: app.icon( 'fa fa-trash', 'Delete' ),
        class: 'btn app-btn-danger',
        onclick: (e,el) => {
          controller.open( 'delete' )
        },
        title: 'Delete configurator variable',
      } ),
    ) ),


  ]

}
