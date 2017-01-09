# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:id`
- `GET /api/users/:id/listings`
- `GET /api/users/:id/rentals`

### Session

- `POST /api/session`
- `DELETE /api/session`

### EquipmentListings

- `GET /api/listings`
  - accepts `brand` query param to list equipment by brand
  - accepts `cat` query param to list equipment by category
  - accepts `location` query param to list equipment by location
- `POST /api/listings`
- `GET /api/listings/:id`
- `PATCH /api/listings/:id`
- `DELETE /api/listings/:id`
	- will set listing inactive by setting active column to false instead of deleting the record entirely
