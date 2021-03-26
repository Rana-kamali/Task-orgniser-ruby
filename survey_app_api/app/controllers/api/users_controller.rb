class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def user_params
    params.required(:user).permit(:name, :password)
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: 201
    else
      render json: { message: 'unable to create a user' }, status: 500
    end
  end
def update
    render json: User.find(params[:id]).update(user_params)
end
def destroy
    User.destroy(params[:id])
    render json: {message: `#{params[:name]} has been deleted`}
end
end
