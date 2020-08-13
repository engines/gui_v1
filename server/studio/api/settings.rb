module Server
  class Api

    set sessions: true,
        session_secret: ENV.fetch('SESSION_SECRET') { Sinatra::Base.development? ? '0' : SecureRandom.hex(64) },
        logging: Sinatra::Base.development? ? Logger::DEBUG : Logger::INFO,
        dump_errors: Sinatra::Base.development?,
        show_exceptions: false,
        session_timeout_seconds: ENV['SESSION_TIMEOUT_MINUTES'].to_f * 60,
        ssh_private_key_filename: "identity",
        ssh_public_key_filename: "identity.pub",
        enable_services_designer: !!ENV['ENABLE_SERVICES_DESIGNER'] || Sinatra::Base.development?,
        user_password: ( Sinatra::Base.development? ? 'password' : ENV['USER_PASSWORD'] ) || 'password'
  end

end
