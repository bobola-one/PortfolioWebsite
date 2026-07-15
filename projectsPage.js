let current = 0;
const projects = document.querySelectorAll('.project');
 
function showProject(index) {
   projects.forEach(function (project) {
     project.style.display = 'none';
   });
   projects[index].style.display = 'flex';
}
 
function changeProject(direction) {
   current += direction;
 
   if (current < 0) {
      current = projects.length - 1;
   }
   if (current >= projects.length) {
      current = 0;
   }
 
   showProject(current);
}
 
showProject(current);
