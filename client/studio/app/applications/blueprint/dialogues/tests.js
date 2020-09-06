app.applications.blueprint.dialogues.tests = blueprint => controller =>
(a,x) => {

  let dialogue = blueprint.dialogues.find( controller.params.dialogue_id )

  return [

    a.h5( `Dialogue ${ dialogue.id + 1 } tests` ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      dialogue.tests,
      (f) => f.field( {
        key: 'tests',
        as: 'many',
        vertical: true,
        form: f => [
          f.field( {
            key: 'label',
            required: true,
          } ),
          a.div([
            f.field( {
              key: 'parameters',
              as: 'codemirror',
              mode: 'javascript',
              value: '{}',
            } ),
            a['json-error'](a.input(null, {
              style: {
                border: 'none',
                margin: '0px',
                padding: '0px',
                height: '0px',
                width: '100%',
              },
              tabindex: 0,
            }), {
              style: {
                display: 'flex',
                marginTop: '-10px',
              }
            }),
          ], {
            $on: {
              'ax.appkit.form.control.change: check json object': (e, el) => {
                try {
                  el.$('json-error input').setCustomValidity('');
                  let value = JSON.parse(el.$('ax-appkit-form-control').$value())
                  if (ax.is.not.object(value)) ax.throw('Must be an object literal.')
                } catch (error) {
                  el.$('json-error input').setCustomValidity(error.message)
                }
              }
            }
          }),
        ],
      } ),
      data => {
        for ( let i in data.tests ) {
          data.tests[i].parameters = JSON.parse( data.tests[i].parameters )
        }
        return data
      },

    ),

  ]

}
