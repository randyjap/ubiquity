# Ubiquity

[Heroku link][heroku]
[Share Grid][sharegrid]

[heroku]: https://ubiquity.herokuapp.com/
[sharegrid]: http://www.sharegrid.com

## MVP (Minimum Viable Product)

Ubiquity is a web application inspired by Share Grid and built using Ruby on Rails and React/Redux.

Ubiquity allows users to easily rent out their idle equipment to others and allow others to rent this equipment from them.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Users can create and view equipment listings with photos
- [ ] Users search by equipment category, brands, location
- [ ] Equipment listings are mapped with the google maps API
- [ ] Renters and lessors can leave each other reviews.
- [ ] Infinite Scroll
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup, Front End User Authentication, Profile Components (2 days)

**Objective:** Functioning rails project with front-end Authentication with provisions for reviews and profile components.

### Phase 2: Equipment Listing Model, API, and Components (3 days)

**Objective:** Equipment listings can be created, read, edited and destroyed through the API.

### Phase 3: Equipment Search, Google Map API & Components (2 days)

**Objective:** Equipment listings can be shown and linked to on the google map API.

### Phase 4: Reviews & Infinite Scroll Listings (2 days)

**Objective:** Renters and lessors can leave each other feedback.  Feedback is added to profile components.  Listings can be scrolled infinitely.

### Bonus Features (TBD)
- [ ] Lessees must request and lessors may approve rental requests
- [ ] Users can message each other
- [ ] Users can schedule pick ups (time/day/location)
- [ ] lessors can set rental listing blackout days
- [ ] Customize Rental Agreements
- [ ] Public Q&A on Rental Listing
