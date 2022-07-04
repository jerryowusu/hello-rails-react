class V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first
    render json: { greetings: @greeting }.to_json
  end
end