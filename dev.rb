ENV['MODE'] = 'studio'

ENV['ENGINES_SYSTEM_IP'] = '172.16.162.130'

`npm install @engines/ax@latest`
`npm install @engines/ax-appkit@latest`
`npm install @engines/ax-appkit-chartjs@latest`
`npm install @engines/ax-appkit-codemirror@latest`
`npm install @engines/ax-appkit-dropdown@latest`
`npm install @engines/ax-appkit-easymde@latest`
`npm install @engines/ax-appkit-field@latest`
`npm install @engines/ax-appkit-field-dependent@latest`
`npm install @engines/ax-appkit-field-extras@latest`
`npm install @engines/ax-appkit-field-nest@latest`
`npm install @engines/ax-appkit-field-nest-prefab@latest`
`npm install @engines/ax-appkit-filepond@latest`
`npm install @engines/ax-appkit-form-async@latest`
`npm install @engines/ax-appkit-markedjs@latest`
`npm install @engines/ax-appkit-panes@latest`
`npm install @engines/ax-appkit-twitter-bootstrap4@latest`
`npm install @engines/ax-appkit-xtermjs@latest`

Rainbows! do
  use :ThreadSpawn
end
