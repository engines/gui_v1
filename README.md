Engines GUI
-----------

Sinatra modular style, with `config.ru`.

Static assets served from `/public`.

Needs persistent directory `/data/`

Run app:
```console
npm i
thin start
```

To allow sessions to persist after restart, set `ENV['SESSION_SECRET']`.

Default user timeout is 15 mins. If you want different, set `ENV['SESSION_TIMEOUT_MINUTES']`.

System
------

Set `ENV['ENGINES_SYSTEM_IP']`

To enable install from library, set `ENV['APPLICATION_LIBRARY_URL']`

To enable side loading of blueprints, set `ENV['ENABLE_SIDE_LOAD']`.


Studio
------

To run in 'Studio' mode, set `ENV['MODE']` to `studio`.

Set a password with `ENV['USER_PASSWORD']`.
