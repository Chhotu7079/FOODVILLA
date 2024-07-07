export function filterdata(searchtxt, searchresturants) {
  return searchresturants.filter((resturant) =>
    resturant.info?.name.toLowerCase().includes(searchtxt.toLowerCase())
  );
}
