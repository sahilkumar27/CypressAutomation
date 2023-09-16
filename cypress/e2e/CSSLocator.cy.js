
describe('CSSLocator', () => {

    it("csslocators", () =>{

        cy.visit("https://www.amazon.in/")

        // cy.get("#twotabsearchtextbox").type("T-Shirts") // id tag is optional
        // cy.get(".twotabsearchtextbox").type("T-Shirts") // class tag is optional
        cy.get("[name='twotabsearchtextbox']").type("T-Shirts") // attribute tag is optional

        cy.get("#nav-search-submit-button").click()

        cy.get(".a-color-state.a-text-bold").contains("T-Shirts") //Assertion
        



        


    })
})






// describe('Amazon UI Automation', () => {
//     it('should search for Samsung phones and print 10 results using the API', () => {
//       // Open Amazon website
//       cy.visit('https://www.amazon.com/');
  
//       // Wait for the search input to exist
//       cy.get('#twotabsearchtextbox').should('exist').type('Samsung phone{enter}');
  
//       // Wait for the search results to be visible
//       cy.get('.s-main-slot').should('be.visible');
  
//       // Get all product elements
//       cy.get('.s-result-item')
//         .should('have.length.at.least', 10) // Ensure there are at least 10 results
//         .each(($el, index) => {
//           if (index < 10) {
//             const productName = $el.find('.s-title-instructions a').text();
//             const productPrice = $el.find('.a-price-whole').text();
  
//             // Print product information to the console
//             cy.log(`Product ${index + 1}: ${productName} - $${productPrice}`);
//           }
//         });
//     });
//   });
  
