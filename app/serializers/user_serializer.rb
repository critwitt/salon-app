class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :admin

  has_many :appointments
  has_many :products
  has_many :purchases
end
