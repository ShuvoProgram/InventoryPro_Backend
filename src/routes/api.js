const express = require("express");
const router = express.Router();

//Auth Verify Middleware
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');
// Users Controller modules
const UsersController = require('../controllers/Users/UsersController');
// Brand Controller modules
const BrandsControllers = require('../controllers/Brands/BrandsControllers');
// Categories Controller modules
const CategoriesControllers = require('../controllers/Categories/CategoriesControllers');
// Customers Controller modules
const CustomersControllers = require('../controllers/Customers/CustomersControllers');
// Suppliers Controller modules
const SuppliersControllers = require('../controllers/Suppliers/SuppliersControllers');
// Expense Type Controller modules
const ExpenseType = require('../controllers/Expense/expenseTypeControllers');
// Expense Controller modules
const Expenses = require('../controllers/Expense/expenseControllers');
// Product Controller modules
const ProductController = require('../controllers/Product/productControllers');
// Purchases Controller modules
const PurchasesController = require('../controllers/Purchase/purchaseControllers');
// Return Controller modules
const ReturnController = require('../controllers/Returns/returnsController');
// sales Controller modules
const SalesController = require('../controllers/Sales/salesControllers');
// sales Controller modules
const ReportController = require('../controllers/Report/reportControllers');
// sales Controller modules
const SummaryController = require('../controllers/Summary/summaryControllers');

// testing router
router.get("/", (req, res) => {
  res.send("This is tasting Router");
});

// users Router
router.post("/registration",UsersController.Registration);
router.post("/login",UsersController.Login);
router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.ProfileUpdate);
router.get("/profileDetails",AuthVerifyMiddleware,UsersController.ProfileDetails);
router.get("/recoverEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/verifyOtp/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/resetPassword",UsersController.resetPassword );

