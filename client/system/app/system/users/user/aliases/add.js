// def create_users_email_alias( user_uid, email_alias )
//   @system_api.post 'system/uadmin/users/accounts/email/aliases/', user_uid: user_uid, alias: email_alias
// end
//
// def delete_users_email_alias( user_uid, address )
//   @system_api.delete 'system/uadmin/users/accounts/email/aliases/', user_uid: user_uid, address: address
// end

app.system.users.user.aliases.add = controller => (a,x) => [

  a.h5( 'Add alias' ),

  app.http(
    '/-/-/system/uadmin/users/accounts/email/edit',
    ( mailbox, el ) => el.$nodes = [app.form( {
      url: '/-/-/system/uadmin/users/accounts/email/aliases/',
      // method: 'PUT',
      scope: 'api_vars',
      success: () => controller.open( '..', controller.query ),
      object: {
        user_uid: controller.params.user_uid,
        email: {
          domain_name: mailbox.domain_name,
        },
      },
      form: f => [
        f.field({
          key: 'user_uid',
          as: 'hidden',
        }),
        f.field({
          key: 'alias',
          as: 'one',
          label: false,
          vertical: true,
          form: (f) => [
            f.field({
              key: 'address',
              as: 'hidden',
            }),
            a({
              $on: { 'input: update address field': (e,el) => {
                let local = el.$('^form [name="api_vars[alias][local_part]"]').value
                let domain_name = el.$('^form [name="api_vars[alias][domain_name]"]').value
                el.$('^form [name="api_vars[alias][address]"]').value = `${local}@${domain_name}`
              }},
              $nodes: [
                f.row({
                  columns: [
                    f.field({
                      key: 'local_part',
                      label: false,
                      vertical: true,
                      required: true,
                    }),
                    f.field({
                      key: 'domain_name',
                      as: 'select',
                      selections: mailbox.email_domains,
                      label: false,
                      vertical: true,
                    }),
                  ]
                }),
              ]
            })
          ]
        }),
        f.buttons(),
      ]
    } )],
    {
      query: {
        user_uid: controller.params.user_uid,
      },
      placeholder: app.hourglass( 'Loading account' ),
    }
  ),

]
