// Project Modal Logic
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.querySelector('.project-modal-close');
  const btns = document.querySelectorAll('.btn-project-open');
  const modalBody = document.getElementById('project-modal-body');

  // 각 프로젝트별 상세 내용
  const projectContents = {
    1: `
      <h2>FREESIA - AI 감정 코칭 서비스</h2>
      <div style="width:600px;max-width:100%;margin:1.5rem auto;">
        <iframe width="600" height="338"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="FREESIA 소개 영상"
          frameborder="0"
          allowfullscreen
          style="display:block;margin:0 auto;border-radius:16px;">
        </iframe>
      </div>
      <div style="display:flex;justify-content:center;gap:1rem;margin-top:1.5rem;">
        <a href="https://freesia-psi.vercel.app" target="_blank" class="btn btn-primary">앱 사용하기</a>
        <a href="https://github.com/nicky202505/freesia" target="_blank" class="btn btn-secondary">GitHub</a>
        <a href="#" target="_blank" class="btn btn-project">기획서</a> 
      </div>
    `,
    2: `
      <h2>신세계 백화점 클론 코딩</h2>
      <div style="width:600px;max-width:100%;margin:1.5rem auto;">
        <iframe width="600" height="338"
          src="img/depart.mp4" 
          title="신세계 백화점 클론 영상"
          frameborder="0"
          allowfullscreen
          style="display:block;margin:0 auto;border-radius:16px;">
        </iframe>
      </div>
      <div style="display:flex;justify-content:center;gap:1rem;margin-top:1.5rem;">
        <a href="https://nicky202505.github.io/project03/" target="_blank" class="btn btn-primary">바로보기</a>
        <a href="https://github.com/nicky202505/project03" target="_blank" class="btn btn-secondary">GitHub</a>    
      </div>
      <p style="margin-top:1.5rem;">
        최고급 백화점 웹사이트의 화려한 무드와 스킬을 그대로 구현.<br>
        다양한 UI/UX와 반응형 웹 기술 적용.
      </p>
    `,
    3: `
      <h2>UggBooks UX/UI 개발</h2>
      <div style="width:600px;max-width:100%;margin:1.5rem auto;">
        <iframe width="600" height="338"
          src="img/ugg_final.mp4"
          title="UggBooks UX/UI 영상"
          frameborder="0"
          allowfullscreen
          style="display:block;margin:0 auto;border-radius:16px;">
        </iframe>
      </div>
      <div style="display:flex;justify-content:center;gap:1rem;margin-top:1.5rem;">
        <a href="#" target="_blank" class="btn btn-primary">프로토타입</a>
        <a href="#" target="_blank" class="btn btn-secondary">기획서</a>
        <a href="#" target="_blank" class="btn btn-project">디자인</a>
      </div>
      <p style="margin-top:1.5rem;">
        독서 관리 솔루션 UggBooks의 UX/UI를 개발하여 Figma 프로토타입으로 구현.<br>
        사용자 중심의 인터페이스 설계.
      </p>
    `
  };

    // 모달 오픈/클로즈 로직
    btns.forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            const projectNum = idx + 1;
            modalBody.innerHTML = projectContents[projectNum] || '<p>프로젝트 정보를 찾을 수 없습니다.</p>';
            modal.classList.add('open');
            modal.style.display = 'flex'; // display를 flex로 변경
            document.body.style.overflow = 'hidden';
        });
    });

    // 닫기 버튼
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('open');
        modal.style.display = 'none'; // display를 none으로 변경
        document.body.style.overflow = '';
        modalBody.innerHTML = '';
    });

    // 모달 바깥 클릭 시 닫기
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('open');
            modal.style.display = 'none'; // display를 none으로 변경
            document.body.style.overflow = '';
            modalBody.innerHTML = '';
        }
    });
});



// Resume tab interaction
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.resume-tab');
    const contentBoxes = document.querySelectorAll('.resume-content-box');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            tabButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const tab = this.getAttribute('data-tab');
            contentBoxes.forEach(box => {
                if (box.getAttribute('data-content') === tab) {
                    box.classList.add('active');
                } else {
                    box.classList.remove('active');
                }
            });
        });
    });
});
// Smooth scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = `${1 - scrolled / 500}`;
        }
    }
});

// Add hover effect to strength tags
const strengthTags = document.querySelectorAll('.strength-tag');
strengthTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click ripple effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Timeline animation on scroll
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5
});

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Project cards 3D tilt effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Cursor trail effect
const cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// Custom cursor (optional - can be commented out)
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add custom cursor style dynamically
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid var(--color-primary);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        mix-blend-mode: difference;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .timeline-item.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll to top button (optional)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

const scrollTopStyle = document.createElement('style');
scrollTopStyle.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0, 212, 255, 0.4);
    }
    
    .scroll-top-btn.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top-btn:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 30px rgba(0, 212, 255, 0.6);
    }
`;
document.head.appendChild(scrollTopStyle);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form validation (if form is added later)
console.log('Portfolio website loaded successfully! 🚀');
