module Server
  class Api
    module App
      module Controllers

        get '/eventsource/containers' do
          content_type "text/event-stream"
          stream( :keep_open ) do |out|
            started = Time.now.strftime("%H:%M:%S")
            logger.info "STREAM:#{ started }: Container events stream open."
            begin
              @engines.stream_lines( '/containers/events/stream' ) do |serializedEvent|
                logger.info "STREAM:#{ started }:Event!"
                begin
                  raise Error::Timeout unless @current_user.within_timeout
                  logger.info "STREAM:#{ started }:Raw event: #{serializedEvent}"
                  event = JSON.parse( serializedEvent, symbolize_names: true )
                  if event[:no_op]
                    data = {}
                  else
                    if event[:from] == 'system'
                      serializedSystemStatus = @engines.get( "/system/status" ).body
                      serializedBuilderStatus = @engines.get( "/engine_builder/status" ).body
                      systemStatus = JSON.parse( serializedSystemStatus, symbolize_names: true )
                      builderStatus = JSON.parse( serializedBuilderStatus, symbolize_names: true )
                      update = { status: systemStatus.merge( builderStatus ) }
                      data = {
                        type: :system_status_update,
                        system_status_update: update,
                        api_event: event
                      }.to_json
                    elsif event[:container_type] == 'service' || event[:container_type] == 'app'
                      name = event[:container_name]
                      type = event[:container_type] == 'service' ? 'service' : 'application'
                      typeForRoute = type == 'service' ? 'service' : 'engine'
                      serializedStatus = @engines.get( "/containers/#{ typeForRoute }/#{ name }/status" ).body
                      status = JSON.parse( serializedStatus, symbolize_names: true )
                      update = {
                        type: type,
                        name: name,
                        status: status
                      }
                      data = {
                        type: :container_status_update,
                        container_status_update: update,
                        api_event: event
                      }.to_json
                    else
                      data = { type: :unhandled_event, api_event: event }.to_json
                    end
                  end
                  logger.info "STREAM:#{ started }: Container events stream sending data.\n#{ data }\n"
                  out.puts "data: #{ data }\n\n"
                  out.flush
                rescue Error::Timeout
                  logger.info "STREAM:#{ started }: Container events stream closed due to user timeout."
                  out.puts "data: #{ { type: :timeout }.to_json }\n\n"
                  break
                end
              end
              raise "The container events stream not connected to the Engines system."
            rescue => e
              logger.error "STREAM:#{ started }: Container events stream closed with error. #{ e }"
              out.puts "data: #{ { type: :error, error: e.to_s }.to_json }\n\n"
            ensure
              out.close
            end
          rescue IOError => e
            logger.info "STREAM:#{ started } Container events stream lost its connection to user agent."
          end
        end

      end
    end
  end
end
