class Api::SessionsController < ApplicationController
  def new; end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render json: @user
    else
      error = ["Invalid username or password"]
      render json: error, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
      render json: @user, status: 200
    else
      error = ["not logged in"]
      render json: error, status: 404
    end
  end
end
