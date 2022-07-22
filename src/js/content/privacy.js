export const showMenuPrivacy = () => {
    let sections = document.querySelectorAll('.editor__content');
    if(sections.length>0){
        sections.forEach(section => {
            let title = section.querySelector('.editor__content-title');
                title.onclick = () => {
                    section.classList.toggle('active');
                }
        })
    }
}