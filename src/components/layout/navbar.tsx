import { navitems } from "../home/home.constant";

function NavBar() {
  return (
    <nav className="w-1/6 h-fit bg-white p-4 pb-16 xl:block hidden">
      <ul className="space-y-6">
        {navitems.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-text-black-secondary"
          >
            <img src={item.icon} alt={item.name} className="w-6" />
            <span className="text-sm 2xl:text-base">{item.name}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 py-3 px-1.5 gap-1.5 flex items-center bg-neutral-300">
        <p className="p-2 h-fit bg-primary-600 text-white rounded">Go</p>

        <p className="text-text-black-secondary text-xs 2xl:text-sm font-medium">
          Personal Account
        </p>

        <img src="/assets/caretupdown.svg" alt="caret up down icon" />
      </div>
    </nav>
  );
}

export default NavBar;
