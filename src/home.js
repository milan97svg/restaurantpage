const createHomePage = () => {
    const content = document.querySelector("#content")
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content")

    const image = document.createElement("div");
    image.classList.add("homeimage")
    const heading = document.createElement("h1");
    heading.classList.add("homeheading");
    heading.innerText = "ITS TIME TO ENJOY THE FINER THINGS IN LIFE";
    image.appendChild(heading);
    pageContent.appendChild(image)

    const button = document.createElement("button");
    button.classList.add("homebutton");
    button.innerText = "Discover our Menu";
    heading.appendChild(button);

    content.appendChild(pageContent);
}

export default createHomePage;