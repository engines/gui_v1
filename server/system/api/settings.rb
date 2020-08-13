module Server
  class Api

    if Sinatra::Base.development?
      ENV['ENGINES_SYSTEM_IP'] = '172.16.162.130'
    end

    set sessions: true,
        session_secret: ENV.fetch('SESSION_SECRET') { Sinatra::Base.development? ? '0' : SecureRandom.hex(64) },
        logging: Sinatra::Base.development? ? Logger::DEBUG : Logger::INFO,
        dump_errors: Sinatra::Base.development?,
        show_exceptions: false,
        engines_system_ip: ENV['ENGINES_SYSTEM_IP'],
        session_timeout_seconds: ( ENV['SESSION_TIMEOUT_MINUTES'] || 15 ).to_f * 60,
        library_url: !!ENV['APPLICATION_LIBRARY_URL'] # || Sinatra::Base.development? ? 'https://library.engines.org/api/v0/apps' : nil,

  end
end
