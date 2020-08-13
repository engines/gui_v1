app.applications.blueprint.schedules.params = blueprint => controller => (a,x) => {

  let schedule = blueprint.schedules.find( controller.params.schedule_id )

  return [

    a.h5( `Schedule ${ schedule.id + 1 } params` ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      schedule.params,
      (f) => [
        f.field( {
          key: 'actionator',
          as: 'many',
          vertical: true,
          label: false,
          form: (ff) => [
            ff.field( {
              key: 'name',
              as: 'input',
              type: 'hidden',
            } ),
            ff.field( {
              key: 'value',
              label: ff.object.name,
            } ),
          ]
        } ),
        a.hr,
        f.field( {
          key: 'surplus',
          as: 'many',
          vertical: true,
          label: false,
          form: (ff) => [
            ff.field( {
              key: 'name',
            } ),
            ff.field( {
              key: 'value',
            } ),
          ]
        } ),
      ]

    ),

  ]

}
