# -DB-Assignment

1. Relationship between "Product" and "Product_Category" entities:
In the provided schema, the "Product" table has a foreign key named category_id referencing the id field of the "Product_Category" table. This establishes a one-to-many relationship between products and categories, where each product belongs to exactly one category, but a category can have multiple products associated with it. This relationship allows for categorizing products and organizing them efficiently.

2. Ensuring each product has a valid category assigned:
To ensure that each product in the "Product" table has a valid category assigned to it, you can use a foreign key constraint. When creating the "Product" table, define the category_id field as a foreign key referencing the id field of the "Product_Category" table. This constraint will enforce referential integrity, meaning that every value in the category_id field of the "Product" table must exist as a primary key in the "Product_Category" table. Here's an example of how you can define the foreign key constraint:

sql

CREATE TABLE Product (
    id INT PRIMARY KEY,
    name VARCHAR,
    -- Other fields...
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Product_Category(id)
);

With this constraint in place, you cannot insert a product into the "Product" table with a category_id that does not exist in the "Product_Category" table, ensuring that each product has a valid category assigned to it.
