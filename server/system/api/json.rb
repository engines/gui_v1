module Server
  class Api

    before do
      return unless request.content_type == 'application/json'
      body = request.body.read
      params.merge!(JSON.parse(body)) unless body.empty?
    end

  end
end
