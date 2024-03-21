import burgerIcon from "../../../../assets/fi_menu.svg";
import dropdown from "../../../../assets/fi_chevron-down.svg";
import searchIcon from "../../../../assets/fi_search.svg";

interface IContentHeaderProps {
  collapse: boolean;
  setCollapse: (collapse: boolean) => void;
}

export default function ContentHeader({
  collapse,
  setCollapse,
}: IContentHeaderProps) {
  return (
    <div className="bg-slate-100 sticky top-0 z-50">
      <div
        id="header"
        className="p-3 px-5 bg-white shadow-md flex items-center justify-between"
      >
        <button onClick={() => setCollapse(!collapse)} className="p">
          <img src={burgerIcon} alt="Burger Icon" />
        </button>
        <div className="flex space-x-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="search"
            className="flex"
          >
            <div className="border p-2 px-3 flex space-x-3">
              <img src={searchIcon} alt="" />
              <input
                type="search"
                placeholder="Search"
                className="focus:outline-none text-gray-500"
              />
            </div>
            <button
              type="submit"
              className="border border-blue-700 text-blue-700 px-3"
            >
              Search
            </button>
          </form>
          <div id="profile" className="flex items-center space-x-2">
            <div className="flex items-center justify-center p-5 rounded-full bg-slate-500"></div>
            <p>Testing</p>
            <img
              className="hover:cursor-pointer"
              src={dropdown}
              alt="dropdown"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
