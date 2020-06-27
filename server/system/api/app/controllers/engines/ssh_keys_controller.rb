module Server
  class Api
    module App
      module Controllers


        # def public_ssh_key
        #   @system_api.get 'system/keys/user/engines'
        # end
        #
        # def update_public_ssh_key( args )
        #   @system_api.post 'system/keys/user/engines', args
        # end
        #
        # def private_ssh_key
        #   @system_api.get 'system/keys/user/engines/generate'
        # end

        get '/download/ssh_keys/generate' do
          content_type :text
          attachment "Engines private SSH key"
          @engines.get('/system/keys/user/engines/generate').body
        end

        get '/download/ssh_keys/public' do
          content_type :text
          attachment "Engines public SSH key"
          @engines.get('/system/keys/user/engines').body
        end

        post '/upload/ssh_keys' do
          key = params[:key]
          debugger

          @engines.post('/system/keys/user/engines', key)
        end

        # post '/upload/service/:service_name' do
        #   route = "/containers/service/#{ params[:service_name] }/import"
        #   payload = request.body
        #   @engines.post(
        #     route,
        #     payload: request.body,
        #     content_type: request.content_type,
        #     content_length: request.content_length
        #   )
        # end
        #
        #
        #
        # get '/download/test' do
        #
        #   filepath = 'test/sample_file_for_download_test.zip'
        #
        #   content_type 'application/zip'
        #   attachment "sample_file.zip"
        #   response['Content-Length'] = File.size( filepath ).to_s
        #
        #   stream do |out|
        #     logger.info "Test download stream started."
        #     begin
        #       File.open( filepath, 'rb' ) do |f|
        #         until f.eof? do
        #           puts "Download test: do a chunk"
        #           out.write( f.read( 1048576 ) )
        #           out.flush
        #           sleep 0.5
        #         end
        #       end
        #       logger.info "Test download stream complete."
        #     rescue IOError => e
        #       logger.info "Test download stream lost its connection with receiver."
        #     rescue => e
        #       error_message = "Test download stream error. #{ e }"
        #       logger.error error_message
        #     ensure
        #       out.close unless out.closed?
        #     end
        #   end
        #
        # end
        #


      end
    end
  end
end
