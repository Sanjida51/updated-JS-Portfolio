// /* JS practise

// const sanji="Hello World";// string
// const number=10; //number
// const isLogin= true; //boolean
// const friends=["Mahi", "pihu", "Fas"]; //Array

// const person={
//                     name: "Sanji",
//                     age: 20,
//                     job: "Student",

// };  //object

// console.log(sanji);
// console.log(number);
// console.log(isLogin);
// console.log(friends);
// console.log(person);
// */

// function handlecontact(event){
//                     event.preventDefault();
//                     console.log("contact");
//                    // console.log(event);
// //                    console.log(event.target);
// //                    console.log(event.target.name);
// //                    console.log(event.target.email);
// //                    console.log(event.target.message);

//       const name= event.target.name.value;
//       const email= event.target.email.value;
//       const message= event.target.message.value;

//       console.log(name);
//       console.log(email);
//       console.log(message);

//       const successcontainer = document.getElementById("success-container");
//       console.log(successcontainer);

//       const nameparagraph = document.createElement("p");
//       nameparagraph.innerText = `Your name : ${name}`;

//       const emailparagraph = document.createElement("p");
//       emailparagraph.innerText = `Your email : ${email}`;

//       const messageparagraph = document.createElement("p");
//       messageparagraph.innerText = `Your message : ${message}`;

//       console.log(nameparagraph);
//       console.log(emailparagraph);
//       console.log(messageparagraph);

//       successcontainer.appendChild(nameparagraph);
//       successcontainer.appendChild(emailparagraph);
//       successcontainer.appendChild(messageparagraph);
// }



// script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
      // Array containing the paths to the additional project images
      const additionalProjects = [
          "./image/pr/image 6.png",
          "./image/pr/image 3.png",
          "./image/pr/image 7.png",
          "./image/pr/image 6.png"
      ];
  
      // Get references to the project grid and button
      const projectGrid = document.getElementById('project-grid');
      const loadMoreBtn = document.getElementById('load-more-btn');
  
      // Check if elements are properly selected
      if (!projectGrid) {
          console.error('Element with id "project-grid" not found.');
          return;
      }
      if (!loadMoreBtn) {
          console.error('Element with id "load-more-btn" not found.');
          return;
      }
  
      // Add event listener to the button
      loadMoreBtn.addEventListener('click', function() {
          // Check if the button click is triggered
          console.log('Button clicked!');
  
          // Loop through each image path and create an image element
          additionalProjects.forEach(function(imageSrc) {
              const img = document.createElement('img');
              img.src = imageSrc;
              img.alt = 'Project Image';
              img.style.maxWidth = '100%'; // Optional: Ensure images fit well in the container
              img.style.margin = '10px'; // Optional: Add some space around images
              projectGrid.appendChild(img);
          });
  
          // Hide the button after loading more projects
          loadMoreBtn.style.display = 'none';
      });
  });
  






