const members = [
  {
    id: 1,
    name: "Sokheng",
    role: "admin",
    email: "admin1@gmail.com",
    created_at: "2024-06-27",
    status: "active",
    password: "pass123",
  },
  {
    id: 2,
    name: "Sophia",
    role: "user",
    created_at: "2024-06-28",
    status: "active",

    email: "user1@gmail.com",
    password: "pass123",
  },
  {
    id: 3,
    name: "Alexander",
    role: "admin",
    created_at: "2024-06-29",
    status: "resigned",

    email: "admin2@gmail.com",
    password: "pass123",
  },
  {
    id: 4,
    name: "Mia",
    role: "user",
    created_at: "2024-06-30",
    status: "inactive",

    email: "user2@gmail.com",
    password: "pass123",
  },
  {
    id: 5,
    name: "Ethan",
    role: "user",
    created_at: "2024-07-01",
    status: "active",
    email: "user3@gmail.com",
    password: "pass123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("members", JSON.stringify(members));
};
export const getLocalStorage = () => {
  const members = JSON.parse(localStorage.getItem("members"));

  return { members };
};
