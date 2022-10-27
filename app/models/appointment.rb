class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :hair_stylist

  validates :date, presence: true
  validates :time, presence: true
end
