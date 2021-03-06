module Server

  def self.warmup( rack )

    rack.warmup do |app|

      # Sessions directoy stores session files named by session id.
      # Contents of each file is the api token for the session.
      # Modification time for a file is used as the activity timestamp for session timeout.
      FileUtils.mkdir_p 'sessions'

      # Delete stale session files
      session_timeout_seconds = ENV['SESSION_TIMEOUT_MINUTES'].to_f * 60
      seconds_to_stale = session_timeout_seconds + 3600
      now = Time.now
      Dir.glob( 'sessions/*' ) do |filepath|
        stale = File.mtime( filepath ) + seconds_to_stale < now
        File.delete( filepath ) if stale
      end

    end

  end

end
