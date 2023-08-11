const Atividade1 = (req, res) => {
    // let div     = document.createElement("div");
    // let img     = document.createElement("img");
    // let h1      = document.createElement("h1") ;

    // div.style.border = "1px solid black";
    // img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvocal.media%2Fphotography%2Fas-a-photographer-never-tell-me-you-have-nothing-to-shoot&psig=AOvVaw3DZSLqlWfjm553MuHCz0Bp&ust=1691766636740000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjk6vyv0oADFQAAAAAdAAAAABAK";
    // h1.textContent = "Faz pose bonita para a foto!";
    
    // div.appendChild(img);
    // div.appendChild(h1);

    text = `
    <div>
    <img src="https://res.cloudinary.com/jerrick/image/upload/v1613318166/60294816e5abae001c5260be.jpg" width="100px">
    <h1>Posa pra fotinha!</h1>
    </div>
    `;

    res.send(text);
}

module.exports = {Atividade1};