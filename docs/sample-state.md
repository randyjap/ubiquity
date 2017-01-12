```js
{
  currentUser: {
    id: 1,
    username: "A Grade Customer"
  },
  forms: {
    signUp: {errors: ["Can't leave Username blank", "Password must be 6 characters or longer"]},
    logIn: {errors: ["oops looks like there was a mistake"]},
    createListing: {errors: ["serial can't be blank", "location can't be blank"]}
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
  searchFilters: {
	bounds: {},
	brand: ["Top Brand", "Value Brand"],
	category: ["A Category", "B Category"]
  }
}
```
