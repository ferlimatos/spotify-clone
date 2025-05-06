// ==============================
// 🔐 Logout do usuário
// ==============================
function setupLogout() {
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "index.html";
      });
    }
  }
  
  // ==============================
  // 👤 Menu suspenso do perfil
  // ==============================
  function setupProfileMenu() {
    const avatar = document.getElementById("avatar");
    const dropdown = document.getElementById("profileDropdown");
  
    if (!avatar || !dropdown) return;
  
    avatar.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
  
    document.addEventListener("click", () => {
      dropdown.style.display = "none";
    });
  
    dropdown.addEventListener("click", (e) => e.stopPropagation());
  }
  
  // ==============================
  // 🚀 Inicialização
  // ==============================
  document.addEventListener("DOMContentLoaded", () => {
    setupLogout();
    setupProfileMenu();
  });
  