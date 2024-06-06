import Link from "next/link";

const DrinksList = ({ drinks }: { drinks: any }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink: any) => {
        return (
          <li key={drink.id}>
            <Link
              href={`/drinks/${drink.idDrink}`}
              className="text-xl font-medium"
            >
              {drink.strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;
