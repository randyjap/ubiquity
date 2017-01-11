class CreateRentals < ActiveRecord::Migration
  def change
    create_table :rentals do |t|
      t.integer :listing_id, null: false
      t.integer :lessee_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.timestamps null: false
    end
    add_index :rentals, :listing_id
    add_index :rentals, :lessee_id
  end
end
