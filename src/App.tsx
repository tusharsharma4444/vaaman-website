import { Terminal, Shield, Activity, Search, ShieldAlert, Github, ChevronRight } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Vaaman Logo" className="logo-image" />
        </div>
        <nav className="nav-links">
          <a href="#how-it-works" className="nav-link">How it works</a>
          <a href="#comparison" className="nav-link">Comparison</a>
          <a href="#attack-chains" className="nav-link">Attack Chains</a>
        </nav>
        <a href="https://github.com/tusharsharma4444/vaaman-cli" target="_blank" rel="noopener noreferrer" className="github-link">
          <Github size={20} />
          <span>GitHub</span>
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge animate-slide-up">
          <ShieldAlert size={16} />
          <span>Real-time OS-level monitoring</span>
        </div>
        <h1 className="hero-title animate-slide-up delay-100">
          Supply chain attack detection that actually works.
        </h1>
        <p className="hero-subtitle animate-slide-up delay-200">
          Vaaman wraps <code style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>npm install</code> and watches what packages actually do at the OS level — live, as it happens. Not CVE databases. Not static rules. Actual behavior.
        </p>
        <div className="hero-actions animate-slide-up delay-300">
          <a href="#quickstart" className="btn-primary">
            <Terminal size={20} />
            Quickstart
          </a>
          <a href="https://github.com/tusharsharma4444/vaaman-cli" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View on GitHub <ChevronRight size={20} />
          </a>
        </div>

        {/* Terminal Window Simulation */}
        <div className="terminal animate-fade-in delay-400">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="terminal-title">vaaman install 9router</span>
          </div>
          <div className="terminal-body">
            <div className="command">
              <span className="highlight-green">$</span> vaaman install 9router
            </div>
            <div className="output">
              <span className="highlight-dim">▲ VAAMAN — supply chain monitor</span><br />
              <span className="highlight-dim">────────────────────────────────────────────────────────────</span><br />
              &nbsp;&nbsp;Scanning: <span className="highlight-white">9router</span><br />
              &nbsp;&nbsp;Watching: <span className="highlight-cyan">processes</span> · <span className="highlight-cyan">network</span> · <span className="highlight-cyan">filesystem</span><br />
              <span className="highlight-dim">────────────────────────────────────────────────────────────</span><br />
              <br />
              &nbsp;&nbsp;┌─ npm install output ─────────────────────────────────────<br />
              &nbsp;&nbsp;19:38:30.702 ⚙ <span className="highlight-cyan">process</span>&nbsp;&nbsp;&nbsp;&nbsp;Unknown process during install: prebuild-install<br />
              &nbsp;&nbsp;<span className="highlight-yellow">🟡 SUSPICIOUS</span> — Unknown process spawned from hidden runtime directory<br />
              <br />
              &nbsp;&nbsp;19:38:30.788 📁 <span className="highlight-cyan">filesystem</span> File write outside project directory: /etc/ssl/openssl.cnf<br />
              &nbsp;&nbsp;<span className="highlight-yellow">🟡 SUSPICIOUS</span> — Writing to system path during install<br />
              <br />
              &nbsp;&nbsp;19:38:41.458 ⚙ <span className="highlight-cyan">process</span>&nbsp;&nbsp;&nbsp;&nbsp;Remote download tool: wget — https://example.com<br />
              &nbsp;&nbsp;<span className="highlight-orange">🟠 DANGEROUS</span> — Remote download detected mid-install<br />
              <br />
              &nbsp;&nbsp;added 11 packages in 49s<br />
              &nbsp;&nbsp;└─ end npm output ─────────────────────────────────────────<br />
              <br />
              &nbsp;&nbsp;Verdict&nbsp;&nbsp;<span className="highlight-orange">🟠 DANGEROUS</span><br />
              &nbsp;&nbsp;Attack chains: <span className="highlight-white">curl-exec</span><br />
              &nbsp;&nbsp;Signals: 1 dangerous · 3 suspicious<br />
              <br />
              &nbsp;&nbsp;<span className="highlight-red">✗ Dangerous behavior detected. Investigate before proceeding.</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="features">
        <div className="section-header">
          <h2 className="section-title">How it works</h2>
          <p className="section-subtitle">
            The key insight: `strace` hooks at the kernel level via `execve()` syscalls. It cannot miss a process spawn — even ones that die in under 10 milliseconds.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <Activity className="feature-icon" size={40} />
            <h3 className="feature-title">Process Monitoring</h3>
            <p className="feature-desc">Intercepts every OS-level syscall during install. Watches every binary spawned, ensuring nothing slips by.</p>
          </div>
          <div className="feature-card">
            <Search className="feature-icon" size={40} />
            <h3 className="feature-title">Network Inspection</h3>
            <p className="feature-desc">Monitors every outbound connection in real-time. Detects suspicious calls to unknown or unexpected servers.</p>
          </div>
          <div className="feature-card">
            <Shield className="feature-icon" size={40} />
            <h3 className="feature-title">Filesystem Tracking</h3>
            <p className="feature-desc">Watches every file written outside of `node_modules`. Instantly flags attempts to modify system configurations or user profiles.</p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="comparison">
        <div className="section-header">
          <h2 className="section-title">Why existing tools fail</h2>
          <p className="section-subtitle">
            Zero-day supply chain attacks bypass traditional tools entirely. Vaaman watches what actually happens.
          </p>
        </div>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Tool Type</th>
              <th>How it works</th>
              <th>Catches Zero-days?</th>
              <th>Monitors Behavior?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>npm audit</td>
              <td>Only knows about known CVEs.</td>
              <td className="x-icon">✗ No</td>
              <td className="x-icon">✗ No</td>
            </tr>
            <tr>
              <td>Snyk / Dependabot</td>
              <td>Database-driven static checks.</td>
              <td className="x-icon">✗ No</td>
              <td className="x-icon">✗ No</td>
            </tr>
            <tr>
              <td>Semgrep / ESLint</td>
              <td>Scans your code, not dependencies' code.</td>
              <td className="x-icon">✗ No</td>
              <td className="x-icon">✗ No</td>
            </tr>
            <tr>
              <td style={{ color: 'var(--accent-amber)' }}>Vaaman</td>
              <td>Hooks kernel-level syscalls during install.</td>
              <td className="check-icon">✓ Yes</td>
              <td className="check-icon">✓ Yes</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Attack Chains */}
      <section id="attack-chains" className="chains">
        <div className="section-header">
          <h2 className="section-title">Attack Chains Detected</h2>
          <p className="section-subtitle">
            A single wget call is dangerous. A wget piped into sh is critical. Chains matter more than individual signals.
          </p>
        </div>
        <div className="chains-grid">
          <div className="chain-card">
            <div className="chain-header">
              <span className="chain-name">network-exec</span>
              <span className="verdict-critical">Critical</span>
            </div>
            <p className="chain-desc">Download + execute</p>
          </div>
          <div className="chain-card">
            <div className="chain-header">
              <span className="chain-name">obfuscation-exec</span>
              <span className="verdict-critical">Critical</span>
            </div>
            <p className="chain-desc">base64 decode + execute</p>
          </div>
          <div className="chain-card">
            <div className="chain-header">
              <span className="chain-name">homedir-write</span>
              <span className="verdict-critical">Critical</span>
            </div>
            <p className="chain-desc">Writing to ~/.bashrc, ~/.ssh</p>
          </div>
          <div className="chain-card">
            <div className="chain-header">
              <span className="chain-name">suspicious-port</span>
              <span className="verdict-critical">Critical</span>
            </div>
            <p className="chain-desc">Connection to known C2 port</p>
          </div>
          <div className="chain-card">
            <div className="chain-header">
              <span className="chain-name">curl-exec</span>
              <span className="verdict-dangerous">Dangerous</span>
            </div>
            <p className="chain-desc">Remote download tool spawned</p>
          </div>
          <div className="chain-card">
            <div className="chain-header">
              <span className="chain-name">shell-spawn</span>
              <span className="verdict-dangerous">Dangerous</span>
            </div>
            <p className="chain-desc">Shell spawned in postinstall</p>
          </div>
          <div className="chain-card">
            <div className="chain-header">
              <span className="chain-name">env-harvest</span>
              <span className="verdict-suspicious">Suspicious</span>
            </div>
            <p className="chain-desc">Outbound on non-standard port</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Built for the modern npm ecosystem. Protect your supply chain.</p>
      </footer>
    </div>
  );
}

export default App;
