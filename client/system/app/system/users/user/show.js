app.system.users.user.show = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller ),
    ] )
  ),

  app.http(
    '/-/-/system/uadmin/users/accounts/',
    ( account, el ) => el.$nodes = [

      app.float({
        left: a.div(a.strong(account.name), {class: 'pt-2'}),
        right: app.btn(
          app.icon( 'fas fa-address-card', 'Name' ),
          () => controller.open( 'edit', controller.query ),
        ),
      }),

      app.float({
        left: a.div(
          'Groups',
          { class: 'pt-2' }
        ),
        right: [
          app.btn(
            app.icon( 'fa fa-plus' ),
            (e,el) => controller.open( 'add_group', controller.query )
          ),
          app.btn(
            app.icon( 'fa fa-minus' ),
            (e,el) => controller.open( 'remove_group', controller.query )
          ),
        ],
      }),
      account.groups.length ?
      a.ul(account.groups.map(group => a.li(group.name))) :
      a.div(a.i('No groups')),
      a.hr,

      account.email.mailbox ? [
        a['div.float-right']([
          app.btn(
            app.icon( 'fas fa-globe', 'Domain' ),
            () => controller.open( 'domain', controller.query )
          ),
          app.btn(
            app.icon( 'fas fa-times-circle', 'Disable' ),
            () => controller.open( 'disable', controller.query )
          ),
        ]),

        a.div( a.strong( account.email.mailbox ), { class: 'pt-2' } ),
        a.br,

        app.float({
          left: a.div(
            'Aliases',
            { class: 'pt-2' }
          ),
          right: [
            app.btn(
              app.icon( 'fa fa-plus' ),
              (e,el) => controller.open( 'add_alias', controller.query )
            ),
            app.btn(
              app.icon( 'fa fa-minus' ),
              (e,el) => controller.open( 'remove_alias', controller.query )
            ),
          ],
        }),
        account.email.aliases.length ?
        a.ul(account.email.aliases.map(alias => a.li(alias))) :
        a.div(a.i('None')),
        a.br,
        app.float({
          left: a.div(
            'Distributions',
            { class: 'pt-2' }
          ),
          right: [
            app.btn(
              app.icon( 'fa fa-plus' ),
              (e,el) => controller.open( 'add_distribution', controller.query )
            ),
            app.btn(
              app.icon( 'fa fa-minus' ),
              (e,el) => controller.open( 'remove_distribution', controller.query )
            ),
          ],
        }),
        account.email.distribution_groups.length ?
        a.ul(account.email.distribution_groups.map(distribution => a.li(distribution.name))) :
        a.div(a.i('None')),

      ] : [
        app.float({
          left: a.div(a.i('Email not enabled'), { class: 'pt-2' }),
          right: app.btn(
            app.icon( 'fas fa-mail-bulk', 'Enable' ),
            () => controller.open( 'emailable', controller.query)
          ),
        }),
      ],
      a.hr,
      app.float({
        left: app.btn(
          app.icon('fas fa-user-secret', 'Password'),
          () => controller.open(
            'password',
            controller.query
          )
        ),
        right: app.btn(
          app.icon('fas fa-trash', 'Delete'),
          () => controller.open(
            'delete',
            controller.query
          )
        ),
      }),
    ],
    {
      query: { uid: controller.params.user_uid },
      placeholder: app.hourglass( 'Loading account' ),
    }
  ),

]
