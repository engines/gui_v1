module Server
  class Api

    before do
      @current_user = App::Models::User.new( settings, session )
      @current_user.authenticate! unless noauth
      @engines = App::Models::Engines.new(
                    settings.engines_system_ip,
                    @current_user.api_token,
                    logger )
    end

    def noauth
      (request.path_info == '/session' && request.request_method == 'POST') ||
      (request.path_info == '/reconnected' && request.request_method == 'GET')
    end

  end
end
