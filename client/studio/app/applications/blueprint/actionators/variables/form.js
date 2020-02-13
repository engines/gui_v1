app.applications.blueprint.actionators.variables.
form = ( controller, blueprint, variable ) => (a,x) => {

  let heading = variable.isNew ?
                  `New actionator variable` :
                  `Edit actionator ${ variable.actionator.id + 1 } variable ${ variable.id + 1 }`

  return [

    a.h5( heading ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      variable,
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
          as: 'check',
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
              selections: app.selections.input_types
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
                  addable: true,
                  removable: true,
                  sortable: true,
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
                  as: 'check',
                } ),
              ]
            } ),
          ]
        } ),
      ]

    ),

  ]

}
