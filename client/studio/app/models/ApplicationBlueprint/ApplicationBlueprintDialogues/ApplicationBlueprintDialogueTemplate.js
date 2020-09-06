class ApplicationBlueprintDialogueTemplate {

  constructor(object) {
    this.type = 'template'
    this.object = object
  }

  get formObject() {
    return this.object
  }

  output() {
    return this.object
  }

}
