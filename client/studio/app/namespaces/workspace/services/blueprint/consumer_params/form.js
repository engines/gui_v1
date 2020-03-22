app.namespaces.workspace.services.blueprint.consumer_params.
form = ( controller, blueprint, consumerParam ) => (a,x) => {

  let heading = consumerParam.isNew ?
    'New consumer param':
    `Edit consumer param ${ consumerParam.id + 1 }`

  return [

    a.h5( heading ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      consumerParam,
      (f) => [
        f.field( {
          key: 'name',
          required: true,
        } ),
        f.field( {
          key: 'value',
        } ),
        f.field( {
          key: 'mandatory',
          as: 'checkbox',
        } ),
        f.field( {
          key: 'immutable',
          as: 'checkbox',
        } ),
        f.field( {
          key: 'ask_at_build_time',
          as: 'checkbox',
        } ),
        f.field( {
          key: 'build_time_only',
          as: 'checkbox',
        } ),

        a.hr,
        f.field( {
          key: 'input',
          as: 'one',
          layout: 'vertical',
          form: (ff) => [
            ff.field( {
              key: 'type',
              as: 'select',
              placeholder: ' ',
              selections: app.selections.v0_input_types
            } ),
            ff.field( {
              key: 'label',
            } ),
            ff.field( {
              key: 'title',
            } ),
            ff.field( {
              key: 'comment',
            } ),
            ff.field( {
              key: 'hint',
            } ),
            ff.field( {
              key: 'placeholder',
            } ),
            ff.field( {
              key: 'validation',
              as: 'one',
              form: (fff) => [
                fff.field( {
                  key: 'pattern',
                } ),
                fff.field( {
                  key: 'message',
                } ),
              ]
            } ),
            ff.field( {
              key: 'collection',
              as: 'one',
              form: (fff) => [
                fff.field( {
                  key: 'items',
                  as: 'table',
                  label: false,
                  layout: 'vertical',
                  form: (ffff) => [
                    ffff.field( {
                      key: 'value',
                    } ),
                    ffff.field( {
                      key: 'label',
                    } ),
                  ]
                } ),
                fff.field( {
                  key: 'include_blank',
                  as: 'checkbox',
                } ),
              ]
            } ),
          ]
        } ),
      ],

    ),

  ]

}
