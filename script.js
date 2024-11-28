/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  
  // Función para mostrar el PopUp
  // Función para mostrar el PopUp con una animación de aparición
  function toggleModal() {
    var modal = document.getElementById('myModal');
    var modalContent = document.querySelector('.modal-content');
  
    if (modal.style.display === 'block') {
      modalContent.style.opacity = 0;
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300); // Duración de la transición en milisegundos (300ms en este caso)
    } else {
      modal.style.display = 'block';
      setTimeout(() => {
        modalContent.style.opacity = 1;
      }, 10); // Breve retraso para asegurarse de que el modal esté visible y la transición sea efectiva
    }
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
      var modalContent = document.querySelector('.modal-content');
      modalContent.style.opacity = 0;
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    }
  }
  
  