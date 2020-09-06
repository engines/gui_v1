app.applications.blueprint.schedules.show = blueprint => controller => (a,x) => {

  let schedule = blueprint.schedules.find( controller.params.schedule_id )

  return [

    a.h5( `Schedule ${ schedule.id + 1 }` ),
    a.hr,

    a['div.clearfix']( a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),
      app.close( controller, {title: 'Return to schedules'}),
    ] ) ),

    app.report( {
      object: schedule.object,
      report: (r) => [
        r.field( {
          key: 'label',
          required: true,
        } ),
        r.field( {
          key: 'timespec',
          as: 'one',
          report: (rr) => [
            rr.field( {
              key: 'minute',
            } ),
            rr.field( {
              key: 'hour',
            } ),
            rr.field( {
              key: 'day_of_month',
            } ),
            rr.field( {
              key: 'month',
            } ),
            rr.field( {
              key: 'day_of_week',
            } ),
          ]
        } ),
        r.field( {
          key: 'instruction',
        } ),
        r.field( {
          key: 'actionator',
          as: 'one',
          report: (rr) => [
            rr.field( {
              key: 'name',
              vertical: true,
              label: false,
            } ),
          ],
          dependent: {
            key: 'instruction',
            value: 'action'
          }
        } ),

        r.object.instruction === 'action' ? [
          a.hr,
          app.button( {
            label: app.icon( 'fa fa-caret-right', 'Params' ),
            title: 'List params',
            onclick: (e,el) => {
              controller.open( 'params' )
            },
          } ),
          x.out( schedule.params.output() ),
        ] : null,

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
        title: 'Delete schedule',
      } ),
    ) ),


  ]

}
