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
            render json: {message: 'unable to create a user'}, status: 500
        end
    end
end