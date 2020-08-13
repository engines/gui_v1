module Server
  class Api
    module App
      module Models
        class User

          def initialize( settings, session )
            @settings = settings
            @session = session
          end

          def to_s
            'user'
          end

          def authenticate!
            raise Error::NotAuthenticated unless api_token
            raise Error::Timeout unless within_timeout
            reset_timeout
            return self
          end

          def logout!
            File.delete( filepath ) if File.exist? filepath
            return ''
          end

          def login( token )
            # raise Error::NotAuthenticated unless token
            save_api_token token
            reset_timeout
            return self
          end

          def api_token
            File.read filepath
          rescue Errno::ENOENT
          end

          def save_api_token( token )
            File.write filepath, token
          end

          def session_timeout_seconds
            @settings.session_timeout_seconds
          end

          def within_timeout
            last_activity_at = timestamp
            return false unless last_activity_at
            last_activity_at + session_timeout_seconds > Time.now
          end

          private

          def filepath
            "sessions/#{ @session['session_id'] }"
          end

          def timestamp
            File.mtime filepath
          end

          def reset_timeout
            FileUtils.touch filepath
          end

        end
      end
    end
  end
end
