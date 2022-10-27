class CreateHairStylists < ActiveRecord::Migration[7.0]
  def change
    create_table :hair_stylists do |t|
      t.string :name
      t.string :specialty

      t.timestamps
    end
  end
end
