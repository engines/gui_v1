app.applications.blueprint.dialogues.parameters = blueprint => controller =>
(a,x) => {

  let dialogue = blueprint.dialogues.find( controller.params.dialogue_id )

  return [

    a.h5( `Dialogue ${ dialogue.id + 1 } parameters` ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      dialogue.parameters,
      f => [
        f.field( {
          key: 'parameters',
          as: 'many',
          vertical: true,
          form: ff => [
            ff.field( {
              key: 'method',
              as: 'select',
              placeholder: 'None',
              selections: {
                action: 'Action',
                assign: 'Assign',
                // parse: 'Parse',
              }
            } ),
            ff.field( {
              key: 'action',
              as: 'select',
              label: false,
              placeholder: 'Select action',
              selections: blueprint.actionators.map(
                actionator => actionator.object.name
              ),
              required: true,
              dependent: {
                key: 'method',
                value: 'action',
              }
            } ),
            ff.field( {
              key: 'assign',
              as: 'one',
              label: false,
              form: fff => [
                fff.field( {
                  key: 'key',
                  required: true,
                } ),
                fff.field( {
                  key: 'value',
                  as: 'code',
                  placeholder: 'Template string',
                } ),
              ],
              dependent: {
                key: 'method',
                value: 'assign',
              }
            } ),
          ],
        } ),
      ]
    ),

  ]

}
