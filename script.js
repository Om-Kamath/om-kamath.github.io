// Resume data - Edit this JSON to update your resume
const resumeData = {
    personal: {
        name: "Om Kamath",
        subtitle: "AI Solutions Architect • Cornell Tech Graduate Student • Technical Writer",
        photo: "profile.jpg", 
        contact: [
            { text: "New York, NY", link: null },
            { text: "ok97@cornell.edu", link: "mailto:ok97@cornell.edu" },
            { text: "LinkedIn", link: "https://linkedin.com/in/omkamath" },
            { text: "GitHub", link: "https://github.com/Om-Kamath" }
        ]
    },
    education: [
        {
            title: "Cornell Tech (Cornell University)",
            link: "https://tech.cornell.edu/programs/masters-programs/jacobs-technion-cornell-dual-ms-connective-media/",
            degree: "Dual MS in Applied Information Science & Information Systems",
            dates: "Aug 2025 – May 2027",
            location: "New York, NY",
            gpa: "Yet to be determined",
            specialization: "Connective Media Specialization"
        },
        {
            title: "NMIMS University",
            link: "https://engineering.nmims.edu/",
            degree: "B.Tech, Computer Engineering",
            dates: "Jun 2019 – May 2023",
            location: "Mumbai, India",
            gpa: "3.84/4.0",
            specialization: "AI Specialization"
        }
    ],
    experience: [
        {
            title: "AI Solutions Architect & Support Engineer",
            company: "Cody AI",
            dates: "Aug 2023 – Present",
            location: "Remote, NYC",
            achievements: [
                "Architected 2+ production APIs reducing <span class='highlight'>development time by 50%</span>",
                "Resolved 4,000+ technical support tickets with <span class='highlight'>92% satisfaction rate</span>",
                "Pioneered prompt engineering strategies achieving <span class='highlight'>70% improvement</span> in AI model accuracy",
                "Streamlined C-suite communication by translating business requirements to technical specifications"
            ]
        },
        {
            title: "Data Engineering Intern",
            company: "VFS Global",
            dates: "Dec 2022 – Apr 2023",
            location: "Mumbai, India",
            achievements: [
                "Implemented NLP automation reducing <span class='highlight'>manual efforts by 30%</span>",
                "Prototyped AI digital transformation solutions for production databases",
                "Automated VAC address scraping using Selenium and Python"
            ]
        }
    ],
    writing: [
        {
            title: "Technical Writer & Content Creator",
            company: "Medium & Industry Publications",
            dates: "Jan 2021 – Present",
            achievements: [
                "<span class='highlight'>100,000+ views</span> across technical articles on RAG, LLMs, and AI frameworks",
                "Featured as 'Most Viewed' article in Google Cloud Medium Publication <span class='stats'>Aug 2024</span>",
                "Published in top publications: The Startup, Level Up Coding, Google Cloud, Geek Culture",
                "Achieved <span class='highlight'>15% organic traffic increase</span> through strategic SEO optimization"
            ]
        }
    ],
    projects: [
        {
            title: "AI Writing Wizard",
            company: "Cody AI Partnership",
            dates: "Production Deployment",
            description: "Built content generation pipeline using Streamlit and GPT-4, integrated Exa neural search for real-time web data, <span class='highlight'>automated 90% of existing pipeline</span>"
        },
        {
            title: "Hand Gesture Recognition System",
            company: "Arduino & Edge ML",
            dates: "Featured Project",
            description: "Arduino RP2040 with custom Edge Impulse ML model for real-time letter recognition. <span class='highlight'>Featured by Arduino official</span> with 4,000+ Medium views"
        }
    ],
    skills: [
        {
            category: "Languages & Frameworks",
            items: "Python, JavaScript, C++, Java<br>FastAPI, Streamlit, TensorFlow, Scikit-learn"
        },
        {
            category: "Data & Infrastructure",
            items: "SQL, MongoDB, Pandas, NumPy<br>Microcontrollers, Arduino, Micropython"
        },
        {
            category: "Specializations",
            items: "AI/ML Engineering, NLP, RAG<br>Technical Writing, Prompt Engineering"
        }
    ],
    recognition: [
        "Founder of Notes4Every1: Supporting 40+ students in academic achievement",
        "Certified Photographer: 2M+ views on Unsplash",
        "District-level competitive swimmer and passionate cyclist"
    ]
};

