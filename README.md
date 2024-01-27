<div align="center">
<img src='/github/Logo.svg'/>
</div>

<h1 align="center">📊 InventoryPro: A Smart Inventory Management Solution</h1>

# Overview
InventoryPro: A cutting-edge inventory management solution designed for seamless control and optimization. 🚀 Efficiently track, manage, and organize your inventory with this smart app. 📈 Utilizing intelligent algorithms, InventoryPro ensures accurate stock levels, reducing errors and enhancing productivity. 💡 Features include real-time updates, intuitive user interface, and robust reporting tools. 🔄 Simplify your inventory workflows, save time, and make informed decisions with InventoryPro. 🌐 Compatible across platforms, this open-source project is built for businesses of all sizes. Explore the future of inventory management now! #InventoryManagement 

# Inventory Management System Features 📦

## User Management 🧑‍💻

- Registration: Allow users to register with the system.
- Login: Provide a secure login mechanism for authenticated access.
- Profile Update: Enable users to update their profile information.
- Profile Details: Retrieve and display user profile details.
- Password Recovery: Allow users to recover their account through email verification and OTP.

## Brand Management 🏷️

- Create Brand: Add new brands to the inventory.
- Update Brand: Modify existing brand information.
- Brand List: View a paginated list of all brands with search capabilities.
- Brand Dropdown: Retrieve a dropdown list of brands.
- Delete Brand: Remove a brand from the inventory.
- Brand Details: Get detailed information about a specific brand.

## Category Management 📂

- Create Category: Introduce new product categories.
- Update Category: Modify existing category details.
- Category List: Display a paginated list of all categories with search options.
- Category Dropdown: Retrieve a dropdown list of categories.
- Delete Category: Remove a category from the inventory.
- Category Details: Get detailed information about a specific category.

## Customer Management 🤝

- Create Customer: Add new customers to the system.
- Update Customer: Modify existing customer details.
- Customer List: View a paginated list of all customers with search options.
- Customer Dropdown: Retrieve a dropdown list of customers.
- Delete Customer: Remove a customer from the system.
- Customer Details: Get detailed information about a specific customer.

## Supplier Management 🤝

- Create Supplier: Add new suppliers to the system.
- Update Supplier: Modify existing supplier details.
- Supplier List: View a paginated list of all suppliers with search options.
- Supplier Dropdown: Retrieve a dropdown list of suppliers.
- Delete Supplier: Remove a supplier from the system.
- Supplier Details: Get detailed information about a specific supplier.

## Expense Type Management 💸

- Create Expense Type: Introduce new types of expenses.
- Update Expense Type: Modify existing expense type details.
- Expense Type List: Display a paginated list of all expense types with search options.
- Expense Type Dropdown: Retrieve a dropdown list of expense types.
- Delete Expense Type: Remove an expense type from the system.
- Expense Type Details: Get detailed information about a specific expense type.

## Expense Management 💼

- Create Expense: Add new expenses to the system.
- Update Expense: Modify existing expense details.
- Expense List: View a paginated list of all expenses with search options.
- Delete Expense: Remove an expense from the system.
- Expense Details: Get detailed information about a specific expense.

## Product Management 📱

- Create Product: Introduce new products to the inventory.
- Update Product: Modify existing product details.
- Product List: Display a paginated list of all products with search options.
- Product Dropdown: Retrieve a dropdown list of products.
- Delete Product: Remove a product from the inventory.
- Product Details: Get detailed information about a specific product.

## Purchase Management 🛒

- Create Purchase: Add new purchases to the system.
- Purchase List: View a paginated list of all purchases with search options.
- Delete Purchase: Remove a purchase from the system.
- Sales Management 💰
- Create Sale: Add new sales to the system.
- Sales List: View a paginated list of all sales with search options.
- Delete Sale: Remove a sale from the system.

## Return Management 🔄

- Create Return: Add new returns to the system.
- Return List: View a paginated list of all returns with search options.
- Delete Return: Remove a return from the system.

## Reporting 📊

- Expenses by Date: Retrieve expenses within a specified date range.
- Returns by Date: Retrieve returns within a specified date range.
- Purchases by Date: Retrieve purchases within a specified date range.
- Sales by Date: Retrieve sales within a specified date range.

## Summary 📈

