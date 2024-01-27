
<div align="center">
<img src='/github/Logo.svg'/>
</div>

<h1 align="center">📊 InventoryPro: A Smart Inventory Management Solution</h1>

# Overview
InventoryPro: A cutting-edge inventory management solution designed for seamless control and optimization. 🚀 Efficiently track, manage, and organize your inventory with this smart app. 📈 Utilizing intelligent algorithms, InventoryPro ensures accurate stock levels, reducing errors and enhancing productivity. 💡 Features include real-time updates, intuitive user interface, and robust reporting tools. 🔄 Simplify your inventory workflows, save time, and make informed decisions with InventoryPro. 🌐 Compatible across platforms, this open-source project is built for businesses of all sizes. Explore the future of inventory management now! #InventoryManagement 

# Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


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

# Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


# Authors

- [@Shuvo khan](https://github.com/ShuvoProgram)