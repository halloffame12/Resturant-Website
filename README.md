# Resturant-Website
This code represents the structure and layout of a restaurant website using HTML, CSS, and Bootstrap. Below is a detailed description of the key sections:

### **1. HTML Structure**
The code is built using standard HTML tags to define various sections of the page. It includes meta tags for character set and viewport settings, linking stylesheets, and embedding scripts.

- **`<head>` Section:**
  - Meta tags set the character encoding to UTF-8 and the viewport for responsive design.
  - External CSS files are linked from local directories (`css/bootstrap.css`, `css/all.css`) and a CDN (`bootstrap.min.css`).
  - JavaScript files are also linked for the functionality of the website, including Bootstrap’s JavaScript bundle.

### **2. Header and Navigation**
- **`<header>` Section:**
  - The header includes a responsive navigation bar, created using Bootstrap's `navbar` class.
  - The navbar has links for different sections of the page (Home, About Us, Explore Food, Testimonials, FAQ, etc.) and a contact number button (`tel:+12003451234565`) styled with a class called `main-btn`.
  - A logo image is placed on the left side of the navbar.

### **3. Section: Top Banner**
- **`<section id="home">`:**
  - This is a large introductory banner that includes a heading and paragraph with a call-to-action (CTA) for users to order food.
  - The section uses Bootstrap's grid system for responsive layout.
  - Buttons are provided for users to either "Order Now" or take further action.

### **4. Section: Counter**
- **`<section id="counter">`:**
  - This section includes counters with icons and numbers representing various statistics such as saving, photos, rockets, and globes. The actual counters are expected to be dynamically updated using JavaScript (though not visible in this code snippet).

### **5. Section: About Us**
- **`<section id="about">`:**
  - It showcases a description of the restaurant with images and text.
  - There is a two-column layout using Bootstrap’s grid system. One column holds an image, and the other has a paragraph with a CTA button for further reading.
  - The section also describes the types of food offered.

### **6. Section: Story**
- **`<section id="story">`:**
  - This section provides a brief story about the restaurant or its founder.
  - It is designed with a heading and a short paragraph, followed by a CTA button ("Read more").

### **7. Section: Explore Food**
- **`<section id="explore-food">`:**
  - This section highlights popular food items from the restaurant.
  - Each food item is represented with an image, title, description, price, and an "Order Now" button.
  - The layout uses a responsive grid with multiple cards to display the food items.

### **8. Section: Testimonials**
- **`<section id="testimonial">`:**
  - This section displays customer reviews in a carousel (slider) format.
  - The carousel is powered by Bootstrap’s carousel component, which includes images, quotes, and names of customers.

### **9. Section: FAQ**
- **`<section id="faq">`:**
  - This section contains common questions with answers in a collapsible format.
  - The questions are written in `<h4>` tags, followed by corresponding `<p>` tags with answers.
  - The section allows users to easily find answers to frequently asked questions.

### **10. Section: Book Food**
- **`<section id="book-food">`:**
  - This section encourages users to book food fresh from the restaurant’s bakery.
  - It has a large text encouraging booking and a CTA button to learn more.

### **11. Section: Newsletter Subscription**
- **`<section id="newslatter">`:**
  - This section prompts users to subscribe to the restaurant’s newsletter.
  - It contains a heading, a brief description, and a subscription form (though the form action is not specified in the provided code snippet).

### **12. Styles and Scripts**
- **CSS Styling:**
  - External CSS files (`style.css`, `responsive.css`) are linked for custom styling specific to this restaurant website.
  - The CSS files define the appearance of various components, such as the navigation bar, buttons, and sections.

- **JavaScript:**
  - JavaScript is used for interactivity, such as toggling the mobile navbar, and potentially for dynamically updating the counter values.
  - Additional scripts, like `main.js`, are used for custom functionality.

### **Usage of Bootstrap:**
- The layout of the website uses Bootstrap 5 for responsive design, grid systems, and interactive components like navigation bars, buttons, and carousels.
- The `navbar-expand-lg` class ensures the navigation bar is responsive and collapses into a hamburger menu on smaller screens.
- Bootstrap’s utility classes, such as `text-center`, `ms-auto`, and `mb-5`, make the code cleaner and more responsive without writing custom CSS for basic styling.

### **Conclusion:**
This code represents a well-structured restaurant website with essential sections, including navigation, banners, about us, food exploration, testimonials, FAQs, and newsletter subscription. The layout is responsive, making it mobile-friendly, and uses Bootstrap for rapid development and styling. The website encourages users to interact with CTAs for booking, ordering food, and subscribing to newsletters.
