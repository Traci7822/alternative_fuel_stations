class CreateStations < ActiveRecord::Migration
  def change
    create_table :stations do |t|
      t.string :fuel_type_code
      t.string :ev_connector_types
      t.string :name
      t.string :street_address
      t.text :phone
      t.text :hours
      t.integer :station_id
      t.text :city
      t.text :state
      t.integer :zip

      t.timestamps null: false
    end
  end
end
