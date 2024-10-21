const Employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "e@e.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      complete: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Review Sales Report",
        taskDescription:
          "Review the quarterly sales report and provide feedback.",
        taskDate: "2024-10-19",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Update CRM",
        taskDescription: "Update customer data in the CRM system.",
        taskDate: "2024-10-17",
        category: "Customer Management",
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team meeting.",
        taskDate: "2024-10-20",
        category: "Meetings",
      },
    ],
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 2,
      complete: 1,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        complete: false,
        failed: true,
        taskTitle: "Bug Fixing",
        taskDescription:
          "Fix the bugs reported in the latest version of the software.",
        taskDate: "2024-10-18",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review code submitted by other developers.",
        taskDate: "2024-10-19",
        category: "Development",
      },
      {
        active: false,
        newTask: true,
        complete: true,
        failed: false,
        taskTitle: "Database Migration",
        taskDescription: "Migrate the database to the new server.",
        taskDate: "2024-10-15",
        category: "Database",
      },
    ],
  },
  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 2,
      complete: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Design Mockup",
        taskDescription: "Create design mockups for the new landing page.",
        taskDate: "2024-10-19",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Client Presentation",
        taskDescription: "Prepare and deliver a presentation for the client.",
        taskDate: "2024-10-16",
        category: "Client Relations",
      },
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Marketing Campaign",
        taskDescription:
          "Develop a marketing campaign for the upcoming product release.",
        taskDate: "2024-10-20",
        category: "Marketing",
      },
    ],
  },
  {
    id: 4,
    firstName: "Kavya",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Customer Support",
        taskDescription: "Resolve customer issues reported via the help desk.",
        taskDate: "2024-10-19",
        category: "Support",
      },
      {
        active: false,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Internal Audit",
        taskDescription: "Conduct an internal audit of the company's finances.",
        taskDate: "2024-10-21",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Inventory Check",
        taskDescription: "Perform a full inventory check of the warehouse.",
        taskDate: "2024-10-14",
        category: "Logistics",
      },
    ],
  },
  {
    id: 5,
    firstName: "Ravi",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      complete: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "User Research",
        taskDescription: "Conduct user research for the new product line.",
        taskDate: "2024-10-20",
        category: "Research",
      },
      {
        active: false,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Data Analysis",
        taskDescription: "Analyze the survey data collected from users.",
        taskDate: "2024-10-22",
        category: "Data Science",
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Product Demo",
        taskDescription: "Provide a demo of the product to the sales team.",
        taskDate: "2024-10-19",
        category: "Product",
      },
    ],
  },
];

const Admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("Employees", JSON.stringify(Employees));
  localStorage.setItem("Admin", JSON.stringify(Admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("Employees"));
  const admin = JSON.parse(localStorage.getItem("Admin"));

  return { employees, admin };
};
