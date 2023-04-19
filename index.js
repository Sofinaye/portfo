const showCaseProject = {
  title: 'Multi-Post Stories',
  description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standar dummy text.',
  image: './img/tonic2.png',
  technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  seeLive: '#',
  seeSource: '#',
};

const projectsData = [
  {
    titleTop: 'Professional art',
    titleBottom: 'printing data',
    description:
      'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry`s standard',
    image: './img/art1.png',
    technologies: ['css', 'html', 'bootstrap'],
    seeLive: '#',
    seeSource: '#',
  },
  {
    titleTop: 'Professional art',
    titleBottom: 'printing data',
    description:
      'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry`s standard',
    image: './img/art1.png',
    technologies: ['css', 'html', 'bootstrap'],
    seeLive: '#',
    seeSource: '#',
  },
  {
    titleTop: 'Professional art',
    titleBottom: 'printing data',
    description:
      'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry`s standard',
    image: './img/art1.png',
    technologies: ['css', 'html', 'bootstrap'],
    seeLive: '#',
    seeSource: '#',
  },
  {
    titleTop: 'Professional art',
    titleBottom: 'printing data',
    description:
      'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry`s standard',
    image: './img/art1.png',
    technologies: ['css', 'html', 'bootstrap'],
    seeLive: '#',
    seeSource: '#',
  },
  {
    titleTop: 'Professional art',
    titleBottom: 'printing data',
    description:
      'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry`s standard',
    image: './img/art1.png',
    technologies: ['css', 'html', 'bootstrap'],
    seeLive: '#',
    seeSource: '#',
  },
  {
    titleTop: 'Professional art',
    titleBottom: 'printing data',
    description:
      'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry`s standard',
    image: './img/art1.png',
    technologies: ['css', 'html', 'bootstrap'],
    seeLive: '#',
    seeSource: '#',
  },
];

let selectedProject;

const menuIcon = document.querySelector('#menu-icon');
const menuToggle = document.querySelector('#menu-toggle');
const menuSection = document.querySelector('#menu-section');

const removePopup = () => {
  const popupContainer = document.getElementById('popup-container');
  document.querySelector('.about-overly').style.display = 'block';
  selectedProject = null;
  popupContainer.remove();
};

