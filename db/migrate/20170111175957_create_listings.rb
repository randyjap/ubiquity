class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.integer :lessor_id, null: false
      t.string :listing_title, null: false
      t.text :detail_desc, null: false
      t.string :location, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :day_rate, null: false
      t.integer :replacement_value, null: false
      t.string :serial, null: false
      t.integer :brand_id, null: false
      t.integer :category_id, null: false
      t.boolean :active, null: false, default: true
      t.timestamps null: false
    end
    add_index :listings, :lessor_id
    add_index :listings, :brand_id
    add_index :listings, :category_id
    add_index :listings, :lat
    add_index :listings, :lng
  end
end
