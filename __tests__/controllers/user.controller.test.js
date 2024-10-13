const request = require("supertest");
const { app } = require("../../app");
const UserModel = require('../../src/models/user.model');

jest.mock("../../src/models/user.model", () => ({
  getAll: jest.fn()
}));

describe("User Controller", () => {
  test("should return all users", async () => {
    const mockUsers = [
        { id: 1, name: 'John Doe', age: 30, email: "johndoe@example.com"  },
        { id: 2, name: 'Jane Doe', age: 25, email: "Janedoe@example.com"  },
        { id: 3, name: 'Raul Doe', age: 31, email: "rauldoe@example.com"  },
      ];
    UserModel.getAll.mockReturnValue(mockUsers);
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
    expect(response.header["content-type"]).toMatch(/application\/json/);
    expect(response.body.users).toEqual(mockUsers);
  });
});
