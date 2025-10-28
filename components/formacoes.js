class CustomFormacoes extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .qualifications {
          background: rgba(31, 41, 55, 0.6);
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #3b82f6;
          display: flex;
          align-items: center;
        }
        .section-title i {
          margin-right: 0.5rem;
        }
        .timeline {
          position: relative;
          padding-left: 1.5rem;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 7px;
          top: 0;
          height: 100%;
          width: 2px;
          background: #3b82f6;
        }
        .timeline-item {
          position: relative;
          padding-bottom: 2rem;
        }
        .timeline-item:last-child {
          padding-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          left: 0;
          top: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #3b82f6;
          transform: translateX(-50%);
        }
        .timeline-content {
          margin-left: 2rem;
          padding: 1rem;
          background: rgba(17, 24, 39, 0.5);
          border-radius: 0.5rem;
          border-left: 3px solid #3b82f6;
        }
        .timeline-date {
          color: #93c5fd;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        .timeline-title {
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: white;
        }
        .timeline-description {
          color: #9ca3af;
          font-size: 0.875rem;
        }
      </style>
      <div class="qualifications">
        <h2 class="section-title">
          <i data-feather="award"></i>
          Minhas Formações
        </h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2018 - 2022</div>
              <h3 class="timeline-title">Bacharelado em Engenharia Informática</h3>
              <p class="timeline-description">Instituto Superior Técnico de Angola - Especialização em Desenvolvimento de Sistemas</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2016 - 2019</div>
              <h3 class="timeline-title">Bacharelado em Sistemas de Informação</h3>
              <p class="timeline-description">Faculdade ABC - Ênfase em Desenvolvimento de Software</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2018</div>
              <h3 class="timeline-title">Certificação Cisco CCNA</h3>
              <p class="timeline-description">Certificação em Redes de Computadores</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2017</div>
              <h3 class="timeline-title">Certificação AWS Solutions Architect</h3>
              <p class="timeline-description">Arquitetura de soluções em nuvem AWS</p>
            </div>
          </div>
        </div>
      </div>
    `;
    feather.replace();
  }
}

customElements.define('custom-formacoes', CustomFormacoes);