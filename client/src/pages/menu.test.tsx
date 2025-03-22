import { screen } from "@testing-library/react";
// Test if the POS system allows users to select menu items.
// Check if items can be added to the cart correctly.

// Verify the display of menu items (with name, ingredients, quantity, and price).

describe("POS system", () => {

  it("should render the display of menu items.", async () => {

    screen.getByTestId('menu-card')
  });
});
