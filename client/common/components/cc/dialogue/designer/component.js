cc.dialogue.designer.component = blueprint => f => [

  f.field( {
    key: 'type',
    as: 'select',
    label: false,
    vertical: true,
    selections: {
      output: 'Output',
      form: 'Form',
      report: 'Report',
      template: 'Template',
      navigation: 'Navigation',
    },
  } ),

  cc.dialogue.designer.output(f),
  cc.dialogue.designer.form(blueprint)(f),
  cc.dialogue.designer.report(blueprint)(f),
  cc.dialogue.designer.template(f),
  cc.dialogue.designer.navigation(blueprint)(f),

]