const addPopup = () => {
  if (selectedProject) {
    const popupContainer = document.createElement('div');
    popupContainer.setAttribute('id', 'popup-container');
    document.querySelector('.about-overly').style.display = 'none';
    document.body.appendChild(popupContainer);
    const popup = document.createElement('div');
    popup.setAttribute('class', 'popup');
    popupContainer.appendChild(popup);

    const popupHeading = document.createElement('div');
    popupHeading.setAttribute('class', 'popup-heading');
    popup.appendChild(popupHeading);

    const popupHeadingText = document.createElement('h2');
    popupHeadingText.setAttribute('class', 'popup-heading-text');

    if (selectedProject.id === 'showCase') {
      popupHeadingText.textContent = selectedProject.title;
    } else {
      popupHeadingText.textContent = selectedProject.titleTop + selectedProject.titleBottom;
    }
    popupHeading.appendChild(popupHeadingText);

    const popupHeadingBtn = document.createElement('button');
    popupHeadingBtn.setAttribute('class', 'popup-heading-btn');
    popupHeadingBtn.addEventListener('click', removePopup);
    popupHeading.appendChild(popupHeadingBtn);

    const popupClose = document.createElement('i');
    popupClose.setAttribute('class', 'fa-solid fa-xmark');
    popupHeadingBtn.appendChild(popupClose);

    const popupList = document.createElement('ul');
    popupList.setAttribute('class', 'popup-btn');
    popup.appendChild(popupList);

    selectedProject.technologies.forEach((tech) => {
      const popupBtnItem = document.createElement('li');
      popupList.appendChild(popupBtnItem);

      const popupBtn = document.createElement('button');
      popupBtn.setAttribute('class', 'popup-btn-item');
      popupBtn.textContent = tech;
      popupBtnItem.appendChild(popupBtn);
    });

    const popupBody = document.createElement('div');
    popupBody.setAttribute('class', 'popupBody');
    popup.appendChild(popupBody);

    const popupImgContainer = document.createElement('div');
    popupImgContainer.setAttribute('class', 'popup-img-container');
    popupBody.appendChild(popupImgContainer);

    const popupImg = document.createElement('img');
    popupImg.setAttribute('class', 'popup-img');
    popupImg.setAttribute('src', selectedProject.image);
    popupImgContainer.appendChild(popupImg);

    const popupDesc = document.createElement('div');
    popupDesc.setAttribute('class', 'popupDesci');
    popupBody.appendChild(popupDesc);
    const popupDescription = document.createElement('p');
    popupDescription.setAttribute('class', 'popup-disc');
    popupDescription.textContent = selectedProject.description;
    popupDesc.appendChild(popupDescription);
    const popupDescriptionBtn = document.createElement('ul');
    popupDescriptionBtn.setAttribute('class', 'popup-disc-btn');
    popupDesc.appendChild(popupDescriptionBtn);

    const popupBtnList1 = document.createElement('li');
    popupDescriptionBtn.appendChild(popupBtnList1);

    const popupDescriptionBtnItem1 = document.createElement('a');
    popupDescriptionBtnItem1.setAttribute('class', 'popup-disc-btn-item');
    popupDescriptionBtnItem1.setAttribute('href', selectedProject.seeSource);
    popupDescriptionBtnItem1.textContent = 'See Live';
    popupBtnList1.appendChild(popupDescriptionBtnItem1);

    const popupDescriptionIcon1 = document.createElement('i');
    popupDescriptionIcon1.setAttribute('class', 'fa-solid fa-arrow-up-right-from-square');
    popupDescriptionBtnItem1.appendChild(popupDescriptionIcon1);

    const popupBtnList2 = document.createElement('li');
    popupDescriptionBtn.appendChild(popupBtnList2);

    const popupDescriptionBtnItem2 = document.createElement('a');
    popupDescriptionBtnItem2.setAttribute('class', 'popup-disc-btn-item');
    popupDescriptionBtnItem2.setAttribute('href', selectedProject.seeSource);
    popupDescriptionBtnItem2.textContent = 'See Source';
    popupBtnList2.appendChild(popupDescriptionBtnItem2);

    const popupDescriptionIcon2 = document.createElement('i');
    popupDescriptionIcon2.setAttribute('class', 'fa-brands fa-github');
    popupDescriptionBtnItem2.appendChild(popupDescriptionIcon2);
  }
};

const showProject = (evt) => {
  const id = evt.target.getAttribute('data-id');
  if (id === 'showCase') {
    selectedProject = { ...showCaseProject, id };
  } else {
    selectedProject = { ...projectsData[id], id };
  }
  addPopup();
};

const generateShowCaseDom = () => {
  const showCaseElement = document.createElement('div');
  showCaseElement.setAttribute('class', 'project-list');

  const showCaseElementBrand = document.createElement('div');
  showCaseElementBrand.setAttribute('class', 'project-item');
  showCaseElement.appendChild(showCaseElementBrand);

  const showCaseElementImageContainer = document.createElement('div');
  showCaseElementImageContainer.setAttribute('class', 'project-item-img');

  const showCaseElementImage = document.createElement('img');
  showCaseElementImage.setAttribute('class', 'img');
  showCaseElementImage.setAttribute('src', showCaseProject.image);
  showCaseElementImage.setAttribute('alt', showCaseProject.title);
  showCaseElementImageContainer.appendChild(showCaseElementImage);
  showCaseElementBrand.appendChild(showCaseElementImageContainer);

  const showCaseDescription = document.createElement('div');
  showCaseDescription.setAttribute('class', 'project-disc');
  showCaseElement.appendChild(showCaseDescription);

  const showCaseElementHeading = document.createElement('h2');
  showCaseElementHeading.setAttribute('class', 'project-heading');
  showCaseElementHeading.textContent = showCaseProject.title;
  showCaseDescription.appendChild(showCaseElementHeading);

  const showCaseText = document.createElement('p');
  showCaseText.setAttribute('class', 'project-disc-main');
  showCaseText.textContent = showCaseProject.description;
  showCaseDescription.appendChild(showCaseText);

  const showCaseTechnology = document.createElement('ul');
  showCaseTechnology.setAttribute('class', 'project-btns');
  showCaseDescription.appendChild(showCaseTechnology);

  showCaseProject.technologies.forEach((tech) => {
    const showCaseTechnologyItem = document.createElement('li');
    showCaseTechnology.appendChild(showCaseTechnologyItem);
    const showCaseTechnologyItemList = document.createElement('button');
    showCaseTechnologyItemList.textContent = tech;
    showCaseTechnologyItemList.setAttribute('class', 'project-btns-list');
    showCaseTechnologyItem.appendChild(showCaseTechnologyItemList);
  });

  const showCaseBtnContainer = document.createElement('div');
  showCaseBtnContainer.setAttribute('class', 'project-bttn');
  showCaseDescription.appendChild(showCaseBtnContainer);

  const showCaseBtn = document.createElement('button');
  showCaseBtn.setAttribute('class', 'project-btn');
  showCaseBtn.setAttribute('data-id', 'showCase');
  showCaseBtn.textContent = 'See Project';
  showCaseBtn.addEventListener('click', showProject);
  showCaseBtnContainer.appendChild(showCaseBtn);

  return showCaseElement;
};

