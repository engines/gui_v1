module Server
  class Api
    module App
      module Controllers

        get '/eventsource/os_update' do
          content_type "text/event-stream"
          stream( :keep_open ) do |out|
            started = Time.now.strftime("%H:%M:%S")
            logger.info "STREAM:#{ started } OS Update log stream started."
            begin
              @engines.stream_lines( '/system/control/base_os/follow_update' ) do |line|
                raise Error::NotAuthenticated if line == 'Invalid Token'
                out.puts "data: #{ line }\n\n"
                out.flush
              end
              logger.info "STREAM:#{ started } OS Update log stream complete."
            rescue => e
              error_message = "STREAM:#{ started } OS Update log stream error. #{ e }"
              logger.error error_message
              out.puts "data: \033[1;31m#{ error_message }\033[0m\n\n"
            ensure
              out.puts "data: #{ 4.chr }\n\n" # ASCII 4 is EOT (end of transmission)
              out.close
            end
          rescue IOError => e
            logger.info "STREAM:#{ started } OS Update log stream lost its connection with user agent."
          end
        end

      end
    end
  end
end
