app.system.email.domains.index = controller => (a,x) => [

  a.h5( 'Domains' ),

  app.close( controller ),

  app.http(
    `/-/-/system/uadmin/email`,
    (email, el) => {
      el.$nodes = [

        app.float({
          left: [
            app.btn(
              app.icon( 'fa fa-plus' ),
              (e,el) => controller.open( 'add' )
            ),
            app.btn(
              app.icon( 'fa fa-minus' ),
              (e,el) => controller.open( 'remove' )
            ),
          ],
          right: app.btn( app.icon( 'fa fa-star', 'Default' ),
            () => controller.open( 'default' )
          ),
        }),



        a.ul( email.domains.map(
          domain => a.li( [
            domain,
            domain === email.default_domain ?
              app.icon( 'fas fa-star' ) : null
          ] )
        ) ),

      ]
    },
    {
      placeholder: app.hourglass('Loading domains'),
    }
  )


]
