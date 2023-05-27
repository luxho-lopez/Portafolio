const link = document.querySelectorAll('.menu__item-link');


link.forEach((el) => {
    el.addEventListener('click', () => {
        link.forEach((el) => {
            el.classList.remove('active');
        });
        el.classList.add('active');
    });
});


const resultado_proyecto = document.querySelector('#proyecto__item');

document.addEventListener('DOMContentLoaded', () => {
    mostrarProyectos(proyectos);
});

function mostrarProyectos(proyectos) {
    proyectos.forEach(proyecto => {
        const { id, title, image, github, demo } = proyecto;

        const proyectoHTML = document.createElement('div');
        proyectoHTML.classList.add('proyecto__item');
        proyectoHTML.innerHTML = `
            <div class="proyecto__item-img">
                <img src="${image}" alt="${title}">
            </div>
            <div class="proyecto__item-info">
                <h3>${title}</h3>
                <div class="buttons">
                    <a href="${github}" target="_blank"><button class="btn btn-light">Github</button></a>
                    <a href="${demo}" target="_blank"><button class="btn btn-color">Live Demo</button></a>
                </div>
            </div>
        `;
        resultado_proyecto.appendChild(proyectoHTML);
    });
};


// TESTIMONIALS
const resultado_testimonial = document.querySelector('#testimonials__item');

document.addEventListener('DOMContentLoaded', () => {
    mostrarTestimonial(data);
});

function mostrarTestimonial(data) {
    data.forEach(testimonial => {
        const { avatar, name, review } = testimonial;

        const testimonialHTML = document.createElement('div');
        testimonialHTML.classList.add('testimonial__item');
        testimonialHTML.innerHTML = `
            <div class="testimonial__item-img">
                <img src="${avatar}" alt="${name}">
            </div>
            <div class="testimonial__item-info">
                <h4>${name}
                    <span class="text-light">${review}<span>
                </h4>
            </div>
        `;
        resultado_testimonial.appendChild(testimonialHTML);
    });
};


// SLIDER
