app.system.email.distribution.new = controller => (a,x) => [

  a.h5( 'New distribution' ),

  app.http(
    '/-/-/system/uadmin/email',
    (email, el) => {
      el.$nodes = [app.form( {
        url: '/-/-/system/uadmin/email/distribution_groups/',
        success: (result) => controller.open( '../distribution', {distribution_name: result.name} ),
        scope: 'api_vars',
        form: (f) => [
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
                selections: email.domains,
              }),
              f.field({
                key: 'description',
                as: 'textarea',
                label: false,
                vertical: true,
                placeholder: 'Description',
              }),
            ]
          }),
          f.buttons(),
        ]
      } )]
    },
    {
      placeholder: app.hourglass('Loading new distribution')
    }
  ),

]
