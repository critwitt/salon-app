class HairStylistsController < ApplicationController

    def index
        hair_stylists = HairStylist.all
        render json: hair_stylists, status: :ok
    end

    def show
        hair_stylist = HairStylist.find(params[:id])
        render json: hair_stylist, status: :ok
    end

end
