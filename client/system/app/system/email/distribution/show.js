app.system.email.distribution.show = controller => (a,x) => [

  a.h5('Distribution'),

  app.close( controller ),

  app.http(
    `/-/-/system/uadmin/email/distribution_groups/`,
    (distribution, el) => {
      el.$nodes = [

        app.float({
          left: [
            a.strong(controller.params.distribution_name),
            a.p(distribution.description ?
              distribution.description :
              a.i('No description')
            )
          ],
          right: app.btn(
            app.icon('fas fa-edit', 'Edit'),
            () => controller.open('edit', controller.query)
          ),
        }),
        a.hr,
        app.btn(
          app.icon( 'fa fa-plus' ),
          (e,el) => controller.open('add', controller.query)
        ),
        app.btn(
          app.icon( 'fa fa-minus' ),
          (e,el) => controller.open('remove', controller.query)
        ),
        a.br,
        distribution.email_addresses.length ?
        a.ul(distribution.email_addresses.map((address) =>
          a.li(address)
        )) :
        a.i('No email addresses'),
        a.hr,
        app.float({
          right: app.btn(
            app.icon('fas fa-trash', 'Delete'),
            () => controller.open('delete', controller.query)
          ),
        }),
      ]
    },
    {
      query: {name: controller.params.distribution_name},
      placeholder: app.hourglass('Loading email'),
    }
  ),


]
