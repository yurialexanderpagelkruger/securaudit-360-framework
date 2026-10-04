# SecurAudit 360

**SecurAudit 360** es un marco integral de auditoría de seguridad perimetral, directivas de hardening y planificación de continuidad de negocio (BCP/DRP) diseñado para entornos corporativos y PyMEs que procesan información sensible. Diseñado específicamente para consultores TI, administradores de sistemas y directores de tecnología, *SecurAudit 360* elimina la incertidumbre operativa y reemplaza prácticas reactivas por diagnósticos cuantificables, controles de acceso granulares y políticas de resiliencia verificadas.

Con herramientas de escaneo automatizado para Linux y Windows Server, esquemas de respaldo bajo la regla 3-2-1, detección de anomalías de red en tiempo real y matrices de roles (RBAC), el proyecto permite identificar vectores críticos de exposición a ransomware, asegurar cumplimiento normativo y estructurar planes de remediación priorizados por impacto de negocio.

### 📸 Capturas de pantalla

<div align="center">
  <table border="0">
    <thead>
      <tr>
        <th align="center">Versión de PC</th>
        <th align="center">Versión Móvil</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center" valign="middle">
          <img src="screenshot.gif" alt="Versión de PC" width="568" />
        </td>
        <td align="center" valign="middle">
          <img src="screenshot2.gif" alt="Versión Móvil" width="180" />
        </td>
      </tr>
    </tbody>
  </table>
</div>

## ✨ Características Principales

* **Diagnóstico de Vulnerabilidades Automatizado:** Script de auditoría sin dependencias externas que inspecciona puertos abiertos, cuentas con privilegios, configuración SSH, permisos en archivos del sistema y parches pendientes.

* **Estrategia de Respaldo 3-2-1 Cifrada:** Motor automatizado en Bash con compresión Zstandard (`zstd`), cifrado de extremo a extremo mediante OpenSSL (AES-256-CBC), firmas criptográficas SHA-256 y replicación offsite inmutable (`rsync`).

* **Matriz de Control de Acceso RBAC:** Esquema estandarizado de privilegios mínimos (PoLP) y segregación de funciones para usuarios, operadores, desarrolladores y auditores, evitando movimientos laterales no autorizados.

* **Monitoreo Perimetral y Accesos Anómalos:** Colector de eventos en tiempo real para detección automática de ataques de fuerza bruta sobre servicios expuestos y bloqueo reactivo inmediato por firewall.

* **Checklist de Hardening Multiplataforma:** Guía técnica estructurada paso a paso para aseguramiento del kernel, red y servicios en servidores Linux (Debian/RHEL) y Windows Server.

* **Informe de Continuidad de Negocio (BCP):** Plantilla ejecutiva con matriz de hallazgos clasificada en Alto, Medio y Bajo, impacto operacional cuantificable y plan de mitigación en tres fases.

## ⚙️ ¿Qué Hace? (Módulos Disponibles)

Desde la evaluación inicial hasta la remediación y gobierno, *SecurAudit 360* implementa los siguientes componentes:

1. **Escáner de Auditoría Local (`scripts/linux_audit_scanner.sh`):** Ejecuta revisiones exhaustivas sobre cuentas root, permisos críticos (`/etc/shadow`, `/etc/sudoers`), puertos en escucha, firewall activo y binarios con bits SUID/SGID.

2. **Orquestador de Backups 3-2-1 (`scripts/backup_321_engine.sh`):** Genera copias de directorios sensibles, empaqueta, cifra con llave dedicada, valida sumas SHA-256, replica a un destino remoto aislado y purga históricos según la política de retención.

3. **Detector de Anomalías e Intrusión (`scripts/network_anomaly_detector.sh`):** Inspecciona los registros del sistema de autenticación en busca de patrones sospechosos e inserta reglas preventivas en el firewall (UFW/iptables) en caso de superar el umbral de fallos.

4. **Matriz de Privilegios y Gobernanza (`policies/rbac_access_matrix.md`):** Establece los niveles de acceso formal a consola, bases de datos y registros según el rol operativo asignado.

5. **Informe Modelo de Auditoría Técnica (`audit/audit_report_sample.md`):** Documento formal de entrega para gerencia o auditoría externa que detalla vulnerabilidades encontradas, riesgos asociados y hoja de ruta correctiva.

## 🛠️ Tecnologías Utilizadas

* **Sistemas Operativos:** Linux (Debian 12 / RHEL 9) y directivas de endurecimiento para Windows Server.

* **Criptografía y Redes:** OpenSSL (AES-256-CBC), OpenSSH, UFW, Iptables, Rsync.

* **Automatización y Scripts:** Bash corporativo (estándar `set -Eeuo pipefail`), GNU Coreutils, `zstd`.

* **Estándares y Marcos de Referencia:** CIS Benchmarks, ISO/IEC 27001, NIST Cybersecurity Framework.

## 🚀 Instalación y Uso

1. Clonar el repositorio en el servidor destino:
   ```bash
   git clone [https://github.com/yurialexanderpagelkruger/securaudit-360-framework.git](https://github.com/yurialexanderpagelkruger/securaudit-360-framework.git)
   cd securaudit-360-framework

## 👨‍💻 Autor

Desarrollado por **Yuri Alexander Pagel Krüger**
