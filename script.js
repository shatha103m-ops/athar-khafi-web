
document.addEventListener("DOMContentLoaded", function () {
  // القائمة الرئيسية
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });

    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("open");
      }
    });
  }

  // الانتقال السلس للأقسام
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // إظهار حل اللغز
  const revealBtn = document.getElementById("reveal-answer-btn");
  const answerBox = document.getElementById("puzzle-answer");

  if (revealBtn && answerBox) {
    revealBtn.addEventListener("click", function () {
      answerBox.hidden = !answerBox.hidden;
      revealBtn.textContent = answerBox.hidden
        ? "كشف الحل"
        : "إخفاء الحل";
    });
  }

  // الهمسات
  const whispers = [
    "ليس كل ما يُقال يُسمع، وليس كل أثر يحتاج إلى ضجيج.",
    "الخطوات الهادئة الثابتة تبلغ ما تعجز عنه العجلة.",
    "في التفاصيل الصغيرة يختبئ المعنى الذي يبحث عنه القلب."
  ];

  let index = 0;
  const whisperText = document.getElementById("whisper-text");
  const nextBtn = document.getElementById("next-whisper-btn");
  const copyBtn = document.getElementById("copy-whisper-btn");
  const copyStatus = document.getElementById("copy-status");

  if (nextBtn && whisperText) {
    nextBtn.addEventListener("click", function () {
      index = (index + 1) % whispers.length;
      whisperText.textContent = whispers[index];
      if (copyStatus) copyStatus.textContent = "";
    });
  }

  if (copyBtn && whisperText) {
    copyBtn.addEventListener("click", async function () {
      try {
        await navigator.clipboard.writeText(whisperText.textContent);
        if (copyStatus) copyStatus.textContent = "تم نسخ الهمسة.";
      } catch (error) {
        if (copyStatus) copyStatus.textContent = "انسخي النص مباشرة من البطاقة.";
      }
    });
  }
});
