import User from "./Model/User/User";
import Role from "./Model/User/Role";
import Month from "./Model/Month";

const seedDatabase = async () => {
  try {
    const adminRole = await Role.create({ roleName: "Admin" });
    const userRole = await Role.create({ roleName: "User" });

    await seedMonths();

    await User.create({
      name: "John Doe",
      email: "john@example.com",
      roleId: adminRole,
    });
    await User.create({
      name: "Jane Smith",
      email: "jane@example.com",
      roleId: userRole,
    });

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

const seedMonths = async () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  try {
    for (let month of months) {
      await Month.create({
        month: month,
      });
    }
  } catch (error) {
    console.error("Error seeding months:", error);
  }
};

export default seedDatabase;
