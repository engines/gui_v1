app.applications.blueprint.dialogues.tests.perform = options => {

  let blueprint = options.blueprint
  let controller = options.controller
  let submission = options.submission

  let dialogue_id = controller.params.dialogue_id
  let test_id = submission.data.test_id

  let dialogue = blueprint.dialogues.find( dialogue_id )
  let test = dialogue.tests.find( submission.data.test_id )

  let component = (a,x) => a['app-dialogue-test']( [
    a['app-dialogue-test-output'],
    ...cc.dialogue.builder(
      dialogue.components.collection,
      test.parameters || {},
    ),
  ] )

  modal.$open( {
    size: 'lg',
    title: test.label,
    body: component,
  } )

  submission.complete()

}
