class ApplicationBlueprintDialogueForm {

  constructor(object) {
    this.type = 'form'
    this.assign( object )
  }

  assign( object ) {
    this.components = new ApplicationBlueprintDialogueFormComponents(object.components || [])
  }

  get formObject() {
    return {
      components: this.components.formObject
    }
  }

  output() {
    return {
      components: this.components.output(),
    }
  }

}
