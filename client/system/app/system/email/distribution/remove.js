app.system.email.distribution.remove = controller => (a,x) => [

  a.h5(`Remove email from ${controller.params.distribution_name}`),

  app.http(
    '/-/-/system/uadmin/email/distribution_groups/',
    (distribution_group, el) => {
      el.$nodes = [app.form( {
        url: '/-/-/system/uadmin/email/distribution_groups/email_addresses/',
        method: 'DELETE',
        success: () => controller.open('..', controller.query),
        scope: 'api_vars',
        form: (f) => [
          f.field({
            key: 'distribution_group_name',
            value: controller.params.distribution_name,
            as: 'hidden',
          }),
          f.field({
            key: 'address',
            as: 'select',
            label: false,
            vertical: true,
            placeholder: 'Select an address',
            selections: distribution_group.email_addresses,
          }),
          f.buttons(),
        ]
      } )]
    },
    {
      query: {name: controller.params.distribution_name},
      placeholder: app.hourglass('Loading distributions')
    }
  ),

]