- Expenses Summary: Get an overview of total expenses.
- Returns Summary: Get an overview of total returns.
- Purchases Summary: Get an overview of total purchases.
- Sales Summary: Get an overview of total sales.


# Inventory Management System API

This API provides endpoints for managing various aspects of an inventory management system, including users, brands, categories, customers, suppliers, expenses, products, purchases, sales, returns, reports, and summaries.

## User Operations

- Register User: POST /registration
- Login User: POST /login
- Update Profile: POST /profileUpdate
- Get Profile Details: GET /profileDetails
- Recover Email: GET /recoverEmail/:email
- Verify OTP: GET /verifyOtp/:email/:otp
- Reset Password: POST /resetPassword

## Brand Operations

- Create Brand: POST /createBrand
- Update Brand: POST /updateBrand/:id
- Get Brand List: GET /brandList/:pageNo/:perPage/:searchKeyword
- Get Brand Dropdown: GET /brandDropDown
- Delete Brand: GET /deleteBrand/:id
- Get Brand Details: GET /brandDetails/:id

## Category Operations

- Create Category: POST /createCategories
- Update Category: POST /updateCategories/:id
- Get Category List: GET /categoriesList/:pageNo/:perPage/:searchKeyword
- Get Category Dropdown: GET /categoriesDropDown
- Delete Category: GET /deleteCategories/:id
- Get Category Details: GET /categoriesDetails/:id

## Customer Operations

- Create Customer: POST /createCustomers
- Update Customer: POST /updateCustomers/:id
- Get Customer List: GET /customersList/:pageNo/:perPage/:searchKeyword
- Get Customer Dropdown: GET /customersDropDown
- Delete Customer: GET /deleteCustomers/:id
- Get Customer Details: GET /customersDetails/:id

## Supplier Operations

- Create Supplier: POST /createSuppliers
- Update Supplier: POST /updateSuppliers/:id
- Get Supplier List: GET /suppliersList/:pageNo/:perPage/:searchKeyword
- Get Supplier Dropdown: GET /suppliersDropDown
- Delete Supplier: GET /deleteSupplier/:id
- Get Supplier Details: GET /supplierDetails/:id

## Expense Type Operations

- Create Expense Type: POST /createExpenseType
- Update Expense Type: POST /updateExpenseType/:id
- Get Expense Type List: GET /expenseTypeList/:pageNo/:perPage/:searchKeyword
- Get Expense Type Dropdown: GET /expenseTypeDropDown
- Delete Expense Type: GET /deleteExpenseType/:id
- Get Expense Type Details: GET /expenseTypeDetails/:id

## Expense Operations

- Create Expense: POST /createExpense
- Update Expense: POST /updateExpense/:id
- Get Expense List: GET /expenseList/:pageNo/:perPage/:searchKeyword
- Delete Expense: GET /deleteExpense/:id
- Get Expense Details: GET /expenseDetails/:id

## Product Operations

- Create Product: POST /createProduct
- Update Product: POST /updateProduct/:id
- Get Product List: GET /productList/:pageNo/:perPage/:searchKeyword
- Get Product Dropdown: GET /productDropDown
- Delete Product: GET /deleteProduct/:id
- Get Product Details: GET /productDetails/:id

## Purchase Operations

- Create Purchase: POST /createPurchases
- Get Purchase List: GET /purchasesList/:pageNo/:perPage/:searchKeyword
- Delete Purchase: GET /deletePurchase/:id

## Sales Operations

- Create Sale: POST /createSales
- Get Sale List: GET /salesList/:pageNo/:perPage/:searchKeyword
- Delete Sale: GET /deleteSales/:id

## Return Operations

- Create Return: POST /createReturn
- Get Return List: GET /returnList/:pageNo/:perPage/:searchKeyword
- Delete Return: GET /deleteReturn/:id

## Report Operations

- Expenses by Date: POST /expensesByDate
- Returns by Date: POST /returnByDate
- Purchases by Date: POST /purchaseByDate
- Sales by Date: POST /salesByDate

## Summary Operations

- Expenses Summary: GET /expensesSummary
- Returns Summary: GET /returnSummary
- Purchases Summary: GET /purchaseSummary
- Sales Summary: GET /salesSummary

# Authors

- [@Shuvo khan](https://github.com/ShuvoProgram)