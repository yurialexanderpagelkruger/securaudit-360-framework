(function () {
  const STORAGE_KEY = 'sa360-lang';

  const translations = {
    en: {
      nav_services: 'Services',
      nav_methodology: 'Methodology',
      nav_report: 'Report',
      nav_contact: 'Contact',
      eyebrow: 'Audit · Hardening · Continuity',
      hero_title: 'Do you know how exposed your company is to an incident?',
      hero_sub: 'SecurAudit 360 audits your infrastructure, hardens your systems and designs a Business Continuity Plan (BCP) so that file encryption or a data breach never stops your business.',
      btn_request: 'Request audit',
      btn_view_report: 'View sample report',
      tag_1: 'Accounting firms',
      tag_2: 'Law firms',
      tag_3: 'Clinics',
      tag_4: 'Sensitive data',
      risk_title: 'Risk without management',
      risk_1: 'Encrypted data with no usable backup',
      risk_2: 'Access without control (no RBAC)',
      risk_3: 'Backups without verification',
      risk_4: 'No network monitoring',
      risk_5: 'Missing formal policies',
      risk_foot: 'Fines, operational loss and reputational damage.',
      services_title: 'What SecurAudit 360 includes',
      s1_t: 'System hardening',
      s1_d: 'Hardening checklist for Linux and Windows Server: services, accounts, policies, ports and updates.',
      s2_t: '3-2-1 Backups',
      s2_d: 'Backup policy with automated backup and integrity verification to ensure recovery.',
      s3_t: 'Access control (RBAC)',
      s3_d: 'User, role and permission management under the principle of least privilege.',
      s4_t: 'Network monitoring',
      s4_d: 'Traffic surveillance and detection of anomalous access with early alerts.',
      s5_t: 'Continuity plan (BCP)',
      s5_d: 'Design of the Business Continuity Plan and Disaster Recovery Plan (DRP).',
      s6_t: 'Prioritized report',
      s6_d: 'Findings with High/Medium/Low risk level and a remediation plan ordered by priority.',
      methodology_title: 'Methodology',
      m1_t: 'Reconnaissance',
      m1_d: 'Inventory of assets, access and critical processes.',
      m2_t: 'Audit',
      m2_d: 'Assessment of hardening, access, backups and network.',
      m3_t: 'Findings',
      m3_d: 'Classification by risk and business exposure.',
      m4_t: 'Remediation',
      m4_d: 'Prioritized action plan with owners and deadlines.',
      m5_t: 'Continuity',
      m5_d: 'Documented and tested BCP and DRP.',
      report_title: 'Sample audit report',
      report_intro: 'Anonymized document with findings classified by risk and their action plan.',
      filter_all: 'All',
      filter_high: 'High',
      filter_med: 'Medium',
      filter_low: 'Low',
      th_id: 'ID',
      th_finding: 'Finding',
      th_category: 'Category',
      th_risk: 'Risk',
      th_impact: 'Impact',
      th_remediation: 'Remediation',
      th_deadline: 'Deadline',
      btn_open_report: 'Open full report',
      contact_title: 'Contact',
      contact_sub: 'Audit, harden and secure your business continuity.',
      label_name: 'Name',
      label_email: 'Email',
      label_message: 'Message',
      btn_send: 'Send inquiry',
      form_ok: 'Inquiry sent. We will contact you shortly.',
      form_err: 'Please complete all fields with a valid email.',
      footer_rights: 'All rights reserved.'
    },
    es: {
      nav_services: 'Servicios',
      nav_methodology: 'Metodología',
      nav_report: 'Informe',
      nav_contact: 'Contacto',
      eyebrow: 'Auditoría · Hardening · Continuidad',
      hero_title: '¿Sabés qué tan expuesta está tu empresa ante un incidente?',
      hero_sub: 'SecurAudit 360 audita tu infraestructura, endurece tus sistemas y diseña un plan de continuidad operativa (BCP) para que un cifrado de archivos o una filtración de datos no detenga tu negocio.',
      btn_request: 'Solicitar auditoría',
      btn_view_report: 'Ver informe de ejemplo',
      tag_1: 'Estudios contables',
      tag_2: 'Estudios jurídicos',
      tag_3: 'Clínicas',
      tag_4: 'Datos sensibles',
      risk_title: 'Riesgo sin gestión',
      risk_1: 'Datos cifrados sin respaldo útil',
      risk_2: 'Accesos sin control (RBAC ausente)',
      risk_3: 'Backups sin verificación',
      risk_4: 'Sin monitoreo de red',
      risk_5: 'Falta de políticas formales',
      risk_foot: 'Multas, pérdida operativa y daño reputacional.',
      services_title: 'Qué incluye SecurAudit 360',
      s1_t: 'Hardening de sistemas',
      s1_d: 'Checklist de endurecimiento para Linux y Windows Server: servicios, cuentas, políticas, puertos y actualizaciones.',
      s2_t: 'Backups 3-2-1',
      s2_d: 'Política de respaldo con backup automatizado y verificación de integridad para asegurar la recuperación.',
      s3_t: 'Control de accesos (RBAC)',
      s3_d: 'Gestión de usuarios, roles y permisos bajo el principio de mínimo privilegio.',
      s4_t: 'Monitoreo de red',
      s4_d: 'Vigilancia de tráfico y detección de accesos anómalos con alertas tempranas.',
      s5_t: 'Plan de continuidad (BCP)',
      s5_d: 'Diseño del plan de continuidad operativa y recuperación ante desastres (DRP).',
      s6_t: 'Informe priorizado',
      s6_d: 'Hallazgos con nivel de riesgo Alto/Medio/Bajo y plan de remediación ordenado por prioridad.',
      methodology_title: 'Metodología',
      m1_t: 'Relevamiento',
      m1_d: 'Inventario de activos, accesos y procesos críticos.',
      m2_t: 'Auditoría',
      m2_d: 'Evaluación de hardening, accesos, backups y red.',
      m3_t: 'Hallazgos',
      m3_d: 'Clasificación por riesgo y exposición al negocio.',
      m4_t: 'Remediación',
      m4_d: 'Plan de acción priorizado con responsables y plazos.',
      m5_t: 'Continuidad',
      m5_d: 'BCP y DRP documentados y probados.',
      report_title: 'Informe de auditoría de ejemplo',
      report_intro: 'Documento anonimizado con hallazgos clasificados por riesgo y su plan de acción.',
      filter_all: 'Todos',
      filter_high: 'Alto',
      filter_med: 'Medio',
      filter_low: 'Bajo',
      th_id: 'ID',
      th_finding: 'Hallazgo',
      th_category: 'Categoría',
      th_risk: 'Riesgo',
      th_impact: 'Impacto',
      th_remediation: 'Remediación',
      th_deadline: 'Plazo',
      btn_open_report: 'Abrir informe completo',
      contact_title: 'Contacto',
      contact_sub: 'Auditá, endurecé y asegurá la continuidad de tu negocio.',
      label_name: 'Nombre',
      label_email: 'Correo',
      label_message: 'Mensaje',
      btn_send: 'Enviar consulta',
      form_ok: 'Consulta enviada. Nos pondremos en contacto a la brevedad.',
      form_err: 'Completá todos los campos con un correo válido.',
      footer_rights: 'Todos los derechos reservados.'
    },
    pt: {
      nav_services: 'Serviços',
      nav_methodology: 'Metodologia',
      nav_report: 'Relatório',
      nav_contact: 'Contato',
      eyebrow: 'Auditoria · Hardening · Continuidade',
      hero_title: 'Você sabe o quão exposta está sua empresa a um incidente?',
      hero_sub: 'A SecurAudit 360 audita sua infraestrutura, fortalece seus sistemas e projeta um Plano de Continuidade de Negócios (BCP) para que a criptografia de arquivos ou um vazamento de dados não pare seu negócio.',
      btn_request: 'Solicitar auditoria',
      btn_view_report: 'Ver relatório de exemplo',
      tag_1: 'Escritórios contábeis',
      tag_2: 'Escritórios jurídicos',
      tag_3: 'Clínicas',
      tag_4: 'Dados sensíveis',
      risk_title: 'Risco sem gestão',
      risk_1: 'Dados criptografados sem backup útil',
      risk_2: 'Acessos sem controle (sem RBAC)',
      risk_3: 'Backups sem verificação',
      risk_4: 'Sem monitoramento de rede',
      risk_5: 'Falta de políticas formais',
      risk_foot: 'Multas, perda operacional e dano reputacional.',
      services_title: 'O que a SecurAudit 360 inclui',
      s1_t: 'Hardening de sistemas',
      s1_d: 'Checklist de fortalecimento para Linux e Windows Server: serviços, contas, políticas, portas e atualizações.',
      s2_t: 'Backups 3-2-1',
      s2_d: 'Política de backup com backup automatizado e verificação de integridade para garantir a recuperação.',
      s3_t: 'Controle de acesso (RBAC)',
      s3_d: 'Gestão de usuários, papéis e permissões sob o princípio do menor privilégio.',
      s4_t: 'Monitoramento de rede',
      s4_d: 'Vigilância de tráfego e detecção de acessos anômalos com alertas antecipados.',
      s5_t: 'Plano de continuidade (BCP)',
      s5_d: 'Projeto do Plano de Continuidade de Negócios e Recuperação de Desastres (DRP).',
      s6_t: 'Relatório priorizado',
      s6_d: 'Achados com nível de risco Alto/Médio/Baixo e plano de remediação ordenado por prioridade.',
      methodology_title: 'Metodologia',
      m1_t: 'Levantamento',
      m1_d: 'Inventário de ativos, acessos e processos críticos.',
      m2_t: 'Auditoria',
      m2_d: 'Avaliação de hardening, acessos, backups e rede.',
      m3_t: 'Achados',
      m3_d: 'Classificação por risco e exposição ao negócio.',
      m4_t: 'Remediação',
      m4_d: 'Plano de ação priorizado com responsáveis e prazos.',
      m5_t: 'Continuidade',
      m5_d: 'BCP e DRP documentados e testados.',
      report_title: 'Relatório de auditoria de exemplo',
      report_intro: 'Documento anonimizado com achados classificados por risco e seu plano de ação.',
      filter_all: 'Todos',
      filter_high: 'Alto',
      filter_med: 'Médio',
      filter_low: 'Baixo',
      th_id: 'ID',
      th_finding: 'Achado',
      th_category: 'Categoria',
      th_risk: 'Risco',
      th_impact: 'Impacto',
      th_remediation: 'Remediação',
      th_deadline: 'Prazo',
      btn_open_report: 'Abrir relatório completo',
      contact_title: 'Contato',
      contact_sub: 'Audite, fortaleça e garanta a continuidade do seu negócio.',
      label_name: 'Nome',
      label_email: 'E-mail',
      label_message: 'Mensagem',
      btn_send: 'Enviar consulta',
      form_ok: 'Consulta enviada. Entraremos em contato em breve.',
      form_err: 'Preencha todos os campos com um e-mail válido.',
      footer_rights: 'Todos os direitos reservados.'
    }
  };

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
    const langs = navigator.languages || [navigator.language || 'en'];
    for (const l of langs) {
      const code = l.toLowerCase();
      if (code.startsWith('es')) return 'es';
      if (code.startsWith('pt')) return 'pt';
    }
    return 'en';
  }

  function applyLang(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.setAttribute('lang', lang);
    window.__sa360_lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.hasAttribute('data-i18n-placeholder')) {
          el.setAttribute('placeholder', dict[key]);
        } else {
          el.textContent = dict[key];
        }
      }
    });
    const sel = document.getElementById('lang-selector');
    if (sel) sel.value = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  window.setLang = function (lang) {
    applyLang(lang);
  };

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(detectLang());
    const sel = document.getElementById('lang-selector');
    if (sel) {
      sel.addEventListener('change', (e) => applyLang(e.target.value));
    }
  });
})();
