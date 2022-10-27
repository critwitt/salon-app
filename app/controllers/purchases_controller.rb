class PurchasesController < ApplicationController

    def create
        purchase = Purchase.create!(purchase_params)
    end

    def show
    end

    private

    def purchase_params
        params.permit(:product_id, :user_id)
    end

end
