# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## listings
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
lessor_id         | integer   | not null, foreign key (references users), indexed
listing_title     | string    | not null
detail_desc       | text      | not null
location          | string    | not null
lat               | float     | not null, indexed
lng               | float     | not null, indexed
day_rate          | integer   | not null
replacement_value | integer   | not null
serial	          | string    | not null
brand_id          | integer   | not null, foreign key (references brands), indexed
category_id       | integer   | not null, foreign key (references cats), indexed
active            | boolean   | not null default: true

## rentals
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | integer   | not null, foreign key (references listings), indexed
lessee_id   | integer   | not null, foreign key (references users), indexed
start_date  | date      | not null
end_date    | date      | not null

## brands
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed, unique

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed, unique

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image_url   | string    | not null
listing_id  | integer   | not null, foreign key (references listing), indexed

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
reviewer_id | integer   | not null, foreign key (references users), indexed, unique scope [rental_id]
rental_id   | integer   | not null, foreign key (references listing), indexed, unique scope [lessee_id]
review      | integer   | not null
