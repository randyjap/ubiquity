# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/profile`
  - id will be pulled from currentUser
- `GET /api/my-listings`
  - id will be pulled from currentUser
- `GET /api/my-rentals`
  - id will be pulled from currentUser

### Session

- `POST /api/session`
- `DELETE /api/session`

### Listings

- `GET /api/listings`
  - accepts `brand` query param to list equipment by brand
  - accepts `cat` query param to list equipment by category
  - accepts `location` query param to list equipment by location
- `POST /api/listings`
- `GET /api/listings/:id`
- `PATCH /api/listings/:id`
