```js
{
  session: {
    currentUser: {
      id: 1,
      username: "A Grade Customer"
    }
  },
  errors: {
    all: ["Can't leave Username blank", "Password must be 6 characters or longer"]
  },
  listing: {
    id: 1,
    brand: "Top Brand",
    category: "A Category",
    day_rate: 100,
    detail_desc: "description",
    lat: 123.123456,
    listing_title: "title",
    lng: 123.123456,
    location: "123 ABC Street, ABC Town, USA",
    rating_average: 4.5,
    replacement_value: 10000,
    review_count: 399
    serial: "01234567890ABC",
    lessor: "username",
  },
  search: {
    searchFilters: {
        bounds: {
          northEast: { lat: 100, lng:  100 }, southWest: { lat: 100, lng: 100 }
      },
      brand: ["Canon", "Minolta"],
      category: ["Photography", "Video"]
    }
    searchListings: {
      1: {
        brand: "Top Brand",
        category: "A Category",
        day_rate: 100,
        id: 1
        lat: 123.123456,
        listing_title: "title",
        lng: 123.123456,
        rating_average: 4.5,
        review_count: 399
        lessor: "username",
      },
      2: ...
    }
  },
  currentUserListings: {
    1: [
        {
          end_date: 2017-01-08 20:53:16 -0800,
          id: 12,
          start_date: 2017-01-08 20:53:16 -0800,
          total: 1000
          lessee: "username",
        },
        ...
      ],
    2: ...
  },
  currentUserRentals: {
    1: {
      end_date: 2017-01-08 20:53:16 -0800,
      id: 1,
      start_date: 2017-01-08 20:53:16 -0800,
      total: 1000
    },
    2: ...
  },
  userProfile: {
    average_rating: 3.9,
    id: 1,
    five_stars: 68,
    four_stars: 32,
    three_stars: 22,
    two_stars: 11,
    one_stars: 13,
    total: 146,
    username: "Guest"
  }
}
```
