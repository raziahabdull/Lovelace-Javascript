 const container = document.getElementById('container');
 console.log('parent',container.parentElement);
 console.log('previous sibling...',container.previiousElementSibling);
 console.log('Next sibling...',container.nextElementSibling);
 console.log('children',container.children);

 const containerText = document.getElementById('container-text')
 containerText.innerHTML ='Am I really a child?'

 //creating DOM Element
 const newHeading = document.createElement('h1')
 container.appendChild(newHeading);
 newHeading.innerHTML = 'Introduction'
 newHeading.style.color="red"
 const button = document.getElementById('button');
 button.style.border='none';
 button.style.padding = '10px 15px';
 button.style.color = "white";
 button.style.borderRadius = "5px";
 button.style.cursor = 'pointer'
 button.style.background = "green";

 button.addEventListener('click',function(){
    button.innerHTML ='clicked!'
    button.style.background = "blue";
    button.style.color = '#ffffff';
 });
