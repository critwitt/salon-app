class PurchasesController < ApplicationController

    def index
        purchases = Purchase.all
        render json: purchases, status: :ok
    end

    def create
        purchase = Purchase.create!(purchase_params)
        render json: purchase, status: :created
    end

    def show
    end

    def destroy
        purchase = Purchase.find(params[:id])
        purchase.destroy
        head :no_content
    end

    private

    def purchase_params
        params.permit(:product_id, :user_id)
    end

end
