app.system.users.user.distributions.remove = controller => (a,x) => [

  a.h5( 'Remove distribution' ),

  app.http(
    '/-/-/system/uadmin/users/accounts/',
    ( account, el ) => el.$nodes = [app.form( {
      url: '/-/-/system/uadmin/email/distribution_groups/email_addresses/',
      method: 'DELETE',
      scope: 'api_vars',
      success: () => controller.open('..', controller.query),
      form: f => [
        f.field({
          key: 'distribution_group_name',
          as: 'hidden',
        }),
        a({
          $on: { 'input: update distribution_group_name field': (e,el) => {
            let name = e.target.options[e.target.selectedIndex].innerHTML;
            el.$('^form [name="api_vars[distribution_group_name]"]').value = name
          }},
          $nodes: [
            f.field({
              key: 'address',
              as: 'select',
              selections: account.email.distribution_groups.map(
                distribution => [distribution.email_address, distribution.name]
              ),
              vertical: true,
              label: false,
              placeholder: 'Select distribution'
            }),
          ]
        }),
        f.buttons(),
      ]
    } )],
    {
      query: {
        uid: controller.params.user_uid,
      },
      placeholder: app.hourglass( 'Loading account' ),
    }
  ),

]
