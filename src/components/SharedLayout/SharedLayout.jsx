import { Link, Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Shop</Link>
          <Link to="/order">Your order</Link>
          <Link to="/story">Story of orders</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
