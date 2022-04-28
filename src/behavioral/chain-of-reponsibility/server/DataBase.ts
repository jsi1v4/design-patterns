import PermissionType from "./PermissionType";

const DataBase = [
  {
    email: "admin@test.com",
    password: "123456",
    permission: PermissionType.ADMIN
  },
  {
    email: "user@test.com",
    password: "u53rp@ss",
    permission: PermissionType.USER
  }
];

export default DataBase;
