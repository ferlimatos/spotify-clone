document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout");
  
    logoutBtn.addEventListener("click", () => {
      // Limpar localStorage
      localStorage.clear();
  
      // Redirecionar para a página de login
      window.location.href = "index.html";
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.getElementById("avatar");
    const dropdown = document.getElementById("profileDropdown");
    const logoutBtn = document.getElementById("logout");
  
    // Alternar visibilidade do menu
    avatar.addEventListener("click", (e) => {
      e.stopPropagation(); // evita fechar ao clicar no próprio avatar
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
  
    // Fechar ao clicar fora
    document.addEventListener("click", () => {
      dropdown.style.display = "none";
    });
  
    // Impedir que clique dentro do menu feche ele
    dropdown.addEventListener("click", (e) => e.stopPropagation());
  
    // Logout: limpar e redirecionar
    logoutBtn.addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "index.html";
    });
  });
  
  