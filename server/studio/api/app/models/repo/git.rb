module Server
  class Api
    module App
      module Models
        class Repo
          class Git

            def self.exec(repopath, command)
              execute = "GIT_TERMINAL_PROMPT=0 GIT_SSH_COMMAND='ssh -i #{ENV['PUBLIC_KEY_FILEPATH']} -o IdentitiesOnly=yes -o StrictHostKeyChecking=no' git -C '#{ repopath }' #{ command }"
              stdout, stderr, status = Open3.
                capture3( execute )
                result = stdout === '' ?
                  stderr :
                  stderr === '' ? stdout : "#{ stdout }\n#{ stderr }"
              raise Error::GitError.new result unless status.exitstatus === 0
              result
            end

          end
        end
      end
    end
  end
end
