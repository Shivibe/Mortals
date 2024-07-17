document.addEventListener('DOMContentLoaded', function() {
  // Function to initialize the webpage
  function initializePage() {
    animateHeader();
    loadVideos();
    loadPhotos();
  }

  // Function to animate the header
  function animateHeader() {
    const header = document.querySelector('header h1');
    header.classList.add('glitch-animation');
  }

  // Function to load videos dynamically
  function loadVideos() {
    const videoContainer = document.querySelector('#videos .video-container');
    // Placeholder URLs for videos
    const videoUrls = ['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4', 'video5.mp4', 'video6.mp4', 'video7.mp4', 'video8.mp4', 'video9.mp4'];

    videoUrls.forEach((url) => {
      const videoElement = document.createElement('video');
      videoElement.src = url;
      videoElement.controls = true;
      videoContainer.appendChild(videoElement);
    });
  }

  // Function to load photos dynamically
  function loadPhotos() {
    const photoGrid = document.querySelector('#photos .photo-grid');
    // Placeholder URLs for photos
    const photoUrls = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg', 'photo7.jpg', 'photo8.jpg', 'photo9.jpg'];

    photoUrls.forEach((url) => {
      const photoElement = document.createElement('img');
      photoElement.src = url;
      photoElement.alt = 'Photo';
      photoGrid.appendChild(photoElement);
    });
  }
  // Function to load text content for each section
function loadTextContent() {
  // Define the main container
  const mainContainer = document.querySelector('main');

  // Define the content for each section
  const sectionsContent = [
    {
      title: "Economic Interests and Industrial Competition",
      text: "CLASSIFIED REPORT: ECONOMIC INTERESTS AND INDUSTRIAL COMPETITION DURING WORLD WAR I

INTRODUCTION

This report delves into the intricate web of economic interests and industrial competition that underpinned the global landscape during World War I. The period leading up to the Great War was characterized by intense rivalries among the major powers, driven primarily by economic motives. The intertwining of economic interests with geopolitical ambitions played a pivotal role in escalating tensions and ultimately precipitating the outbreak of war.

1. ECONOMIC INTERESTS AND COLONIAL EMPIRES

1.1 Pre-War Economic Rivalries

Prior to the outbreak of World War I, Europe was embroiled in a fierce competition for economic dominance. The major powers, including Britain, France, Germany, and Russia, sought to expand their colonial empires and secure access to vital resources such as raw materials and markets for their manufactured goods. This scramble for colonies fueled tensions and rivalries, particularly in regions rich in natural resources.

1.2 Economic Exploitation and Imperialism

The colonial empires established by European powers served as sources of cheap labor, raw materials, and markets for finished goods. Economic exploitation of colonies was rampant, with indigenous populations subjected to forced labor and harsh working conditions. The economic interests of colonial powers were closely intertwined with their imperial ambitions, leading to the subjugation and exploitation of vast territories across Africa, Asia, and the Americas.

2. INDUSTRIALIZATION AND MILITARY PREPAREDNESS

2.1 Arms Race and Industrial Warfare

The industrial revolution of the 19th century transformed warfare by facilitating the mass production of weapons and munitions on an unprecedented scale. The major powers invested heavily in expanding their industrial capacities and modernizing their armed forces, leading to an arms race characterized by the relentless pursuit of military superiority. The burgeoning arms industry fueled economic growth and provided lucrative opportunities for industrialists and arms manufacturers.

2.2 Economic Interests and Military Alliances

The formation of military alliances, such as the Triple Entente and the Triple Alliance, was driven by strategic considerations as well as economic interests. Member states sought to safeguard their economic investments and colonial possessions through mutual defense agreements, thereby amplifying the stakes of any potential conflict. Economic entanglements between allied and rival powers further exacerbated tensions and created a volatile geopolitical environment.

3. ECONOMIC IMPACT OF WORLD WAR I

3.1 War Economies and Total Mobilization

The outbreak of World War I triggered a massive realignment of global economies as nations mobilized their resources for total war. Governments imposed wartime controls over key industries, implemented rationing and price controls, and directed national economies towards the production of war materiel. The transition to a war economy led to significant disruptions in global trade and commerce, exacerbating pre-existing economic rivalries and inequalities.

3.2 Economic Consequences and Post-War Reconstruction

The economic devastation wrought by World War I laid the groundwork for the Great Depression and set the stage for future conflicts. The Treaty of Versailles imposed heavy reparations on Germany, exacerbating economic hardship and political instability in the interwar period. The reconstruction efforts that followed the war fueled further competition among the victorious powers for control over key industries and markets, perpetuating the cycle of economic rivalries and geopolitical tensions.

CONCLUSION

The nexus of economic interests and industrial competition played a central role in shaping the geopolitical landscape of World War I and its aftermath. The pursuit of economic advantage fueled rivalries among the major powers, leading to a catastrophic conflict that reshaped the course of history. Understanding the complex interplay between economic interests, industrial competition, and geopolitical ambitions is essential for deciphering the underlying causes of World War I and its far-reaching consequences.."
    },
    {
      title: "Secret Treaties and Diplomatic Deception",
      text: "Description for Secret Treaties and Diplomatic Deception goes here."
    },
    {
      title: "Militarism and the Arms Race",
      text: "Description for Militarism and the Arms Race goes here."
    },
    {
      title: "Political Manipulation and Propaganda",
      text: "Description for Political Manipulation and Propaganda goes here."
    },
    {
      title: "Geopolitical Strategy and Pre-War Maneuvering",
      text: "Description for Geopolitical Strategy and Pre-War Maneuvering goes here."
    }
  ];

  // Loop through each section content and create corresponding HTML elements
  sectionsContent.forEach(section => {
    // Create a new section element
    const sectionElement = document.createElement('section');
    sectionElement.id = section.title.replace(/\s+/g, '-').toLowerCase(); // Convert title to ID format
    sectionElement.innerHTML = `
      <h2>${section.title}</h2>
      <p>${section.text}</p>
    `;

    // Append the section to the main container
    mainContainer.appendChild(sectionElement);
  });
}

// Call the function to load text content for each section
loadTextContent();


  // Initialize the webpage
  initializePage();
});
