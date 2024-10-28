// 点击卡片展示更多信息
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded'); // 切换卡片的展开状态
    });
});

// 页面加载完成后执行初始化操作
document.addEventListener("DOMContentLoaded", function() {
    // 设置当前年份
    setCurrentYear();

    // 初始化并每秒更新当前时间
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // 如果需要加载 Markdown 文件内容，确保 loadMarkdown 函数存在
    if (typeof loadMarkdown === 'function') {
        loadMarkdown();
    }

    // 滚动时修改导航栏和标题的样式
    window.addEventListener('scroll', () => {
        handleScroll();
        handleTitleZoom();
    });

    // 仅在首页执行打字效果
    if (document.querySelector('.hero-text')) {
        startTypewriterEffect();
    }
});

// 设置当前年份
function setCurrentYear() {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// 更新日期和时间显示
function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const dateTimeElement = document.getElementById("datetime");
    if (dateTimeElement) {
        dateTimeElement.textContent = formattedDateTime;
    }
}

// 滚动时修改导航栏背景色
function handleScroll() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // 增加滚动样式
        } else {
            header.classList.remove('scrolled'); // 移除滚动样式
        }
    }
}

// 滚动时放大标题
function handleTitleZoom() {
    const siteTitle = document.getElementById('site-title');
    if (siteTitle) {
        if (window.scrollY > 50) {
            siteTitle.style.transform = "scale(1.1)"; // 放大标题
        } else {
            siteTitle.style.transform = "scale(1)"; // 恢复标题大小
        }
    }
}

// 打字效果函数 - 支持两行文本
function startTypewriterEffect() {
    const primary = { elementId: "typewriter-primary", text: "ZPGuang" };
    const secondary = { elementId: "typewriter-secondary", text: "It is easy to say but hard to do" };
    
    // 启动主副标题的打字效果
    typeWriter(primary.elementId, primary.text, 0);
    typeWriter(secondary.elementId, secondary.text, 2000); // 延迟副标题的打字效果
}

// 通用的打字效果函数
function typeWriter(elementId, text, delay) {
    const typewriterElement = document.getElementById(elementId);
    let letterIndex = 0;
    let isDeleting = false;

    function type() {
        if (typewriterElement) {
            if (isDeleting) {
                typewriterElement.textContent = text.substring(0, letterIndex--);
            } else {
                typewriterElement.textContent = text.substring(0, letterIndex++);
            }

            const speed = isDeleting ? 100 : 150;

            if (!isDeleting && letterIndex === text.length) {
                setTimeout(() => isDeleting = true, 1000); // 暂停一秒后删除
            } else if (isDeleting && letterIndex === 0) {
                isDeleting = false;
                setTimeout(type, delay); // 重置打字效果，开始新循环
                return;
            }

            setTimeout(type, speed);
        }
    }

    setTimeout(type, delay);
}
