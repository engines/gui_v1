app.system.email.distribution.delete = controller => (a,x) => [

  a.h5(`Delete ${controller.params.distribution_name}`),

  app.http(
    `/-/-/system/uadmin/email/distribution_groups/`,
    (distribution, el) => {
      el.$nodes = [

        distribution.email_addresses.length ?
        [
          a.p('Distribution cannot be deleted while it has addresses.'),
          app.btn(
            app.icon('fa fa-check', 'OK'),
            () => controller.open('..', controller.query),
            { class: 'btn btn-primary' }
          )
        ] :
        [
          app.http(
            `/-/-/system/uadmin/email/distribution_groups/`,
            () => controller.open('../..'),
            {
              method: 'DELETE',
              query: {name: controller.params.distribution_name},
              placeholder: app.hourglass('Deleteing distribution'),
            }
          )
        ]
      ]
    },
    {
      query: {name: controller.params.distribution_name},
      placeholder: app.hourglass('Loading email'),
    }
  ),

]
