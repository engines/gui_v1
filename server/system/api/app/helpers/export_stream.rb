module Server
  class Api
    module App
      module Helpers

        def export_stream(route, filename)

          content_type 'application/octet-stream'
          attachment filename

          stream do |out|
            logger.info "Data export stream started."
            begin
              @engines.stream_chunks( route ) do |chunk|
                out.write chunk
                out.flush
              end
              logger.info "Data export stream complete."
            rescue IOError => e
              logger.info "Data export stream lost its connection with receiver."
            rescue => e
              error_message = "Data export stream error. #{ e }"
              logger.error error_message
            ensure
              out.close unless out.closed?
            end
          end

        end
      end
    end
  end
end
