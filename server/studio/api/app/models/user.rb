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
            raise Error::NotAuthenticated unless File.exist? filepath
            raise Error::Timeout unless within_timeout
            reset_timeout
            return self
          end

          def logout!
            File.delete( filepath ) if File.exist? filepath
            return ''
          end

          def login( password )
            raise Error::NotAuthenticated unless @settings.user_password == password
            reset_timeout
            return self
          end

          def public_key
            File.read public_key_filepath
          end

          def private_key_filepath
            "#{ Dir.home }/.ssh/#{ @settings.ssh_private_key_filename }"
          end

          def public_key_filepath
            "#{ Dir.home }/.ssh/#{ @settings.ssh_public_key_filename }"
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
