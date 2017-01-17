class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :rental_id, null: false
      t.integer :review, null: false
      t.text :review_text
      t.timestamps null: false
    end
    add_index :reviews, :rental_id, unique: true
  end
end
