class ApplicationBlueprintCapabilities {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {

    this.object = {
      allow: object.allow || 'default',
      selected: object.selected || [
        'SETPCAP',
        'MKNOD',
        'AUDIT_WRITE',
        'CHOWN',
        'NET_RAW',
        'DAC_OVERRIDE',
        'FOWNER',
        'FSETID',
        'KILL',
        'SETGID',
        'SETUID',
        'NET_BIND_SERVICE',
        'SYS_CHROOT',
        'SETFCAP',
      ],
    }

  }

  get formObject() {
    return this.object
  }

  formSubmit( formObject ) {
    this.assign( formObject )
  }

  output() {
    if (this.object.allow == 'default') {
      return {}
    } else if (this.object.allow == 'selected') {
      return {
        allow: 'selected',
        selected: this.object.selected,
      }
    } else {
      return {
        allow: this.object.allow,
      }
    }
  }

}
