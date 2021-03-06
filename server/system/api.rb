require 'yajl'

module Server
  class Api < Sinatra::Base

    require_relative 'api/app'
    require_relative 'api/json'
    require_relative 'api/errors'
    require_relative 'api/sessions'
    require_relative 'api/settings'

    enable :logging

    register App::Controllers
    helpers Sinatra::Cookies
    helpers Sinatra::Streaming
    helpers App::Helpers

  end
end
