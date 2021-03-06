module Server
  class Api
    module App
      module Controllers

        get '/applications/:application_id/diff' do
          content_type :'application/json'
          Application.new( params[:application_id] ).repo.diff.to_json
        end

      end
    end
  end
end


# [
#   { uri: 'git@github.com:EnginesBlueprints/Enginepad.git' }
#   { uri: 'git@github.com:lachdoug/fake_app_blueprint.git' }
# ]
