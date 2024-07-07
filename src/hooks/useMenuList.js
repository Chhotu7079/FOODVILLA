import { useEffect, useState } from "react";

const useMenuList = (id) => {
  const [resturantdeatil, setResturantdetail] = useState([]);
  const [menudeatil, setMenudetail] = useState([]);

  useEffect(() => {
    getResturantsInfo();
  }, []);

  async function getResturantsInfo() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        id
    );
    const json = await data.json();
    const menu = json?.data?.cards?.find((x) => x.groupedCard)?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    setResturantdetail(json.data?.cards);
    setMenudetail(menu);
  }

  return [resturantdeatil, menudeatil];
};
export default useMenuList;
