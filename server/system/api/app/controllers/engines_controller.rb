module Server
  class Api
    module App
      module Controllers

        post '/dev' do
          content_type 'text/terminal'
          params.to_yaml
        end

        get '/reconnected' do
          @engines.get( '/undefined_endpoint', { timeout: 5 } )
        rescue Error::System404
          # System has responded with a 404, so it must be back up!
          return 'System connected.'
        end

        get '/~/*' do
          path = request.fullpath.sub '/~/~', ''
          result = @engines.get( path )
          status result.code
          content_type result.headers[:content_type]
          result.body
        end

        delete '/~/*' do
          path = request.fullpath.sub '/~/~', ''
          result = @engines.delete( path )
          status result.code
          content_type result.headers[:content_type]
          result.body
        end

        post '/~/*' do
          # debugger
          path = request.fullpath.sub '/~/~', ''
          result = @engines.post( path, params.to_json )
          status result.code
          content_type result.headers[:content_type]
          result.body
        end

        put '/~/*' do
          path = request.fullpath.sub '/~/~', ''
          result = @engines.put( path, params.to_json )
          status result.code
          content_type result.headers[:content_type]
          result.body
        end

      end
    end
  end
end
