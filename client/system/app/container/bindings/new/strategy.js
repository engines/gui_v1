app.container.bindings.new.strategy = type => controller => (a,x) => {

  return [
    a.h5(controller.params.service),
    app.http(
      [
        `/-/-/service_manager/persistent_services/${controller.params.publisher}/${controller.params.type}`,
        `/-/-/service_manager/orphan_services/${controller.params.publisher}/${controller.params.type}`,
      ],
      ([shareables, adoptables], el) => el.$nodes = [
        app.form({
          action: (submission) => {
            let query = {
              publisher: controller.params.publisher,
              type: controller.params.type,
              service: controller.params.service,
              strategy: submission.data.strategy,
              share: submission.data.share || '',
              adopt: submission.data.adopt || '',
            };
            controller.open('../persistent', query);
          },
          form: (f) => [
            f.field({
              key: 'strategy',
              as: 'select',
              horizontal: true,
              selections: {
                create: 'Create new',
                share: 'Share existing',
                adopt: 'Adopt orphan',
              }
            }),
            f.field({
              key: 'share',
              as: 'select',
              horizontal: true,
              selections: shareables.map((shareable) => `${shareable.parent_engine}:${shareable.service_handle}`),
              dependent: {
                key: 'strategy',
                value: 'share'
              }
            }),
            f.field({
              key: 'adopt',
              as: 'select',
              horizontal: true,
              selections: adoptables.map((adoptable) => `${adoptable.parent_engine}:${adoptable.service_handle}`),
              dependent: {
                key: 'strategy',
                value: 'adopt'
              }
            }),
            f.buttons(),
          ]
        }),
      ],
      {
        placeholder: app.hourglass('Loading available bindings')
      }
    )
  ]

}
