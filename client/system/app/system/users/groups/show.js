app.system.users.groups.show = (controller) => (a,x) => [
  a.h5(`${controller.params.group_name} group`),
  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller ),
    ] )
  ),
  app.http(
    '/-/-/system/uadmin/users/groups/',
    (group, el) => {
      el.$nodes = group.members.length ? group.members.map((member) => [
        app.btn(
          app.icon('fa fa-caret-right', member),
          () => controller.open('/users/user', {user_uid: member})
        ),
        a.br,
      ]) : a.i('No members')
    },
    {
      query: {dn: controller.params.group_dn}
    }
  ),
]
