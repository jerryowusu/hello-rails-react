class V1::GreetingsController < ApplicationController
  def index
  render json: { :greeting => [
    {
    :name => "Hello",
    :guid => '0415674d'
    }, 
  ]}
  end
end
