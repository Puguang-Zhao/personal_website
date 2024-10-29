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

    // 滚动时修改导航栏和标题的样式
    window.addEventListener('scroll', () => {
        handleScroll();
        handleTitleZoom();
        handleNavbarVisibility();
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

// 导航栏滚动隐藏/显示功能
let lastScrollPosition = 0;

function handleNavbarVisibility() {
    const navbar = document.querySelector('header');
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        // 向下滚动并超过一定距离，隐藏导航栏
        navbar.style.transform = "translateY(-100%)";
    } else if (currentScrollPosition < lastScrollPosition) {
        // 向上滚动，显示导航栏
        navbar.style.transform = "translateY(0)";
    }

    lastScrollPosition = currentScrollPosition;
}

// 单行打字效果函数
function startTypewriterEffect() {
    const text = "It is easy to say but hard to do"; // 需要展示的文本
    const elementId = "typewriter-text"; // 打字效果目标元素的ID
    typeWriter(elementId, text);
}

// 通用的打字效果函数
function typeWriter(elementId, text) {
    const typewriterElement = document.getElementById(elementId);
    let letterIndex = 0;
    let isDeleting = false;

    function type() {
        if (typewriterElement) {
            if (!isDeleting) {
                typewriterElement.textContent = text.substring(0, letterIndex++);
                if (letterIndex === text.length) {
                    setTimeout(() => isDeleting = true, 1500);
                }
            } else {
                typewriterElement.textContent = text.substring(0, letterIndex--);
                if (letterIndex < 0) {
                    isDeleting = false;
                    letterIndex = 0;
                    setTimeout(type, 1000);
                    return;
                }
            }
            const speed = isDeleting ? 100 : 150;
            setTimeout(type, speed);
        }
    }

    type(); // 开始打字效果
}

// 文件上传并生成目录
function uploadFile() {
    const fileInput = document.getElementById("file-input");
    const fileContentSection = document.getElementById("file-content");
    const tocList = document.getElementById("toc-list");

    if (fileInput.files.length === 0) {
        alert("请选择一个文件！");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const content = event.target.result;
        fileContentSection.innerHTML = ""; // 清空内容
        tocList.innerHTML = ""; // 清空目录

        const lines = content.split("\n");
        lines.forEach((line, index) => {
            // 解析 Markdown 标题
            const match = line.match(/^(#+)\s*(.+)/);
            if (match) {
                const headingLevel = match[1].length; // 标题级别
                const headingText = match[2];
                const headingId = `heading-${index}`;

                // 创建标题并插入到内容区域
                const headingElement = document.createElement(`h${Math.min(headingLevel + 1, 6)}`);
                headingElement.textContent = headingText;
                headingElement.id = headingId;
                fileContentSection.appendChild(headingElement);

                // 生成目录项链接
                const tocItem = document.createElement("li");
                tocItem.innerHTML = `<a href="#${headingId}">${headingText}</a>`;
                tocItem.style.paddingLeft = `${(headingLevel - 1) * 15}px`;
                tocList.appendChild(tocItem);
            } else {
                // 普通段落文本
                const paragraph = document.createElement("p");
                paragraph.textContent = line;
                fileContentSection.appendChild(paragraph);
            }
        });
    };

    reader.onerror = function() {
        alert("文件读取失败！");
    };

    reader.readAsText(file); // 读取文件内容
}
