const createHomePage = () => {
    const content = document.querySelector("#content")
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content")

    const image = document.createElement("img");
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Jacks_logo_2018.svg/1200px-Jacks_logo_2018.svg.png"
    image.height = 200;
    pageContent.appendChild(image);

    const headLine = document.createElement("h1");
    headLine.classList.add("heading");
    headLine.innerText = "Welcome to our restaurant";
    pageContent.appendChild(headLine)

    const copy = document.createElement("p");
    copy.classList.add("copy");
    copy.innerText = "We serve the best food in town. Come and taste it."
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
}

export default createHomePage;