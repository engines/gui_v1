require 'sinatra/base'
require 'sinatra/extension'
require 'sinatra/json'
require 'sinatra/cookies'
require 'sinatra/streaming'
require 'logger'
require 'byebug' if Sinatra::Base.development?
require './server'

# log_dir = ENV['LOG_DIRECTORY'] || "log"
# Dir.mkdir(log_dir) unless Dir.exists?(log_dir)
# file = File.new("#{log_dir}/#{Sinatra::Base.environment}.log", 'a+')
# file.sync = true
# use Rack::CommonLogger, file

ENV['SESSION_TIMEOUT_MINUTES'] ||= '15'
ENV['MODE'] ||= 'system'

require_relative "server/#{ ENV['MODE'] }"
map('/-') { run Server::Api }
map('/') { run Server::Client }
map('/node_modules') { run Rack::Directory.new('node_modules') }

Server.warmup( self )
