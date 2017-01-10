## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - TopBarContainer
  (Children Go Here!)
 - BottomBarContainer

**TopBarContainer**
 - TopBar
  - Search
  - DropDownMenu

**Search**
(Has Internal State)

**SearchResultsContainer**
 - SearchResults

**ListingsIndexContainer**
 - ListingIndex
  - ListingIndexItem (Functional Component)

**NewFormListingContainer**
 - NewFormListing

**ProfileContainer**
 - Profile

**UserRentalContainer**
- UserRentalsIndex
 - UserRentalItem

**UserListingContainer**
- UserListingsIndex
 - UserListingItem
  - Rentals (Functional Component)

**UserProfile**

## Routes

|Path                        | Component                 |
|----------------------------|---------------------------|
| "/"                        | "App" (IndexRoute is Home)|
| "/sign-up"                 | "AuthFormContainer"       |
| "/sign-in"                 | "AuthFormContainer"       |
| "/search"                  | "SearchResultsContainer"  |
| "/listings/:listing_id"    | "ListingsIndexContainer"  |
| "/new-listing"             | "NewFormListing"          |
| "/my-listings"             | "UserListingContainer"    |
| "/my-rentals"              | "UserRentalContainer"     |
| "/profile"                 | "UserProfile"             |
