module Server
  class Api

    set sessions: true,
        session_secret: ENV.fetch('SESSION_SECRET') { Sinatra::Base.development? ? '0' : SecureRandom.hex(64) },
        logging: Sinatra::Base.development? ? Logger::DEBUG : Logger::INFO,
        dump_errors: Sinatra::Base.development?,
        show_exceptions: false,
        session_timeout_seconds: ENV['SESSION_TIMEOUT_MINUTES'].to_f * 60,
        public_key_filepath: ENV['PUBLIC_KEY_FILEPATH'] || Sinatra::Base.development? ? "#{ Dir.home }/.ssh/identity.pub" : nil,
        user_password: ( Sinatra::Base.development? ? 'password' : ENV['USER_PASSWORD'] ) || 'password'
  end

end
