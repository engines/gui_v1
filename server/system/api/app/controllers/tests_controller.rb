module Server
  class Api
    module App
      module Controllers

        get '/terminal_text' do
          content_type 'text/terminal'
          'Cool'
        end

        get '/terminal_text_error' do
          status 500
          content_type 'text/terminal'
          'Bad error'
        end

        post '/dev' do
          content_type 'text/terminal'
          params.to_yaml
        end

        get '/slow' do
          sleep 30
          params.to_yaml
        end

      end
    end
  end
end
