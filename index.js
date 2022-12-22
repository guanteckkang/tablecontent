let table_content = document.querySelector("[data-toc]");
const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll("p");

function replaceId(i) {
  if (i.id == "") {
    i.id = i.innerHTML.replaceAll(" ", "-").toLowerCase();
  }
}
for (i of h2) {
  replaceId(i);
}

let text = "";
for (i of h2) {
  text += `<li><a href="#${i.id}">${i.innerHTML}</a></li>`;
}
if (text) {
  let title = table_content.getAttribute("data-toc");
  table_content.innerHTML = `<p><strong>${
    title ? title : "Table of Contents"
  }</strong></p>
		<ol>
			${text}
		</ol>`;
}
