document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".game-project");

  const imageSources = [
    {
      original: "images/Mini-Golf cover.png",
      hover: "images/MiniGolf_Clip.gif"
    },
    {
      original: "images/Staff of Elysium.png",
      hover: "images/thestaff_clip.gif"
    },
    {
      original: "images/LostDays.png",
      hover: "images/Lost_Days_Clip.gif"
    },
    {
      original: "images/AirHockey.png",
      hover: "images/Air_HockeyClip.gif"
    }
  ];

  projects.forEach((project, index) => {
    const img = project.querySelector(".project-image");
    const originalSrc = imageSources[index].original;
    const hoverSrc = imageSources[index].hover;

    img.src = originalSrc; 

    project.addEventListener("mouseover", function(){
      img.src = hoverSrc;
    });

    project.addEventListener("mouseout", function() {
      img.src = originalSrc;
    });
  });
});
