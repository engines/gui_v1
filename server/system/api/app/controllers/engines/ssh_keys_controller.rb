module Server
  class Api
    module App
      module Controllers

        get '/download/ssh/generate' do
          @engines.get('/system/keys/user/engines/generate').body.tap do
            content_type :text
            attachment "Engines private SSH key"
          end
        end

        get '/download/ssh/public' do
          @engines.get('/system/keys/user/engines').body.tap do
            content_type :text
            attachment "Engines public SSH key"
          end
        end

        post '/upload/shh/public' do
          key = params[:filepond][:tempfile].read
          @engines.post('/system/keys/user/engines', body: key)
        end

      end
    end
  end
end
