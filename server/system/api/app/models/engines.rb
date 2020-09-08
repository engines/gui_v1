module Server
  class Api
    module App
      module Models
        class Engines

          def initialize(ip_address, token, logger)
            @ip_address = ip_address
            @token = token
            @logger = logger
          end

          attr_reader :logger, :token

          def get(route, options={})
            api_call route, options
          end

          def post(route, options={})
            api_call route,
              method: :post,
              **options
          end

          def put(route, options={})
            api_call route,
              method: :put,
              **options
          end

          def delete(route, options={})
            api_call route,
              method: :delete,
              **options
          end

          def stream_chunks(route, options={}, &block)
            block_response = response_chunks &block
            api_call(route, block_response: block_response, **options)
          end

          def stream_lines(route, options={}, &block)
            block_response = response_lines &block
            api_call(route, block_response: block_response, **options)
          end


          # def upstream(route, options={})
          #   api_call(route, method: :post, **options)
          # end

          private

          def response_chunks
            Proc.new do |response|
              response.read_body do |chunk|
                yield chunk
              end
            end
          end

          def response_lines
            Proc.new do |response|
              response.read_body do |chunk|
                chunk.split("\n").each do |line|
                  yield line
                end
              end
            end
          end

          def api_call(route, options={})
            request_options = {
              method: :get,
              url: url_for(route),
              timeout: 120,
              verify_ssl: false,
              headers: {
                content_type: options[:content_type] || :json,
                access_token: @token
              },
              **options
            }
            if options[:content_length]
              request_options[:headers][:content_length]
            end
            puts(request_options.to_yaml)
            response_for do
              RestClient::Request.execute(request_options)
            end
          end

          def url_for(route)
            "https://#{@ip_address}:2380/v0#{route}"
          end

          def response_for(&block)
            yield
          rescue  RestClient::Forbidden
            raise Error::NotAuthenticated
          rescue  RestClient::NotFound => e
            raise Error::System404.new e
          rescue  RestClient::NotAcceptable,
                  RestClient::MethodNotAllowed => e
            raise Error::SystemApiWarning.new e
          rescue  Errno::EHOSTUNREACH,
                  Errno::ECONNREFUSED,
                  Errno::ECONNRESET,
                  Errno::ENETUNREACH,
                  OpenSSL::SSL::SSLError,
                  RestClient::ServerBrokeConnection,
                  RestClient::Exceptions::OpenTimeout,
                  RestClient::Exceptions::ReadTimeout => e
            raise Error::SystemUnavailable.new e
          rescue JSON::ParserError => e
            raise Fatal::SystemJsonError.new e
          rescue RestClient => e
            raise Fatal::SystemApiError.new e
          rescue => e
            raise Fatal.new e
          end

        end
      end
    end
  end
end
