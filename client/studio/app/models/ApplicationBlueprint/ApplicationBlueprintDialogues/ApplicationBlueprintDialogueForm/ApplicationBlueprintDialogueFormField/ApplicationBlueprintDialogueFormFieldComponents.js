class ApplicationBlueprintDialogueFormFieldComponents {

  constructor(collection) {
    this.assign(collection)
  }

  assign(collection) {
    this.components = new ApplicationBlueprintDialogueFormComponents(collection)
  }

  get formObject() {
    return this.components.formObject
  }

  output() {
    return this.components.output()
  }

}
