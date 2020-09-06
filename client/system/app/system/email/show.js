app.system.email.show = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller ),
    ] )
  ),

  app.http(
    `/-/-/system/uadmin/email`,
    (email, el) => {
      el.$nodes = email.default_domain ? [
        app.float({
          left: app.btn(
            app.icon('fas fa-globe', 'Domains'),
            () => controller.open('domains')
          ),
          right: app.btn(
            app.icon('fas fa-search', 'Addresses'),
            () => controller.open('addresses')
          ),
        }),
        a.hr,
        app.float({
          right: app.btn(
            app.icon('fa fa-plus', 'Distribution'),
            (e,el) => controller.open('new')
          ),
        }),
        email.distribution_groups.length ?
        email.distribution_groups.map((distribution) =>
          a.div(app.btn([
            app.icon('fa fa-caret-right', distribution.name),
            a.small(distribution.description),
          ], () => {
            controller.open('distribution', {distribution_name: distribution.name})
          }))
        ) :
        a.i('No distribution groups'),
      ] : [
        a.p('Email needs setup.'),
        app.btn(app.icon('fa fa-globe', 'Setup'), () => controller.open('setup')),
      ]
    },
    {
      placeholder: app.hourglass('Loading email'),
    }
  ),

]
