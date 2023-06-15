export const menuItems = [
  { title: "Home", url: "/" },
  {
    title: "Menu",
    url: "Menu",
    submenu: [
      {
        title: "Tools",
        url: "/Tools",
        submenu: [
          { title: "Brown Noise", url: "BrownNoise" },
          { title: "Pomodoro", url: "Pomodoro" },
        ],
      },
      {
        title: "Survey", url: "Survey"
      },
      { 
        title: "Admin", url: "Profile"
      }
    ],
  },
];
