const Navbar = () => {
    return (
      <nav className="w-full bg-white shadow-md p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Book App</h1>
        <div className="space-x-4">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#" className="text-blue-600">Genres</a>
          <a href="#" className="text-blue-600">Logout</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;