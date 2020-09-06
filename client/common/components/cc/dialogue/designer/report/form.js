cc.dialogue.designer.report.form = blueprint => f => f.field( {
  key: 'form',
  as: 'one',
  label: false,
  vertical: true,
  dependent: {
    key: 'type',
    pattern: '^form$',
  },
  form: ff => [

    cc.collapse( {
      label: 'Options',
      body: [
        ff.field( {
          key: 'submit',
          label: 'Submit',
          as: 'one',
          form: cc.dialogue.designer.button( blueprint ),
        } ),
      ],
    } ),

    cc.collapse( {
      label: 'Form',
      body: cc.dialogue.designer.form.components(ff),
    } ),

  ]
} )
