module Server
  class Api
    module App
      module Models
        class Repo
          class Clone

            def initialize( url, destination )
              @url = url
              @destination = destination
            end

            attr_reader :url, :destination, :message

            def process
              reset
              clone
              check_unique
              check_branch
              create_destination
              move
              id
            end

            def clone
              Git.exec tmp, "clone '#{ @url }'"
            rescue Error::GitError => e
              raise Error::RepoCloneFailed.new e.message
            end

            def name
              Dir.glob( "#{ tmp }/*" )[0].sub( "#{ tmp }/", '' )
            end

            def id
              @id ||= Digest::MD5.hexdigest name
            end

            def check_unique
              raise Error::RepoAlreadyExists.new name if File.exist? path
            end

            def check_branch
              raise Error::RepoRequiresBranch.new name unless has_branch?
            end

            def path
              "#{ destination }/#{ id }"
            end

            def create_destination
              FileUtils.mkpath path
            end

            def move
              FileUtils.mv Dir.glob( "#{ tmp }/*" ), path
            end

            def tmp
              'tmp/clone'
            end

            def reset
              FileUtils.rm_rf tmp
              FileUtils.mkpath tmp
            end

            def has_branch?
              !branch.empty?
            end

            def branch
              Git.exec tmp_repo_path, 'branch'
            end

            def tmp_repo_path
              Dir.glob( "#{ tmp }/*" )[0]
            end

          end
        end
      end
    end
  end
end
