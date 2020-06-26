module Server
  class Api
    module App
      module Controllers

        # def json_payload(request)
        #   debugger
        #   request.body.read
        # end

        post '/dev' do
          content_type 'text/terminal'
          params.to_yaml
        end

        get '/reconnected' do
          @engines.get('/undefined_endpoint', timeout: 5)
        rescue Error::System404
          # System has responded with a 404, so it must be back up!
          return 'System connected.'
        end

        get '/-/*' do
          path = request.fullpath.sub '/-/-', ''
          result = @engines.get(path)
          status result.code
          content_type result.headers[:content_type]
          result.body
        end

        delete '/-/*' do
          path = request.fullpath.sub '/-/-', ''
          # debugger
          result = @engines.delete(
            path,
            payload: {api_vars: params[:api_vars] || {}}.to_json,
            content_type: :json,
          )
          status result.code
          content_type result.headers[:content_type]
          result.body
        end

        post '/-/*' do
          # debugger
          path = request.fullpath.sub '/-/-', ''
          result = @engines.post(
            path,
            payload: {api_vars: params[:api_vars] || {}}.to_json,
            content_type: :json,
          )
          status result.code
          content_type result.headers[:content_type]
          result.body
        end

        put '/-/*' do
          # debugger
          path = request.fullpath.sub '/-/-', ''
          result = @engines.put(
            path,
            payload: {api_vars: params[:api_vars] || {}}.to_json,
            content_type: :json,
          )
          status result.code
          content_type result.headers[:content_type]
          result.body
        end

      end
    end
  end
end
