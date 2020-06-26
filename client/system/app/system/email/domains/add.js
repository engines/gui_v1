app.system.email.domains.add = controller => (a,x) => [

  a.h5( 'Add domain' ),

  app.http(
    [
      `/-/-/system/uadmin/email`,
      '/-/-/system/domains/',
    ],
    ([email, domains], el) => {
      domains = Object.keys(domains).filter((domain) => !email.domains.includes(domain))
      el.$nodes = [app.form( {
        url: '/-/-/system/uadmin/email/domains/',
        success: () => controller.open( '..' ),
        scope: 'api_vars',
        form: (f) => [
          f.field({
            key: 'domain',
            label: false,
            vertical: true,
            as: 'one',
            form: (f) => [
              f.field({
                key: 'name',
                as: 'combobox',
                label: false,
                vertical: true,
                combobox: {
                  customValueLabel: '⬇ Enter a domain',
                },
                value: domains[0] ? domains[0] : '',
                selections: domains,
              }),
            ],
          }),
          f.buttons(),
        ]
      } )]
    },
    {
      placeholer: app.hourglass('Loading email')
    }
  ),

]
