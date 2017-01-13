# Youbiquity

##[Youbiquity][heroku]

[Share Grid][sharegrid]

[heroku]: http://www.randyjap.com/
[sharegrid]: http://www.sharegrid.com

## MVP (Minimum Viable Product)

Youbiquity is a web application inspired by Share Grid and built using Ruby on Rails and React/Redux.

Youbiquity allows users to easily rent out their idle equipment to others and allow others to rent this equipment from them.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Users can create and view equipment listings with photos
- [ ] Users search by equipment category, brands, location
- [ ] Equipment listings are mapped with the google maps API
- [ ] Renters and lessors can leave each other reviews.
- [ ] Infinite Scroll
- [ ] Production README [production_readme](docs/production_readme.md)

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

### Phase 1: Backend setup, Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication with provisions for reviews and profile components.

### Phase 2: Equipment Listing Model, API, and Components (2 days)

**Objective:** Equipment listings can be created, read, edited and inactivated through the API.

### Phase 3: Equipment Search, Listings, & Components (2 days)

**Objective:** Equipment listings can be shown and linked to on the google map API.

### Phase 4: Google Map API & Components (1 day)

**Objective:** Equipment listings can be shown and linked to on the google map API.

### Phase 5: Reviews (2 days)

**Objective:** Renters and lessors can leave each other point feedback.

### Bonus Features (TBD)
- [ ] Lessees must request and lessors may approve rental requests
- [ ] Users can message each other
- [ ] Users can schedule pick ups (time/day/location)
- [ ] lessors can set rental listing blackout days
- [ ] Customize Rental Agreements
- [ ] Public Q&A on Rental Listing
