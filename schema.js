//Schema Creation (using SQL):

-- Product Category Table
CREATE TABLE Product_Category (
    id INT PRIMARY KEY,
    name VARCHAR,
    description TEXT,
    created_at TIMESTAMP,
    modified_at TIMESTAMP,
    deleted_at TIMESTAMP
);

-- Product Inventory Table
CREATE TABLE Product_Inventory (
    id INT PRIMARY KEY,
    quantity INT,
    created_at TIMESTAMP,
    modified_at TIMESTAMP,
    deleted_at TIMESTAMP
);

-- Discount Table
CREATE TABLE Discount (
    id INT PRIMARY KEY,
    name VARCHAR,
    description TEXT,
    discount_percent DECIMAL,
    active BOOLEAN,
    created_at TIMESTAMP,
    modified_at TIMESTAMP
);

-- Product Table
CREATE TABLE Product (
    id INT PRIMARY KEY,
    name VARCHAR,
    description TEXT,
    SKU VARCHAR,
    category_id INT,
    inventory_id INT,
    price DECIMAL,
    discount_id INT,
    created_at TIMESTAMP,
    modified_at TIMESTAMP,
    deleted_at TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES Product_Category(id),
    FOREIGN KEY (inventory_id) REFERENCES Product_Inventory(id),
    FOREIGN KEY (discount_id) REFERENCES Discount(id)
);
