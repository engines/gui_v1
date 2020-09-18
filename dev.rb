ENV['MODE'] = 'studio'
ENV['ENGINES_SYSTEM_IP'] = '172.16.162.130'
ENV['PUBLIC_KEY_FILEPATH'] = "#{Dir.home}/.ssh/identity.pub"
ENV['USER_PASSWORD'] = 'password'
ENV['SESSION_SECRET'] = '0'

Rainbows! do
  use :ThreadSpawn
end
