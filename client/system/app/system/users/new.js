app.system.users.new = controller => (a,x) => [

  app.form( {
    url: '/~/~/system/uadmin/users/accounts/',
    scope: 'api_vars[account]',
    form: f => [
      f.row( {
        columns: [
          f.field( {
            key: 'first_name',
            vertical: true,
          } ),
          f.field( {
            key: 'last_name',
            vertical: true,
          } ),
        ],
      } ),
      f.field( {
        key: 'uid',
        label: 'UID username',
        vertical: true,
      } ),
      f.field( {
        key: 'password',
        as: 'password',
        confirmation: true,
        vertical: true,
      } ),
      f.buttons(),
    ]
  } )

]
