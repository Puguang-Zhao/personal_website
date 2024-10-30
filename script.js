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

// 动态加载指定的文件内容，并解析文件类型（Markdown, PDF）
function loadContent(fileName) {
    const fileContentSection = document.getElementById("file-content");
    fileContentSection.innerHTML = ""; // 清空当前内容

    // 检查文件扩展名以确定文件类型
    const fileExtension = fileName.split('.').pop().toLowerCase();

    if (fileExtension === "md") {
        // 加载并解析 Markdown 文件
        fetch(fileName)
            .then(response => {
                if (!response.ok) throw new Error("文件加载失败");
                return response.text();
            })
            .then(markdown => {
                // 使用 marked.js 库将 Markdown 转换为 HTML
                const htmlContent = marked.parse(markdown);
                fileContentSection.innerHTML = htmlContent;
                generateTOC(htmlContent); // 自动生成目录
            })
            .catch(error => alert("Markdown 文件加载失败: " + error));
    } else if (fileExtension === "pdf") {
        // 加载并渲染 PDF 文件
        const loadingTask = pdfjsLib.getDocument(fileName);
        loadingTask.promise
            .then(pdf => {
                let pdfText = "";
                const totalPages = pdf.numPages;

                // 遍历每一页并提取文本
                for (let i = 1; i <= totalPages; i++) {
                    pdf.getPage(i).then(page => {
                        page.getTextContent().then(textContent => {
                            pdfText += textContent.items.map(item => item.str).join(" ") + "\n";
                            fileContentSection.innerText = pdfText; // 显示解析的 PDF 内容

                            if (i === totalPages) {
                                generateTOC(pdfText); // PDF 内容提取完成后生成目录
                            }
                        });
                    });
                }
            })
            .catch(error => alert("PDF 文件加载失败: " + error));
    } else {
        // 加载并直接显示 HTML 文件
        fetch(fileName)
            .then(response => {
                if (!response.ok) throw new Error("文件加载失败");
                return response.text();
            })
            .then(content => {
                fileContentSection.innerHTML = content;
                generateTOC(content); // 自动生成目录
            })
            .catch(error => alert("HTML 文件加载失败: " + error));
    }
}
