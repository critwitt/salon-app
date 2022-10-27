class ProductsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index
        products = Product.all
        render json: products, status: :ok
    end

    def show
        product = Product.find(params[:id])
        render json: product, status: :ok
    end

    private

    def not_found
        render json: {error: "Record not found"}
    end

end
