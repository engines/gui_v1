cc.dialogue.designer.form.component = f => [

  f.field( {
    key: 'type',
    as: 'select',
    label: false,
    vertical: true,
    selections: [
      { value: 'field', label: 'Field' },
      { value: 'fieldset', label: 'Fieldset' },
      { value: 'row', label: 'Row' },
      { value: 'template', label: 'Template' },
    ],
  } ),

  cc.dialogue.designer.form.field(f),
  cc.dialogue.designer.form.fieldset(f),
  cc.dialogue.designer.form.row(f),
  cc.dialogue.designer.report.template(f)

]
