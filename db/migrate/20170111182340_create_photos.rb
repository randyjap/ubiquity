class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :listing_id, null: false
      t.string :image_url, null: false
      t.timestamps null: false
    end
    add_index :photos, :listing_id
  end
end
