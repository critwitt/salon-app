class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :description
  has_one :user
  has_one :hair_stylist
end
