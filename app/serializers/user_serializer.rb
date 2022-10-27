class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :admin

  has_many :appointments
end
