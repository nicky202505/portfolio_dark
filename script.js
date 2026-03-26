// Project Modal Logic
document.addEventListener('DOMContentLoaded', function () {
    // Skill Progress Animation
    function animateSkillCircles() {
        const skillCircles = document.querySelectorAll('.skill-circle');
        skillCircles.forEach(circle => {
            const percent = parseInt(circle.getAttribute('data-percent'), 10) || 0;
            const progressBar = circle.querySelector('.progress-ring-bar');
            const radius = progressBar.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            progressBar.style.strokeDasharray = `${circumference}`;
            progressBar.style.strokeDashoffset = `${circumference}`;
            // Animate
            setTimeout(() => {
                progressBar.style.transition = 'stroke-dashoffset 1.2s ease';
                progressBar.style.strokeDashoffset = `${circumference * (1 - percent / 100)}`;
            }, 300);
        });
    }
    animateSkillCircles();
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.project-modal-close');
    const btns = document.querySelectorAll('.btn-project-open');
    const modalBody = document.getElementById('project-modal-body');

    // 각 프로젝트별 상세 내용(개별 변수로 분리)
    const projectContent1 = `
        <h2>FREESIA - AI 감정 코칭 서비스</h2>
        <div style="width:600px;max-width:100%;margin:1.5rem auto;">
            <iframe width="600" height="338"
                src="img/freesia.mp4"
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
        <div style="width:600px; padding-top:40px; margin:auto; font-size:1.2rem; line-height:3.6rem; color:#b8b8d1;">
            <h4 style="background-color:#f2f2f2; color:#333; border-radius: 4px; ">
            프로젝트 명칭 및 개요 : AI를 통해 감정 코칭을 제공하는 모바일 앱 FREESIA 1.0.1<br>
            기술 스택 : React, Javascript, Typescript, HTML/CSS, FIGMA</h4>
            <h4>FREESIA 1.0.1 업데이트 내용 : 비회원 로그인 기능 추가 / AI 프롬프트 개선   : </h4>
            <h4> 주요 성능 : 사용자가 감정 상태를 간단한 단어로 입력하면 AI가 그에 맞는 객관화 분석과 솔루션을 제공하며, 대화 히스토리 자동 저장 및 통계 서비스를 통해 개인 감정관리가 가능하도록 함</h4>
            <h4>타겟 사용자 : 사무직 노동자, 감정 노동자, 서비스 종사자</h4> 
        </div> 
    `;
    const projectContent2 = `
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
        <div style="width:600px; padding-top:40px; margin:auto; font-size:1.2rem; line-height:3.6rem; color:#b8b8d1;">
            <h4 style="background-color:#f2f2f2; color:#333; border-radius: 4px; ">프로젝트 명칭 및 개요 : 신세계 백화점 웹사이트를 클론 코딩 <br>
            기술 스택 : JavaScript / GSAP / Swiper / Responsive Design </h4>  
            <h4>프로젝트 목표: 고급 백화점의 화려한 이미지를 구현하고 있는 사이트의 구조와 디자인을 분석하면서 실제 상용 사이트 수준의 구조 설계와 인터랙션 로직을 익혔습니다. 특히 GSAP 애니메이션 타이밍 조절과 반응형 대응을 통해 디자인 완성도를 높이는 경험을 했습니다. </h4>     
            <h4>주요 성능 : 비디오 배너와 동적 텍스트 전환 효과 / 헤더 고정 및 스크롤 시 인터랙션 / GSAP 타임라인을 통한 자연스러운 섹션 트랜지션  </h4>
        </div> 
    `;
    const projectContent3 = `
        <h2>독서 관리 솔루션 UGGBOOKS </h2> 
        <div style="width:600px;max-width:100%;margin:1.5rem auto;">
            <iframe width="600" height="338"
                src="img/ugg_final.mp4"
                title="UGGBOOKS UX/UI 영상"
                frameborder="0"
                allowfullscreen
                style="display:block;margin:0 auto;border-radius:16px;">
            </iframe>
        </div>
        <div style="display:flex;justify-content:center;gap:1rem;margin-top:1.5rem;">
            <a href="#" class="btn btn-primary">앱 사용해보기</a>
            <a href="#" class="btn btn-primary">디자인</a>
            <a href="#" class="btn btn-secondary">기획서</a>
        </div>
        <div style="width:600px; padding-top:40px; margin:auto; font-size:1.2rem; line-height:3.6rem; color:#b8b8d1;">
            <h4 style="background-color:#f2f2f2; color:#333;">프로젝트 명칭 및 개요 : 독서 관리 솔루션 UGGBOOKS <br> 
            기술 스택 : FIGMA / Adobe Tools   </h4>
            <h4> 프로젝트 목표: 모바일 앱 개발을 전제로 독서 완독을 지원하는 모바일 UX를 개발하였으며, 아이디어 구상 및 기획부터 피그마 디자인 및 프로토타입까지 완성! </h4>     
            <h4>주요 성능 : 사용자가 원하는 도서의 등록, 독서 타이머, 완독률 관리, 통계까지 독서 애호가의 모든 니즈를 포함할 수 있는 UX 개발 <br> 
            향후 API 연동을 포함한 추가 개발을 통해 실제 Application 개발이 가능하도록 준비 완료 </h4>   
        </div> 
    `;
    // 4, 5, 6번 프로젝트 내용(비어있게 시작)
    const projectContent4 = `
        <h2>상세페이지 - 베지앤너츠(가상)</h2>
        <div style="width:600px;max-width:100%;margin:1.5rem auto;text-align:center;">
            <iframe width="600" height="338" src="img/yaya.mp4" title="베지앤너츠 영상" frameborder="0" allowfullscreen style="display:block;margin:0 auto;border-radius:16px;"></iframe>
        </div>
        <div style="display:flex;justify-content:center;gap:1rem;margin-top:1.5rem;">
            <a href="https://nicky202505.github.io/project05/" target="_blank" class="btn btn-primary">상세페이지 보기</a>
            <a href="https://github.com/nicky202505/project05" target="_blank" class="btn btn-secondary">GitHub</a>
        </div>
        <div style="width:100%; padding-top:40px; margin:auto; font-size:1.1rem; line-height:2rem; color:#b8b8d1;">
            <h4>프로젝트 개요: 가상의 식품회사 베지앤너츠의 상세페이지입니다. 
            애니메이션과 gif 영상을 통해 동적이고 에너지 넘치는 제품 이미지를 구현하였습니다. 
             헤더 부분의 애니메이션은 Premire Pro와 After Effect로 제작하였습니다. 결과물을 웹퍼플리싱으로 구현하였습니다.   </h4>
             <h4> 기술 스택 : Photoshop, Illustration, After Effect, Premire Pro, HTML/CSS </h4>    
        </div>
    `;
   const projectContent5 = `
        <h2>세럼(화장품)</h2> 
        <div style="width:600px;max-width:100%;margin:1.5rem auto;text-align:center;">
            <iframe width="100%" height="auto" loading="lazy" src="img/serum_07.mp4" title="세럼 영상" frameborder="0" 
            allowfullscreen style="display:block; width:80%; height:auto; aspect-ratio:16/9; max-width:80%; margin:0 auto; border-radius:16px;"></iframe>
        </div>
        <div style="display:flex;justify-content:center;gap:1rem;margin-top:1.5rem;">
            <a href="https://nicky202505.github.io/project07/" target="_blank" class="btn btn-primary">상세페이지 보기</a>
            <a href="https://github.com/nicky202505/project07" target="_blank" class="btn btn-secondary">GitHub</a>
        </div>
        <div style="width:100%; padding-top:40px; margin:auto; font-size:1.1rem; line-height:2rem; color:#b8b8d1;">
            <h4>프로젝트 개요: 화장품 스타트업 벨루시아의 세럼 브랜드 SIALAB의 상세페이지입니다.   </h4>
             <h4> 기술 스택 : Photoshop,FIGMA, AI Tools, HTML/CSS </h4>     
        </div>
    `;
    const projectContent6 = ` 
        <h2>미니 양배추 상세페이지 </h2>
        <div style="width:600px;max-width:100%;margin:1.5rem auto;text-align:center;">  
        <img src="img/bechu2.png" alt="미니 양배추 상세페이지" style="width:80%; height:auto; border-radius:16px;">
        
        </div>
        <div style="display:flex;justify-content:center;gap:1rem;margin-top:1.5rem;"> 
            <a href="https://nicky202505.github.io/project08/" target="_blank" class="btn btn-primary">상세페이지 보기</a>
            <a href="https://github.com/nicky202505/project08" target="_blank" class="btn btn-secondary">GitHub</a>
        </div>
        <div style="width:100%; padding-top:40px; margin:auto; font-size:1.1rem; line-height:2rem; color:#b8b8d1;">
            <h4>프로젝트 개요:  농업회사 다음백년의 미니 양배추 상세페이지 
            </h4>
            <h4>기술 스택 : Photoshop, FIGMA</h4>  
        </div>  
    `;
    // 객체로 묶어서 기존 로직 호환
    const projectContents = {
        1: projectContent1,
        2: projectContent2,
        3: projectContent3,
        4: projectContent4,
        5: projectContent5,
        6: projectContent6
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

    // 동적으로 생성된 .btn-project 클릭 시 Figma 임베드 모달 오픈 (이벤트 위임)
    modalBody.addEventListener('click', function (e) {
        // '기획서' 버튼 (프로젝트 1)
        if (e.target && e.target.classList.contains('btn-project')) {
            e.preventDefault();
            showFigmaEmbedModal('https://embed.figma.com/slides/bquYeDgDzDgJVoBVNSUhRK/freesia-%EC%95%B1-%EA%B0%9C%EB%B0%9C-%EA%B8%B0%ED%9A%8D%EC%84%9C?node-id=1-26&embed-host=share');
        }
        // '앱 사용해보기' 버튼 (프로젝트 3) 임베드  

        if (
            e.target &&
            e.target.classList.contains('btn-primary') &&
            e.target.textContent.trim().replace(/\s/g, '') === '앱사용해보기'
        ) {
            e.preventDefault();
            showFigmaEmbedModal('https://embed.figma.com/proto/SHBc2P07i1OSeKhpi6G8PS/UGGBOOKS_FInal?page-id=1%3A5908&node-id=1-10501&viewport=80%2C103%2C0.2&scaling=scale-down&content-scaling=fixed&embed-host=share', true);
        }
        // '디자인' 버튼 (프로젝트 3)
        if (e.target && e.target.classList.contains('btn-primary') && e.target.textContent.trim() === '디자인') {
            e.preventDefault();
            showFigmaEmbedModal('https://embed.figma.com/design/SHBc2P07i1OSeKhpi6G8PS/UGGBOOKS_FInal?node-id=1-5908&embed-host=share');
        }
        // '기획서' 버튼 (프로젝트 3)
        if (e.target && e.target.classList.contains('btn-secondary') && e.target.textContent.trim() === '기획서') {
            e.preventDefault();
            showFigmaEmbedModal('https://embed.figma.com/slides/qu1GvYwwqrc5RZ4Ijfgmk5/%EA%B8%B0%ED%9A%8D%EC%84%9C-PPT?node-id=1-198&embed-host=share');
        }
    });

    // Figma 임베드 모달 생성 및 표시 함수   
    function showFigmaEmbedModal(figmaEmbedUrl, showGuide) {
        let figmaModal = document.getElementById('figma-embed-modal');
        const guideHtml = showGuide ? `<div style="position:absolute;top:18px;right:60px;font-size:1rem;color:#222;background:rgba(255,255,255,0.95);padding:0.5rem 1.2rem;border-radius:18px;z-index:10;box-shadow:0 2px 8px rgba(0,0,0,0.08);font-weight:600;">확대 버튼을 눌러 앱을 사용해보세요</div>` : '';
        if (!figmaModal) {
            figmaModal = document.createElement('div');
            figmaModal.id = 'figma-embed-modal';
            figmaModal.style.cssText = 'display:flex;position:fixed;z-index:10001;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.7);align-items:center;justify-content:center;';
            figmaModal.innerHTML = `
                        <div style="background:#fff;padding:2rem;border-radius:16px;max-width:90vw;max-height:90vh;position:relative;">
                            <button id="figma-modal-close" style="position:absolute;top:10px;right:10px;font-size:1.5rem;background:none;border:none;cursor:pointer;">&times;</button>
                            ${guideHtml}
                            <iframe id="figma-iframe" width="800" height="450" style="max-width:80vw;max-height:70vh;border-radius:12px;border:none;border: 1px solid rgba(0, 0, 0, 0.1);" allowfullscreen></iframe>
                        </div>
                    `;
            document.body.appendChild(figmaModal);
        } else {
            // 가이드 텍스트 동적 업데이트
            const modalContent = figmaModal.querySelector('div');
            if (modalContent) {
                let guideDiv = modalContent.querySelector('.figma-guide-text');
                if (showGuide) {
                    if (!guideDiv) {
                        guideDiv = document.createElement('div');
                        guideDiv.className = 'figma-guide-text';
                        guideDiv.style.cssText = 'position:absolute;top:18px;right:60px;font-size:1rem;color:#222;background:rgba(255,255,255,0.95);padding:0.5rem 1.2rem;border-radius:18px;z-index:10;box-shadow:0 2px 8px rgba(0,0,0,0.08);font-weight:600;';
                        guideDiv.textContent = '확대 버튼을 눌러 앱을 직접 사용해보세요';
                        modalContent.appendChild(guideDiv);
                    }
                } else if (guideDiv) {
                    guideDiv.remove();
                }
            }
        }
        document.getElementById('figma-iframe').src = figmaEmbedUrl;
        figmaModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Figma 모달 닫기 이벤트
    document.addEventListener('click', function (e) {
        const figmaModal = document.getElementById('figma-embed-modal');
        if (!figmaModal) return;
        if (e.target && (e.target.id === 'figma-modal-close' || e.target === figmaModal)) {
            figmaModal.style.display = 'none';
            document.body.style.overflow = '';
            document.getElementById('figma-iframe').src = '';
        }
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
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.resume-tab');
    const contentBoxes = document.querySelectorAll('.resume-content-box');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function () {
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
    tag.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });

    tag.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click ripple effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
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
