// 点击卡片展示更多信息
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});

// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", function() {
    // 设置当前年份
    document.getElementById("year").textContent = new Date().getFullYear();
    // 初始化加载当前时间
    updateDateTime();
    // 每秒更新一次时间
    setInterval(updateDateTime, 1000);
    // 加载 Markdown 文件
    loadMarkdown();
    // 滚动时修改导航栏背景色
    window.addEventListener('scroll', handleScroll);
});

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
    document.getElementById("datetime").textContent = formattedDateTime;
}

// 加载 Markdown 文件并渲染到页面
async function loadMarkdown() {
    try {
        const response = await fetch('content/resume.md');
        const markdownText = await response.text();
        document.getElementById('content').innerHTML = marked.parse(markdownText);
    } catch (error) {
        console.error("Error loading Markdown file:", error);
    }
}

// 滚动时修改导航栏背景色
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
