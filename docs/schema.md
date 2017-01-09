# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
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
lat               | float     | not null
lng               | float     | not null
day_rate          | integer   | not null
replacement_value | integer   | not null
serial	          | string    | not null
brand_id          | integer   | not null, foreign key (references brands), indexed
cat_id            | integer   | not null, foreign key (references cats), indexed
active            | boolean   | not null default: true

## rentals
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | integer   | not null, foreign key (references listings), indexed
lessee_id   | integer   | not null, foreign key (references users), indexed
start_date  | date      | not null, primary key
end_date    | date      | not null, primary key

## brands
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
brand       | string    | not null

## cats
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
category    | integer   | not null

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
cdn_url     | string    | not null
listing_id  | integer   | not null, foreign key (references listing), indexed

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
lessee_id   | string    | not null, foreign key (references users), indexed
lessor_id   | string    | not null, foreign key (references users), indexed
listing_id  | integer   | not null, foreign key (references listing), indexed
reviews     | string    | not null
