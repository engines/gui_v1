module Server
  class Api

    set sessions: true,
        session_secret: ENV.fetch('SESSION_SECRET') { SecureRandom.hex(64) },
        logging: Sinatra::Base.development? ? Logger::DEBUG : Logger::INFO,
        dump_errors: Sinatra::Base.development?,
        show_exceptions: false,
        session_timeout_seconds: ENV['SESSION_TIMEOUT_MINUTES'].to_f * 60,
        public_key_filepath: ENV['PUBLIC_KEY_FILEPATH'],
        user_password: ENV['USER_PASSWORD']

  end

end
