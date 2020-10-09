require 'sinatra'
#require 'json'

class ThermostatData < Sinatra::Base

 before do
    content_type :json    
    headers 'Access-Control-Allow-Origin' => '*', 
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']  
  end

  get '/' do 
    "Hello"
  end 

  get '/temp' do 
    File.read('./temp.json')
  end 

end 