// Brand Routing
router.post("/createBrand",AuthVerifyMiddleware,BrandsControllers.CreateBrand);
router.post("/updateBrand/:id",AuthVerifyMiddleware,BrandsControllers.UpdateBrand);
router.get("/brandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BrandsControllers.BrandList);
router.get("/brandDropDown",AuthVerifyMiddleware,BrandsControllers.BrandDropDown);
router.get("/deleteBrand/:id",AuthVerifyMiddleware,BrandsControllers.DeleteBrand);
router.get("/brandDetails/:id",AuthVerifyMiddleware,BrandsControllers.BrandDetails);

// Categories Routing
router.post("/createCategories",AuthVerifyMiddleware,CategoriesControllers.CreateCategories);
router.post("/updateCategories/:id",AuthVerifyMiddleware,CategoriesControllers.UpdateCategories);
router.get("/categoriesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CategoriesControllers.CategoriesList);
router.get("/categoriesDropDown",AuthVerifyMiddleware,CategoriesControllers.CategoriesDropDown);
router.get("/deleteCategories/:id",AuthVerifyMiddleware,CategoriesControllers.DeleteCategories);
router.get("/categoriesDetails/:id",AuthVerifyMiddleware,CategoriesControllers.CategoriesDetails);

// Customers Routing
router.post("/createCustomers",AuthVerifyMiddleware,CustomersControllers.CreateCustomers);
router.post("/updateCustomers/:id",AuthVerifyMiddleware,CustomersControllers.UpdateCustomers);
router.get("/customersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CustomersControllers.CustomersList);
router.get("/customersDropDown",AuthVerifyMiddleware,CustomersControllers.CustomersDropDown);
router.get("/deleteCustomers/:id",AuthVerifyMiddleware,CustomersControllers.DeleteCustomers);
router.get("/customersDetails/:id",AuthVerifyMiddleware,CustomersControllers.CustomersDetails);

// Suppliers Routing
router.post("/createSuppliers",AuthVerifyMiddleware,SuppliersControllers.CreateSuppliers);
router.post("/updateSuppliers/:id",AuthVerifyMiddleware,SuppliersControllers.UpdateSuppliers);
router.get("/suppliersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SuppliersControllers.SuppliersList);
router.get("/suppliersDropDown",AuthVerifyMiddleware,SuppliersControllers.SuppliersDropDown);
router.get("/deleteSupplier/:id",AuthVerifyMiddleware,SuppliersControllers.DeleteSuppliers);
router.get("/supplierDetails/:id",AuthVerifyMiddleware,SuppliersControllers.SuppliersDetails);

// Expense Types Routing
router.post("/createExpenseType",AuthVerifyMiddleware,ExpenseType.CreateExpenseTypes);
router.post("/updateExpenseType/:id",AuthVerifyMiddleware,ExpenseType.UpdateExpenseTypes);
router.get("/expenseTypeList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ExpenseType.ExpenseTypesList);
router.get("/expenseTypeDropDown",AuthVerifyMiddleware,ExpenseType.ExpenseTypesDropDown);
router.get("/deleteExpenseType/:id",AuthVerifyMiddleware,ExpenseType.DeleteExpenseTypes);
router.get("/expenseTypeDetails/:id",AuthVerifyMiddleware,ExpenseType.ExpenseTypesDetails);

// Expense Routing
router.post("/createExpense",AuthVerifyMiddleware,Expenses.CreateExpense);
router.post("/updateExpense/:id",AuthVerifyMiddleware,Expenses.UpdateExpense);
router.get("/expenseList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,Expenses.ExpenseList);
router.get("/deleteExpense/:id",AuthVerifyMiddleware,Expenses.DeleteExpense);
router.get("/expenseDetails/:id",AuthVerifyMiddleware,Expenses.ExpenseDetails);

// Product Routing
router.post("/createProduct",AuthVerifyMiddleware,ProductController.CreateProduct);
router.post("/updateProduct/:id",AuthVerifyMiddleware,ProductController.UpdateProduct);
router.get("/productList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ProductController.ProductList);
router.get("/deleteProduct/:id",AuthVerifyMiddleware,ProductController.DeleteProduct);
router.get("/productDetails/:id",AuthVerifyMiddleware,ProductController.ProductDetails);
router.get("/productDropDown",AuthVerifyMiddleware,ProductController.ProductsDropDown);

// Purchases
router.post("/createPurchases",AuthVerifyMiddleware,PurchasesController.CreatePurchases);
router.get("/purchasesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,PurchasesController.PurchasesList);
router.get("/deletePurchase/:id",AuthVerifyMiddleware,PurchasesController.DeletePurchases);

// Sales
router.post("/createSales",AuthVerifyMiddleware,SalesController.CreateSales);
router.get("/salesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SalesController.SalesList);
router.get("/deleteSales/:id",AuthVerifyMiddleware,SalesController.DeleteSales);

// Return 
router.post("/createReturn",AuthVerifyMiddleware,ReturnController.CreateReturn);
router.get("/returnList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ReturnController.ReturnList);
router.get("/deleteReturn/:id",AuthVerifyMiddleware,ReturnController.DeleteReturn);

// Report
router.post("/expensesByDate",AuthVerifyMiddleware,ReportController.ExpensesByDate);
router.post("/returnByDate",AuthVerifyMiddleware,ReportController.ReturnByDate);
router.post("/purchaseByDate",AuthVerifyMiddleware,ReportController.PurchaseByDate);
router.post("/salesByDate",AuthVerifyMiddleware,ReportController.SalesByDate);

// Summary
router.get("/expensesSummary",AuthVerifyMiddleware,SummaryController.ExpensesSummary);
router.get("/returnSummary",AuthVerifyMiddleware,SummaryController.ReturnSummary);
router.get("/purchaseSummary",AuthVerifyMiddleware,SummaryController.PurchaseSummary);
router.get("/salesSummary",AuthVerifyMiddleware,SummaryController.SalesSummary);

module.exports = router;
