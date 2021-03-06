app.applications.blueprint.dialogues.show = blueprint => controller => (a,x) => {

  let dialogue = blueprint.dialogues.find( controller.params.dialogue_id )

  return [

    a.h5( `dialogue ${ dialogue.id + 1 }` ),
    a['div.clearfix']( a['div.float-right'](
      app.close( controller, {title: 'Return to dialogues'}),
    ) ),
    a.hr,
    a['div.clearfix']( a['div.float-right'](
      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),
    ) ),

    app.report( {
      object: dialogue.object,
      report: r => [
        r.field( {
          key: 'name',
        } ),
        a.hr,
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Parameters' ),
          title: 'Parameters',
          onclick: (e,el) => {
            controller.open( 'parameters' )
          },
        } ),
        x.out( dialogue.parameters.output() ),

        a.hr,
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Components' ),
          title: 'Components',
          onclick: (e,el) => {
            controller.open( 'components' )
          },
        } ),
        x.out( dialogue.components.output() ),

        a.hr,

        dialogue.tests.collection.length ? a['div.clearfix']( [
          a['div.btn-group.float-left']( [

            app.form( {
              action: (submission) => {
                app.applications.blueprint.dialogues.tests.
                  perform( {
                    blueprint: blueprint,
                    controller: controller,
                    submission: submission,
                  } )
              },
              form: (f) => [
                f.select( {
                  name: 'test_id',
                  required: true,
                  selections: dialogue.tests.map(
                    ( test, i ) => [ i, test.label ]
                  )
                } ),
                f.submit( {
                  label: app.icon( 'fas fa-flask' ),
                  title: 'Run test',
                } ),
              ],
              formTag: { class: 'form-inline' },
            } )
          ] ),
        ] ) : null,

        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Tests' ),
          title: 'Tests',
          onclick: (e,el) => {
            controller.open( 'tests' )
          },
        } ),
        x.out( dialogue.tests.output() ),

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
        title: 'Delete dialogue',
      } ),
    ) ),

  ]

}
