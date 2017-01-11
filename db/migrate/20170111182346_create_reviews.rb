class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id, null: false
      t.integer :rental_id, null: false
      t.integer :review, null: false
      t.timestamps null: false
    end
    add_index :reviews, :reviewer_id
    add_index :reviews, :rental_id
  end
end
