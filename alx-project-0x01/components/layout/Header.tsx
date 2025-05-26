import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 py-4 text-white shadow-md">
      <div className="flex justify-between items-center mx0auto container">
        <h3 className="font-bold text-2xl ">
          <Link href="/">Daily Contents</Link>
        </h3>

        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link href="/posts">Posts</Link>
            </li>

            <li className="hover:underline">
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
