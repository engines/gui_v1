module Server
  class Api
    module App
      module Controllers

        get '/key' do
          content_type :text
          @current_user.public_key
        end

        get '/download/key' do
          @current_user.public_key.tap do
            content_type :text
            attachment "Engines public SSH key"
          end
        end

      end
    end
  end
end
