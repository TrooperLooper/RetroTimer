interface UserCardProps {
  email: string;
  firstName: string;
  profilePicture?: string;
}

// Removed unused UserCardComponent

export const mockUserCardData: UserCardProps[] = [
  {
    email: "alice@example.com",
    firstName: "Alice",
    profilePicture: "/assets/alice_avatar.png",
  },
  {
    email: "bob@example.com",
    firstName: "Bob",
    profilePicture: "/assets/bob_avatar.png",
  },
];

// Usage example
// <UserCardComponent {...mockUserCardData[0]} />
