class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :station_id
      t.text :content
      t.text :name
      t.text :email
      t.timestamps null: false
    end
  end
end
