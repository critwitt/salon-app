class PurchaseSerializer < ActiveModel::Serializer
  attributes :id
  has_one :shopping_cart
  has_one :product
end
