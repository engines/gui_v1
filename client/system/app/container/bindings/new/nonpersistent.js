app.container.bindings.new.nonpersistent = type => controller => (a,x) => {

  const name = controller.params.name

  let definitionPath = `/-/-/service_manager/service_definitions/${
    controller.params.publisher
  }/${
    controller.params.type
  }`;

  let submissionPath = `/-/-/containers/engine/${
    name
  }/services/non_persistent/${
    controller.params.publisher
  }/${
    controller.params.type
  }`;

  let form = (variables) => app.form({
    action: submissionPath,
    success: (result) => {

      // controller.open('../../nonpersistent', {})
      alert(`Result should be binding object. Currently getting: ${JSON.stringify(result)}. Can't redirect to binding, so redirecting to binding index instead.`)
      controller.open('../..');

    },
    scope: 'api_vars',
    form: (f) => [
      f.field({
        key: 'variables',
        as: 'one',
        vertical: true,
        label: false,
        form: (ff) => Object.values(variables).map((variable, i) => [
          ff.field(enginesFieldV1(variable)),
          variable.value === 'false' ?
          a['p.error'](
            app.icon(
              'fas fa-exclamation-triangle',
              `Field '${variable.name}' has 'false' string as its default value.`
            )
          ) : null,
        ]),
      }),
      f.buttons({
        cancel: {cancel: {onclick: () => controller.open('..', controller.query)}}
      }),
    ],
  });

  return [

    app.http(
      definitionPath,
      (definition, el) => {
        let variables = Object.values(definition.consumer_params);
        let queries = variables.map(
          (variable) => ({api_vars: {template_string: variable.value || '' }})
        );
        el.$nodes = [
          app.http(
            `/-/-/containers/engine/${name}/template`,
            (values, el) => {
              variables = variables.map((variable, i) => ({
                ...variable,
                value: values[i]
              }))
              el.$nodes = [
                a.h5(controller.params.service),
                form(variables),
              ];
            },
            {
              method: 'POST',
              query: queries,
              placeholder: app.hourglass( 'Loading new binding' )
            }
          ),
        ];
      },
      {
        placeholder: app.hourglass( 'Loading new binding' )
      }
    )
  ]

}
