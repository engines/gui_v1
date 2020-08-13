module Server
  class Api
    module App
      module Controllers

        get '/download/service/:service_name' do
          filename = "Engines #{ params[:service_name] } #{ Time.now.strftime("%Y-%m-%d-%H-%M-%S") }"
          route = "/containers/service/#{ params[:service_name] }/export"
          export_stream(route, filename)
        end

        post '/upload/service/:service_name' do
          @engines.post(
            "/containers/service/#{ params[:service_name] }/import",
            payload: request.body,
            content_type: request.content_type,
            content_length: request.content_length
          )
        end

        get '/download/binding/:application_name/*' do
          binding_path = "#{params[:application_name]}/#{ params[:splat][0] }"
          filename = "Engines #{ binding_path.gsub('/', '-') } #{ Time.now.strftime("%Y-%m-%d-%H-%M-%S") }"
          route = "/containers/engines/#{ binding_path }/export"
          export_stream(route, filename)
        end

        post '/upload/binding/:application_name/*' do
          binding_path = "#{params[:application_name]}/#{ params[:splat][0] }"
          @engines.post(
            "/containers/service/#{ binding_path }/import",
            payload: request.body,
            content_type: request.content_type,
            content_length: request.content_length
          )
        end

      end
    end
  end
end
