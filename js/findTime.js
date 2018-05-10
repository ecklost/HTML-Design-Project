		function findTime() {
		  var input, filter, table, tr, td, i;
		  input = document.getElementById("findTime");
		  filter = input.value.toUpperCase();
		  table = document.getElementById("myTable");
		  tr = table.getElementsByTagName("tr");
		  for (i = 2; i < tr.length; i++) {
			td = tr[i].getElementsByTagName("td")[3];
			if (td) {
			  if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			  } else {
				tr[i].style.display = "none";
			  }
			}       
		  }
		}