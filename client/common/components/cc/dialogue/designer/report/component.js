cc.dialogue.designer.report.component = blueprint => f => [

  f.field( {
    key: 'type',
    as: 'select',
    label: false,
    vertical: true,
    selections: [
      { value: 'field', label: 'Field' },
      { value: 'fieldset', label: 'Fieldset' },
      { value: 'row', label: 'Row' },
      { value: 'form', label: 'Form' },
      { value: 'navigation', label: 'Navigation' },
      { value: 'template', label: 'Template' },
    ],
  } ),

  cc.dialogue.designer.report.field( blueprint )(f),
  cc.dialogue.designer.report.fieldset( blueprint )(f),
  cc.dialogue.designer.report.row( blueprint )(f),
  cc.dialogue.designer.report.form( blueprint )(f),
  cc.dialogue.designer.navigation( blueprint )(f),
  cc.dialogue.designer.report.template(f),

]
