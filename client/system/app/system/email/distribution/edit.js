app.system.email.distribution.edit = controller => (a,x) => [

  a.h5(`Edit ${controller.params.distribution_name}`),

  app.http(
    '/-/-/system/uadmin/email/distribution_groups/edit',
    (distribution, el) => {
      el.$nodes = [app.form( {
        url: '/-/-/system/uadmin/email/distribution_groups/',
        method: 'PUT',
        success: (result) => controller.open('..', {distribution_name: result.name}),
        scope: 'api_vars',
        object: {distribution_group: distribution},
        form: (f) => [
          f.field({
            key: 'name',
            value: controller.params.distribution_name,
            as: 'hidden',
          }),
          f.field({
            key: 'distribution_group',
            as: 'one',
            label: false,
            vertical: true,
            form: (f) => [
              f.field({
                key: 'local_part',
                label: false,
                vertical: true,
                required: true,
                placeholder: 'Local part (before the @)',
              }),
              f.field({
                key: 'domain',
                as: 'select',
                label: false,
                vertical: true,
                selections: distribution.email_domains,
              }),
              f.field({
                key: 'description',
                as: 'textarea',
                label: false,
                vertical: true,
                required: true,
                placeholder: 'Description',
              }),
            ]
          }),
          f.buttons(),
        ]
      } )]
    },
    {
      query: {name: controller.params.distribution_name},
      placeholer: app.hourglass('Loading email')
    }
  ),

]
