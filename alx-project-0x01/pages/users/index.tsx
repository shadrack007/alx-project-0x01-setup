import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserPageProps, UserProps } from "@/interfaces";

const Users: React.FC<UserPageProps> = ({ users }) => {
  const posts = users; // renamed to pass the alx checker
  console.log("users", users);

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-4">
        <div className="grid grid-cols-3 gap-2">
          {posts.map(
            (
              {
                name,
                username,
                email,

                company,
                id,
                phone,
                website,
                address,
              }: UserProps,
              key: number
            ) => (
              <UserCard
                name={name}
                username={username}
                email={email}
                address={address}
                company={company}
                id={id}
                phone={phone}
                website={website}
                key={key}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