const generateProjectListsDom = () => {
  const projectsContainer = document.createElement('div');
  projectsContainer.setAttribute('class', 'all-project');

  projectsData.forEach((project, index) => {
    const projectContainer = document.createElement('div');
    projectContainer.setAttribute('class', 'projects-primary');
    projectContainer.style.backgroundImage = `url(${project.image})`;
    projectsContainer.appendChild(projectContainer);

    const projectHeading = document.createElement('div');
    projectHeading.setAttribute('class', 'projects-heading1');
    projectContainer.appendChild(projectHeading);

    const projectHeadingText1 = document.createElement('h3');
    projectHeadingText1.textContent = project.titleTop;
    projectHeading.appendChild(projectHeadingText1);

    const projectHeadingText2 = document.createElement('span');
    projectHeadingText2.textContent = project.titleBottom;
    projectHeadingText1.appendChild(projectHeadingText2);

    const projectDescription = document.createElement('div');
    projectDescription.setAttribute('class', 'projects-disc1');
    projectContainer.appendChild(projectDescription);

    const projectDescriptionText = document.createElement('p');
    projectDescriptionText.textContent = project.description;
    projectDescription.appendChild(projectDescriptionText);

    const technologyElement = document.createElement('ul');
    technologyElement.setAttribute('class', 'project1-bttns');
    projectContainer.appendChild(technologyElement);

    project.technologies.forEach((tech) => {
      const technologyList = document.createElement('li');
      technologyElement.appendChild(technologyList);

      const technologyItem = document.createElement('button');
      technologyItem.setAttribute('class', 'project1-btns');
      technologyItem.setAttribute('type', 'button');
      technologyItem.textContent = tech;
      technologyList.appendChild(technologyItem);
    });

    const projectBtn = document.createElement('button');
    projectBtn.setAttribute('class', 'project1-btn');
    projectBtn.setAttribute('type', 'button');
    projectBtn.textContent = 'See Project';
    projectBtn.addEventListener('click', showProject);
    projectBtn.setAttribute('data-id', index);
    projectContainer.appendChild(projectBtn);

    projectsContainer.appendChild(projectContainer);
  });

  return projectsContainer;
};

const populateProjects = () => {
  const projectsContainer = document.querySelector('#portfolio');
  const showCaseElement = generateShowCaseDom();
  projectsContainer.appendChild(showCaseElement);

  const projectList = generateProjectListsDom();
  projectsContainer.appendChild(projectList);
};

menuIcon.addEventListener('click', () => {
  menuSection.classList.add('menu-section-active');
  document.body.style.overflowY = 'hidden';
});

menuToggle.addEventListener('click', () => {
  menuSection.classList.remove('menu-section-active');
  document.body.style.overflowY = 'scroll';
});

document.querySelectorAll('.menu-item a').forEach((item) => {
  item.addEventListener('click', () => {
    menuSection.classList.remove('menu-section-active');
    document.body.style.overflowY = 'scroll';
  });
});

window.addEventListener('load', populateProjects);