// Function to populate the page with data
function populateResume() {
    // Personal info
    document.getElementById('name').textContent = resumeData.personal.name;
    document.getElementById('profilePhoto').src = resumeData.personal.photo;
    document.getElementById('profilePhoto').alt = resumeData.personal.name;
    
    // Contact info
    const contactDiv = document.getElementById('contact');
    contactDiv.innerHTML = resumeData.personal.contact.map(contact => 
        contact.link ? 
        `<a href="${contact.link}" ${contact.link.startsWith('http') ? 'target="_blank"' : ''}>${contact.text}</a>` :
        `<span>${contact.text}</span>`
    ).join('');

    // Education
    const educationDiv = document.getElementById('education-content');
    educationDiv.innerHTML = resumeData.education.map(edu => `
        <div class="education-item">
            <div class="role-title"><a href=${edu.link} target="_blank">${edu.title}</a></div>
            <div class="company-date">
                <span>${edu.degree}</span>
                <span>${edu.dates}</span>
            </div>
            <div class="location">${edu.location} • <span class="gpa">GPA: ${edu.gpa}</span> • ${edu.specialization}</div>
        </div>
    `).join('');

    // Experience
    const experienceDiv = document.getElementById('experience-content');
    experienceDiv.innerHTML = resumeData.experience.map(exp => `
        <div class="experience-item">
            <div class="role-title">${exp.title}</div>
            <div class="company-date">
                <span>${exp.company}</span>
                <span>${exp.dates}</span>
            </div>
            <div class="location">${exp.location}</div>
            <ul class="description">
                ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    // Writing
    const writingDiv = document.getElementById('writing-content');
    writingDiv.innerHTML = resumeData.writing.map(writing => `
        <div class="experience-item">
            <div class="role-title">${writing.title}</div>
            <div class="company-date">
                <span>${writing.company}</span>
                <span>${writing.dates}</span>
            </div>
            <ul class="description">
                ${writing.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    // Projects
    const projectsDiv = document.getElementById('projects-content');
    projectsDiv.innerHTML = resumeData.projects.map(project => `
        <div class="project-item">
            <div class="role-title">${project.title}</div>
            <div class="company-date">
                <span>${project.company}</span>
                <span>${project.dates}</span>
            </div>
            <div class="description">${project.description}</div>
        </div>
    `).join('');

    // Skills
    const skillsDiv = document.getElementById('skills-content');
    skillsDiv.innerHTML = `
        <div class="skills-grid">
            ${resumeData.skills.map(skill => `
                <div class="skill-category">
                    <h3>${skill.category}</h3>
                    <div class="skill-list">${skill.items}</div>
                </div>
            `).join('')}
        </div>
    `;

    // Recognition
    const recognitionDiv = document.getElementById('recognition-content');
    recognitionDiv.innerHTML = `
        <div class="description">
            ${resumeData.recognition.map(item => `<li>${item}</li>`).join('')}
        </div>
    `;
}

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Populate resume with data
    populateResume();

    const sections = document.querySelectorAll('section');
    const backToTop = document.getElementById('backToTop');
    const profilePhoto = document.getElementById('profilePhoto');

    // Intersection Observer for section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Back to top button functionality
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Profile photo click interaction
    profilePhoto.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });

    // Add subtle parallax effect to highlights
    setTimeout(() => {
        const highlights = document.querySelectorAll('.highlight');
        highlights.forEach(highlight => {
            highlight.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 8px rgba(168, 230, 207, 0.3)';
            });
            
            highlight.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
    }, 100);

    // Add typing effect to subtitle (subtle)
    const subtitle = document.querySelector('.subtitle');
    const originalText = resumeData.personal.subtitle;
    subtitle.textContent = '';
    
    setTimeout(() => {
        let i = 0;
        const typeInterval = setInterval(() => {
            subtitle.textContent += originalText.charAt(i);
            i++;
            if (i >= originalText.length) {
                clearInterval(typeInterval);
            }
        }, 50);
    }, 1000);
});
