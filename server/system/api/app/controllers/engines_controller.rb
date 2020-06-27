module Server
  class Api
    module App
      module Controllers

        get '/-/*' do
          path = request.fullpath.sub '/-/-', ''
          result = @engines.get(path)
          status result.code
          content_type result.headers[:content_type]
          result.body
        end

        delete '/-/*' do
          path = request.fullpath.sub '/-/-', ''
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
