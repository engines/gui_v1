app.system.email.distribution.add = controller => (a,x) => [

  a.h5(`Add email to ${controller.params.distribution_name}`),

  app.http(
    '/-/-/system/uadmin/email/distribution_groups/email_addresses/new',
    (data, el) => {
      el.$nodes = [app.form( {
        url: '/-/-/system/uadmin/email/distribution_groups/email_addresses/',
        success: () => controller.open('..', controller.query),
        scope: 'api_vars',
        form: (f) => [
          f.field({
            key: 'distribution_group_name',
            value: controller.params.distribution_name,
            as: 'hidden',
          }),
          f.field({
            key: 'email_address',
            label: false,
            vertical: true,
            as: 'one',
            form: (f) => [
              f.field({
                key: 'address',
                as: 'combobox',
                label: false,
                vertical: true,
                combobox: {
                  customValueLabel: '⬇ Enter an address',
                },
                placeholder: 'Select or enter an address',
                selections: data.email_addresses,
              }),
            ],
          }),
          f.buttons(),
        ]
      } )]
    },
    {
      query: {distribution_group_name: controller.params.distribution_name},
      placeholer: app.hourglass('Loading email')
    }
  ),

]
