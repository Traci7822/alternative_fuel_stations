class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :station_id
      t.integer :stars
      t.timestamps null: false
    end
  end
end
