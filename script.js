// 添加简单的交互效果 - 点击卡片展示更多信息（示例）
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // 设置当前年份
    document.getElementById("year").textContent = new Date().getFullYear();
    // 初始化加载当前时间
    updateDateTime();
    // 每秒更新一次时间
    setInterval(updateDateTime, 1000);
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

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
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

// 初始化
loadMarkdown();