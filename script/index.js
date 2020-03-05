//-----------------------task1------------------------

let tag = document.getElementById("tag-line");

let headings = document.querySelectorAll(".bg-main-content h2");

let collect = `${tag.textContent}\n`;
for(let heading of headings)
    {
        collect += `${heading.textContent}\n`;
    }

alert(collect);


//----------------------------task2-----------------------------

let allh1 = document.getElementsByClassName("bg-main-content")[0];

let when_to_launch = allh1.getElementsByClassName("box")[12];

let allChild = when_to_launch.children;

collect = `${allChild[0].textContent}\n`;

var loop;

for (loop = 1; loop < allChild.length; loop++) {
  	collect += `${allChild[loop].textContent}\n`;
}

alert(collect);

