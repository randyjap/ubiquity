# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:id`
  - id will be pulled from currentUser
- `GET /api/listings`
  - id will be pulled from currentUser
- `GET /api/rentals`
  - id will be pulled from currentUser

### Session

- `POST /api/session`
- `DELETE /api/session`

### Listings

- `GET /api/search`
  - accepts `brand` query param to list equipment by brand
  - accepts `cat` query param to list equipment by category
  - accepts `location` query param to list equipment by location
- `POST /api/listings` (Not MVP Required)
- `GET /api/listings/:id`
- `PATCH /api/listings/:id`
- `GET /api/options`
  - allows react components to efficiently pull their option data
- `POST /api/reviews`
  - allows users to post reviews they are authorized for/ associated with
