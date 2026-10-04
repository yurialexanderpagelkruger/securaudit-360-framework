document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const open = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const tbody = document.getElementById('findings-body');
  const filterBtns = document.querySelectorAll('.filter-btn');
  let findings = [];

  const badgeClass = (risk) => {
    const r = risk.toLowerCase();
    if (r === 'alto') return 'alto';
    if (r === 'medio') return 'medio';
    return 'bajo';
  };

  const renderFindings = (filter) => {
    if (!tbody) return;
    tbody.innerHTML = '';
    findings
      .filter(f => filter === 'all' || f.riesgo.toLowerCase() === filter)
      .forEach(f => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${f.id}</td>
          <td>${f.hallazgo}</td>
          <td>${f.categoria}</td>
          <td><span class="badge ${badgeClass(f.riesgo)}">${f.riesgo}</span></td>
          <td>${f.impacto}</td>
          <td>${f.remediacion}</td>
          <td>${f.plazo}</td>
        `;
        tbody.appendChild(tr);
      });
  };

  if (tbody) {
    fetch('data/hallazgos.json')
      .then(res => res.json())
      .then(data => {
        findings = data;
        renderFindings('all');
      })
      .catch(() => {
        findings = [
          { id: 'H-01', hallazgo: 'Sin autenticación multifactor en accesos remotos', categoria: 'Control de accesos', riesgo: 'Alto', impacto: 'Compromiso total de cuentas', remediacion: 'Implementar MFA y VPN con RBAC', plazo: '7 días' },
          { id: 'H-02', hallazgo: 'Backups sin verificación de integridad', categoria: 'Continuidad', riesgo: 'Alto', impacto: 'Pérdida de datos irrecuperable', remediacion: 'Política 3-2-1 + pruebas de restauración', plazo: '14 días' },
          { id: 'H-03', hallazgo: 'Puertos y servicios innecesarios expuestos', categoria: 'Hardening', riesgo: 'Medio', impacto: 'Superficie de ataque ampliada', remediacion: 'Cierre de puertos y hardening de servicios', plazo: '21 días' },
          { id: 'H-04', hallazgo: 'Falta de monitoreo de red', categoria: 'Monitoreo', riesgo: 'Medio', impacto: 'Detección tardía de intrusiones', remediacion: 'Implementar IDS/IPS y alertas', plazo: '30 días' },
          { id: 'H-05', hallazgo: 'Políticas de acceso no documentadas', categoria: 'Gobierno', riesgo: 'Bajo', impacto: 'Inconsistencia operativa', remediacion: 'Documentar RBAC y revisar permisos', plazo: '45 días' }
        ];
        renderFindings('all');
      });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFindings(btn.dataset.filter);
    });
  });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const mensaje = form.mensaje.value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      status.classList.remove('error');
      if (!nombre || !emailOk || !mensaje) {
        status.classList.add('error');
        status.textContent = 'Completá todos los campos con un correo válido.';
        return;
      }
      status.textContent = 'Consulta enviada. Nos pondremos en contacto a la brevedad.';
      form.reset();
    });
  }
});
