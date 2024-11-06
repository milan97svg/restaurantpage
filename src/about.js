const createAboutPage = () => {
    const content = document.querySelector("#content")
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content")

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.innerText = "About Us"
    pageContent.appendChild(heading)

    const about = document.createElement("p")
    about.classList.add("about");
    about.innerText = "Best Restaurant in Town"
    pageContent.appendChild(about)

    content.appendChild(pageContent)
}

export default createAboutPage;