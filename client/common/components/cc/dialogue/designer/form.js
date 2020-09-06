cc.dialogue.designer.form = blueprint => f => f.field( {
  key: 'form',
  as: 'one',
  label: false,
  vertical: true,
  dependent: {
    key: 'type',
    pattern: '^form$',
  },
  form: (ff) => [

    cc.collapse( {
      label: 'Components',
      body: cc.dialogue.designer.form.components(ff),
    } ),

    cc.collapse( {
      label: 'Buttons',
      body: [
        ff.field( {
          key: 'cancel',
          label: 'Cancel',
          as: 'one',
          form: cc.dialogue.designer.button( blueprint ),
        } ),
        ff.field( {
          key: 'submit',
          label: 'Submit',
          as: 'one',
          form: cc.dialogue.designer.button( blueprint ),
        } ),
      ],
    } ),

  ]
} )
