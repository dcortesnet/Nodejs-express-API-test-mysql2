CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO users (name, age, email) VALUES
('John Doe', 30, 'johndoe@example.com'),
('Jane Doe', 25, 'janedoe@example.com'),
('Raul Doe', 31, 'rauldoe@example.com');