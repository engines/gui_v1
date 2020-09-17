Engines GUI
-----------

Sinatra modular style, with `config.ru`.

Static assets served from `/public`.

Needs persistent directory `/data/`

Run app:
```console
npm i
bundle
rainbows
```

Run app in development with `./dev`.

To allow sessions to persist after restart, set `ENV['SESSION_SECRET']`.

Default user timeout is 15 mins. Otherwise set `ENV['SESSION_TIMEOUT_MINUTES']`.

Default log dir is './log'. Otherwise set ENV['LOG_DIRECTORY']

System
------

Set `ENV['ENGINES_SYSTEM_IP']`

To enable install from library, set `ENV['APPLICATION_LIBRARY_URL']`

Studio
------

To run in 'Studio' mode, set `ENV['MODE']` to `studio`.

Set a password with `ENV['USER_PASSWORD']`.

Specifiy location of ssh public key file with `ENV['PUBLIC_KEY_FILEPATH']`.
