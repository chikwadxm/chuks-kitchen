
c
      
      const toggle = document.getElementById("menuToggle");
      const body = document.getElementById("menuBody");
      if (toggle && body) {
        toggle.addEventListener("click", () => {
          body.classList.toggle('collapsed');
          toggle.classList.toggle('collapsed');
        });
      }

      document.querySelectorAll(".sidebar a").forEach((link) => {
        link.addEventListener("click", (e) => {
          document
            .querySelectorAll(".sidebar a")
            .forEach((I) => I.classList.remove("active"));
          e.target.classList.add("active");
        });
      });
  