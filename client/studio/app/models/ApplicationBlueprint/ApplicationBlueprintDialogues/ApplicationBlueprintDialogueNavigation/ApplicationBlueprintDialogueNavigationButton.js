class ApplicationBlueprintDialogueNavigationButton {

  constructor(object) {
    this.type = 'button'
    this.object = object || {}
  }

  get formObject() {
    return this.object
  }

  output() {
    return this.object
  }

}
