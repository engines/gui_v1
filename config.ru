require 'sinatra/base'
require 'sinatra/extension'
require 'sinatra/json'
require 'sinatra/cookies'
require 'sinatra/streaming'
require 'logger'
require 'byebug' if Sinatra::Base.development?
require './server'

log_dir = "log"
Dir.mkdir(log_dir) unless Dir.exists?(log_dir)
file = File.new("#{log_dir}/#{Sinatra::Base.environment}.log", 'a+')
file.sync = true
use Rack::CommonLogger, file

map('/node_modules') { run Rack::Directory.new('node_modules') }

if ( Sinatra::Base.development? )
  puts "Which app mode? 0 for System, 1 for Studio."
  answer = $stdin.gets.chomp
  if answer == '1'
    ENV['MODE'] = 'studio'
  else
    ENV['MODE'] = 'system'
  end
else
  ENV['MODE'] ||= 'system'
end

$SESSION_TIMEOUT_MINUTES = ENV['SESSION_TIMEOUT_MINUTES'] || 60

require_relative "server/#{ ENV['MODE'] }"
map('/~') { run Server::Api }
map('/') { run Server::Client }

Server.warmup( self )
