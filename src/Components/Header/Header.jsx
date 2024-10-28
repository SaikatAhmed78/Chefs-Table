import { FaUser } from "react-icons/fa";


const Header = () => {
    return (
        <div>

<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Recipe Calories</a>

    <ul className="menu menu-horizontal w-full gap-2 px-2 md:flex justify-center text-lg hidden">
        <li>Home</li>
        <li>Recipes</li>
        <li>About</li>
        <li></li>
    </ul>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-18  rounded-full bg-green-500 flex justify-center items-center">
        <FaUser />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<hr />

        </div>
    );
};

export default Header;