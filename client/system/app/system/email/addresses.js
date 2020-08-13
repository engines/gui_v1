app.system.email.addresses = controller => (a,x) => [

  app.close( controller ),

  app.http(
    `/-/-/system/uadmin/email/email_addresses`,
    (addresses, el) => {
      el.$nodes = a['email-addresses']([
        a['p.form-inline']([
          a['input.form-control'](null, {
            $on: {
              'input: filter email addresses': (e, el) => {
                let value = el.value
                el.$('^email-addresses').$$('button').forEach((button) => {
                  button.$('^email-address').style.display =
                  button.innerText.toLowerCase().includes(value.toLowerCase()) ?
                  'unset' : 'none'
                })
              }
            }
          }),
          a['div.input-group-append'](a['.input-group-text'](app.icon('fa fa-search'))),
        ]),
        addresses.map((address) => a['email-address']([
          app.btn([ app.icon('fa fa-caret-right', address.email_address)], () => {
            address.source_type == 'distribution_group' ?
            controller.open('../distribution', {distribution_name: address.distribution_group_name}) :
            controller.open('../../users/user', {user_uid: address.user_uid})
          }),
          a.br,
        ])),
      ])
    }
  )

]
