const socialIconButtons = document.getElementsByClassName("social-icon");

function postToSocialMedia(classList) {
    const content = `Check out my cool generative AI Project 😎 \n${window.location.href.toString()}`;
    if (classList.contains("twitter")) {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      content
    )}`;
        window.open(url);
    } else if (classList.contains("linkedin")) {
        const url = `https://www.linkedin.com/share?text=${encodeURIComponent(
      content
    )}`;
        window.open(url);
    } else if (classList.contains("whatsapp")) {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`);
    }
}

const addEventListenersToSocialIconButton = () => {
    for (let i = 0; i < socialIconButtons.length; i++) {
        socialIconButtons[i].addEventListener("click", () =>
            postToSocialMedia(socialIconButtons[i].classList)
        );
    }
};

addEventListenersToSocialIconButton();

const skillIcon = document.getElementsByClassName("tooltip");


const addEventListenersToSkillIcon = () => {
    for (let i = 0; i < skillIcon.length; i++) {
        skillIcon[i].addEventListener("click", (e) => {
            console.log(e.target)
            updateDescription(e.target.id);
        });
    }
};

addEventListenersToSkillIcon();

const descriptionDiv = document.getElementsByClassName("about-section");
const updateDescription = (id) => {
    let description = "";

    switch (id) {
        case "googleColab":
            description = "Google Colab: User-friendly platform for code writing, execution, and sharing. Beloved by AI experts, students, developers, and researchers for data analysis, ML, and AI exploration.";
            break;
        case "gradio":
            description = "Gradio: A user-friendly tool that allows to create and share interactive Al Apps without extensive Coding Knowledge.";
            break;
        case "openAi":
            description = "OpenAI: An AI-based chat service powered by Open AI's language model. OpenAI APIs offer access to advanced language models and AI capabilities. Integrate NLP, text generation, and more into your apps to revolutionize communication and problem-solving. ";
            break;
        case "playHt":
            description = "PlayHT: PlayHT is a platform that allows you to clone voices using artificial intelligence. The platform uses a deep learning model to train a voice clone that sounds almost exactly like the original voice.";
            break;
        case "huggingFace":
            description = "HuggingFace: The ultimate destination for building, training, and deploying cutting-edge machine learning models! Revolutionize your AI projects with state-of-the-art NLP and more!";
            break;
        case "langChain":
            description = "LangChain: Seamlessly combine Large Language Models (LLMs) with external computation/data. Build chatbots, analyze data effortlessly. Open source for contributions.";
            break;
        default:
            description = "Description of the selected icon will appear here.";
    }
    for (let i = 0; i < descriptionDiv.length; i++) {
        descriptionDiv[i].textContent = description;
    }
};

updateDescription("googleColab");