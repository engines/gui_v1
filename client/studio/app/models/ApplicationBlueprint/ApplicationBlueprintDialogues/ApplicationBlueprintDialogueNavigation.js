class ApplicationBlueprintDialogueNavigation {

  constructor(object) {
    this.type = 'navigation'
    this.assign( object )
  }

  assign( object ) {
    this.components = new ApplicationBlueprintDialogueNavigationComponents(object.components || [])
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
