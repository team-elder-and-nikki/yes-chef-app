# User Stories

## Overview 
This document contains the users stories for Yes Chef for the following users: kitchen staff, cashier and management
---

### Feature: Adding menu items
#### User Story # 
As a Cashier, I want to be able to add menu items to the customer cart for checkout using click interface to add either one or multiple menu itemsthis will help to easily add menu items as customers request them to prevent a long process of adding more items to order.

**Acceptance Criteria:**
[]user able to add item to cart
[]cost of item displays in cart
[]user is able to add multiple of the same item to the cart
 

 

### Feature: Removing menu items
#### User Story # 
As a Cashier, I want to remove menu items from the order using simple clicking mechanism so that unwanted items can be quickly removed without causing delays in the checkout process

**Acceptance Criteria:**
[]user can remove items from the order cart and the price is no longer included in the total
[]user can remove multiple of the same item from the order cart
 

### Feature: Sending meeting items to the Kitchen
#### User Story # 
As a Cashier, I want to complete the order and send to the kitchen to start order using seamless completion that may involve a button so that kitchen can start on orders asap and prevent delays in service

**Acceptance Criteria:**
[]user can signify order is ready to be started by kitchen staff
[]user can complete order
 

### Feature: Calculating total and subtotals
#### User Story # 
As a Cashier, I want clearly see the current total of an order  without have to switch screens  so that I can communicate with the patient the cost of all items on order and the subtotal

**Acceptance Criteria:**
[]user can view total and Subtotal calculated in live time
[]user can view cost of each menu items on display
[]total and subtotal displayed on screen
 

### Feature: Changing food category displays
#### User Story # 
As a Cashier, I want to transition for menu categories(apps, entrees, desserts, etc) using a simple interface that displays all of the category options so that I can quickly identify the requested menu item and add them to order


[]user can see all of the menu categories 
[]user can see all of the menu items within that category when said category is choosen

---
## User Story: Management
### Feature: Ingerdient Cost Tracking
#### User Story # 
As a restaurant manager, I want to track ingredient prices using the menu engineering dashboard so that I can better understand how money is being spent on ingredients

**Acceptance Criteria:**
[]I see a list of ingredients
[]I see the amount of ingredient ordered
[]I see the cost of each ingredient
[]I see the total cost of the order

### Feature: Profit Per Dish
#### User Story #
As a Manager I want to view the profitability of each dishusing the menu engineering dashboard so that I can see which dishes are more or less profitable in one place
**Acceptance Criteria:**
[]I see each dish
[]I see the total price of each dish
[]I see the total cost of ingredients
[]I see the net profit of each dish

### Feature: Waste Metrics
#### User Story # 
As a restaurant manager, I want to see how much money is lost due to ingredient waste using the menu engineering dashboard so that I can optimize inventory usage and reduce unnecessary waste.
**Acceptance Criteria:**
[]display current inventory
[]display how much is wasted
[]display how much money is lost due to waste

---

## User Story: Kitchen Staff
### Feature: Order Status Management
#### User Story #
As kitchen staff, I should be able to quickly identify new/unstarted orders so that the order log can be maintained to prevent duplicate work(two team members working on the same ticket) or longer wait times for customers(orders taking long time to be started)

**Acceptance Criteria:**
[]user can easily detect what ticket are new/unstarted
[]user can easily detect what ticket have been started
[]user can see when ticket was placed

### Feature: Order Progress Tracking
#### User Story #
As kitchen staff, I should be able to mark a ticket as in progress so that other team members can know the order has been started to prevent others from working on the same ticket.
**Acceptance Criteria:**
[]user can place ticket in progress to indicate order is being started

### Feature:Order Completion Tracking
#### User Story #
As kitchen staff, I should be able to mark tickets as complete so that the front staff can know when the order is ready for the customer to prevent food waste and excessive wait times for orders

**Acceptance Criteria:**
[]user can mark ticket as complete


### Feature: Food Waste Interface
#### User Story #
As kitchen staff, I should be able to log food waste so that a proper inventory can be kept to prevent running out of ingredients during prep and workday 
**Acceptance Criteria:**
[]User can log the ingredient and the quantity of ingredient that was wasted
[]User can change the quantity of items in inventory manually

### Feature: Predictive Prep Pop-ups
#### User Story #
As a kitchen staff member, I would like to be alerted when and what menu items  need to be prepped to prevent order backlog during peak hours

**Acceptance Criteria:**
[]user is prompted when menu items need to be prepared
[]user can acknowledge items have been prepped and clear alert