class ApplicationBlueprintDialogueComponents {

  constructor( dialogue, collection ) {
    this.dialogue = dialogue
    this.assign( collection || [] )
  }

  assign( collection ) {
    this.collection = collection.map((item) => {
      if (item.type == 'navigation') {
        return new ApplicationBlueprintDialogueNavigation(item.navigation || {})
      } else if (item.type == 'form') {
        return new ApplicationBlueprintDialogueForm(item.form || {})
      } else if (item.type == 'report') {
        return new ApplicationBlueprintDialogueReport(item.report || {})
      } else if (item.type == 'template') {
        return new ApplicationBlueprintDialogueTemplate(item.template || {})
      } else if (item.type == 'output') {
        return new ApplicationBlueprintDialogueOutput(item.output || {})
      }
    })
  }

  get formObject() {
    return {
      components: this.collection.map((item) => ({
        type: item.type,
        [item.type]: item.formObject
      }))
    }
  }

  formSubmit( formObject ) {
    this.assign(Object.values(formObject.components || {}))
  }

  output() {
    return ax.x.lib.compact(
      this.collection.map((item) => ({
        type: item.type,
        [item.type]: item.output()
      }))
    )
  }

}
