class ApplicationBlueprintDialogueOutput {

  constructor(object) {
    this.type = 'output'
    this.object = object
  }

  get formObject() {
    return this.object
  }

  output() {
    return this.object
  }

}
