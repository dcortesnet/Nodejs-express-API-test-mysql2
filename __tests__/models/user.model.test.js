const UserModel = require("../../src/models/user.model");
const { pool } = require("../../db");

jest.mock("../../db");

describe("UserModel", () => {
  test("getAll", async () => {
    const mockUsers = [
      { id: 1, name: "John Doe", age: 30, email: "johndoe@example.com" },
      { id: 2, name: "Jane Doe", age: 25, email: "janedoe@example.com" },
      { id: 3, name: "Raul Doe", age: 31, email: "rauldoe@example.com" },
    ];

    // Simula el comportamiento de la consulta de la base de datos
    pool.query.mockImplementation((query, callback) => {
      callback(null, mockUsers); // Llama al callback sin error y con los usuarios simulados
    });

    const users = await UserModel.getAll();
    expect(users).toEqual(mockUsers);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM users", expect.any(Function));
  });
});
