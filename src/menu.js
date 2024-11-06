const createMenuPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content")

    const heading = document.createElement("h1")
    heading.classList.add("heading")
    heading.innerText = "Our Menu"
    pageContent.appendChild(heading)

    

    content.appendChild(pageContent)
}

export default createMenuPage;