# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170111182346) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brands", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "brands", ["name"], name: "index_brands_on_name", unique: true, using: :btree

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "categories", ["name"], name: "index_categories_on_name", unique: true, using: :btree

  create_table "listings", force: :cascade do |t|
    t.integer  "lessor_id",                        null: false
    t.string   "listing_title",                    null: false
    t.text     "detail_desc",                      null: false
    t.string   "location",                         null: false
    t.float    "lat",                              null: false
    t.float    "lng",                              null: false
    t.integer  "day_rate",                         null: false
    t.integer  "replacement_value",                null: false
    t.string   "serial",                           null: false
    t.integer  "brand_id",                         null: false
    t.integer  "category_id",                      null: false
    t.boolean  "active",            default: true, null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

  add_index "listings", ["brand_id"], name: "index_listings_on_brand_id", using: :btree
  add_index "listings", ["category_id"], name: "index_listings_on_category_id", using: :btree
  add_index "listings", ["lat"], name: "index_listings_on_lat", using: :btree
  add_index "listings", ["lessor_id"], name: "index_listings_on_lessor_id", using: :btree
  add_index "listings", ["lng"], name: "index_listings_on_lng", using: :btree

  create_table "photos", force: :cascade do |t|
    t.integer  "listing_id", null: false
    t.string   "image_url",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "photos", ["listing_id"], name: "index_photos_on_listing_id", using: :btree

  create_table "rentals", force: :cascade do |t|
    t.integer  "listing_id", null: false
    t.integer  "lessee_id",  null: false
    t.date     "start_date", null: false
    t.date     "end_date",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "rentals", ["lessee_id"], name: "index_rentals_on_lessee_id", using: :btree
  add_index "rentals", ["listing_id"], name: "index_rentals_on_listing_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "reviewer_id", null: false
    t.integer  "rental_id",   null: false
    t.integer  "review",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reviews", ["rental_id"], name: "index_reviews_on_rental_id", using: :btree
  add_index "reviews", ["reviewer_id"], name: "index_reviews_on_reviewer_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
