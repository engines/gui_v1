app.system.users.groups.index = (controller) => (a,x) => [
  a.h5('Groups'),
  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller ),
    ] )
  ),
  app.http(
    '/-/-/system/uadmin/users/groups',
    (groups, el) => {
      el.$nodes = groups.map((group) => [
        app.btn(
          app.icon('fa fa-caret-right', group.name),
          () => controller.open('group', {group_name: group.name, group_dn: group.dn})
        ),
        a.br,
      ])
    }
  ),
]
