## Component Hierarchy

**AuthFormContainer**
 - AuthForm

 **App**
 - TopBarContainer
 - AuthFormContainer
 - SearchResultsContainer
 - ListingsContainer
 - NewFormListingContainer
 - BottomBarContainer

**TopBarContainer**
- TopBar
- Search

**Search**

**SearchResultsContainer**
 - SearchResults

**ListingsContainer**
 - Listings

**NewFormListingContainer**
 - NewFormListing

**NewFormListing**

**Listings**
- Listing

**Listing**

**Users**
 -UserContainer
 -UserProfile

**UserContainer**
- UserRentals
- UserListings

**UserProfile**

## Routes

|Path                        | Component                 |
|----------------------------|---------------------------|
| "/"                        | "App"                     |
| "/sign-up"                 | "AuthFormContainer"       |
| "/sign-in"                 | "AuthFormContainer"       |
| "/listings/"               | "ListingsContainer"       |
| "/new-listing"             | "NewFormListingContainer" |
| "/listings/:listing_id"    | "Listings"                |
| "/users/:user_id/listings" | "UserContainer"           |
| "/users/:user_id/rentals"  | "UserContainer"           |
| "/users/:user_id"          | "UserProfile"             |
| "/search"                  | "Search"                  |
| "/search-results"          | "SearchResultsContainer"  |
