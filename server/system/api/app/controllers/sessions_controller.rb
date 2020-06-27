module Server
  class Api
    module App
      module Controllers

        get '/session' do
          @current_user.to_s
        end

        post '/session' do
          token = @engines.post(
            '/system/login',
            payload: { api_vars: {
              user_name: "admin",
              password: params[:password]
            } }.to_json,
            timeout: 5
          ).body
          @current_user.login( token )
          'Logged in.'
        end

        delete '/session' do
          @current_user.logout!
          'Logged out.'
        end

        get '/reconnected' do
          @engines.get('/system/status', timeout: 5)
          return 'System connected.'
        rescue RestClient::Forbidden
          return 'System connected.'
        end

      end
    end
  end
end
