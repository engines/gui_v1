app.system.users.user.distributions.add = controller => (a,x) => [

  a.h5('Add distribution'),

  app.http(
    '/-/-/system/uadmin/users/accounts/email/distribution_groups/new',
    (data, el) => el.$nodes = [
      data.distribution_groups.length ? app.form({
        url: '/-/-/system/uadmin/users/accounts/email/distribution_groups/',
        scope: 'api_vars',
        success: () => controller.open('..', controller.query),
        form: f => [
          f.field({
            key: 'user_uid',
            as: 'hidden',
            value: controller.params.user_uid,
          }),
          f.field({
            key: 'distribution_group',
            as: 'one',
            label: false,
            vertical: true,
            form: (f) => [
              f.field({
                key: 'name',
                as: 'select',
                selections: data.distribution_groups,
                label: false,
                vertical: true,
              }),
            ]
          }),
          f.buttons(),
        ]
      }) : [
        a['i.placeholder']('No distributions available.'),
        a.br,
        app.btn(app.icon('fa fa-check', 'OK'), () => controller.open('..', controller.query)),
      ],
    ],
    {
      query: {
        user_uid: controller.params.user_uid,
      },
      placeholder: app.hourglass('Loading account'),
    }
  ),

]
