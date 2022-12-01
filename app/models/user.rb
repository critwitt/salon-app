class User < ApplicationRecord
    has_many :appointments
    has_many :hair_stylists, through: :appointments
    has_many :purchases
    has_many :products, through: :purchases

    has_secure_password
    validates :name, presence: true
    validates :email, presence: true
    validates :password, presence: true
end
