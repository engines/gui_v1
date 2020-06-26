app.system.email.setup = controller => (a,x) => [

  a.h5( 'Setup' ),

  app.http(
    `/-/-/system/domains/`,
    (domains, el) => {
      domains = Object.keys(domains)
      el.$nodes = [
        app.form({
          action: '/-/-/system/uadmin/email/default_domain',
          scope: 'api_vars',
          success: () => controller.open('..'),
          form: (f) => [
            f.field({
              key: 'default_domain',
              label: false,
              vertical: true,
              as: 'one',
              form: (f) => [
                f.field({
                  key: 'name',
                  label: false,
                  vertical: true,
                  as: 'select',
                  selections: domains,
                }),
              ],
            }),
            f.buttons(),
          ]
        })
      ]
    }
  ),

]
