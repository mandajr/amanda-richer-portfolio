import { useState, useEffect } from 'react';
import {
  PenTool, Mic, GraduationCap, Smartphone, Palette, Landmark, Users,
  X, ExternalLink, ChevronDown, Mail
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('nexus');
  const [selectedNode, setSelectedNode] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // ─────────────────────────────────────────────
  // PALETTE  ·  watercolor + cream
  // ─────────────────────────────────────────────
  const c = {
    cream: '#FAF5ED',
    creamDeep: '#F4EBDB',
    creamShade: '#EEE1C6',
    coral: '#ED7E47',
    hotpink: '#E84855',
    magenta: '#D63E72',
    teal: '#2DA8A8',
    gold: '#C99A2E',
    indigo: '#3D5A80',
    sage: '#6B8E5A',
    ink: '#2C2825',
    inkSoft: '#5C544D',
    inkLight: '#8A8077',
    line: '#D9CDB3',
  };

  // ─────────────────────────────────────────────
  // ECOMAP DATA
  // ─────────────────────────────────────────────
  const nodes = [
    {
      id: 'writing', short: 'Writing', full: 'Writing & Journalism',
      angle: -90, color: c.coral, Icon: PenTool, tabLink: 'prose',
      what: 'Long-form essays, policy analysis, and reported journalism that translate systems-level patterns into public argument.',
      why: 'Writing makes structural harm visible to people who would never sit through a policy briefing.',
      where: 'Substack · Runta News · op-eds · white papers',
      threads: ['onehealth', 'tbi', 'ai'],
    },
    {
      id: 'speaking', short: 'Speaking', full: 'Public Speaking',
      angle: -90 + (360 / 7), color: c.hotpink, Icon: Mic, tabLink: 'about',
      what: 'Plenaries, panels, and keynotes at international, national, and local convenings — bringing lived experience into rooms that often exclude it.',
      why: 'Decisions about displaced people happen in rooms most never enter. I enter them, then bring the framing back.',
      where: 'CSW70 (UN) · UNITAR · NHCHC · NAEH · NGO Working Group to End Homelessness',
      threads: ['onehealth', 'knowledge'],
    },
    {
      id: 'teaching', short: 'Teaching', full: 'Training & Education',
      angle: -90 + 2 * (360 / 7), color: c.magenta, Icon: GraduationCap, tabLink: 'consultancy',
      what: 'Curriculum, workshops, and one-on-one mentorship for researchers, students, NGO staff, and people new to advocacy.',
      why: 'Knowledge transfer is how this work survives me. Mentorship is how it grows.',
      where: 'University of Washington · One Health Clinic · NAEH Advocacy Cohort · ShelterApp volunteers',
      threads: ['knowledge', 'ai'],
    },
    {
      id: 'building', short: 'Building', full: 'Tech for Good',
      angle: -90 + 3 * (360 / 7), color: c.teal, Icon: Smartphone, tabLink: 'consultancy',
      what: 'Co-creating tools that reach people who fall outside the reach of conventional services.',
      why: 'Tools built without lived expertise repeat the failures of the systems they try to fix.',
      where: 'ShelterApp (co-creator, 2019) · WA State resource database build-out',
      threads: ['ai', 'knowledge'],
    },
    {
      id: 'making', short: 'Making', full: 'Visual Practice',
      angle: -90 + 4 * (360 / 7), color: c.gold, Icon: Palette, tabLink: 'visual',
      what: 'Painting from imagination, photography, and mixed creative work under the name Manda J Artistry.',
      why: 'Image makes legible what argument cannot. The visual practice and the policy practice are the same orientation, in different languages.',
      where: 'Manda J Artistry · "Unplanned Life" (long-form memoir/fiction)',
      threads: ['onehealth'],
    },
    {
      id: 'leading', short: 'Leading', full: 'Governance',
      angle: -90 + 5 * (360 / 7), color: c.indigo, Icon: Landmark, tabLink: 'about',
      what: 'Board and council service shaping policy and program direction across systems serving displaced and unhoused communities.',
      why: 'Governance is where direction gets set. Showing up there with lived expertise is non-negotiable.',
      where: 'NHCHC Board · Seattle/King County HCHN Governance Council · UN NGO Working Group to End Homelessness · WA Balance of State CoC',
      threads: ['knowledge', 'tbi'],
    },
    {
      id: 'advising', short: 'Advising', full: 'Consultancy',
      angle: -90 + 6 * (360 / 7), color: c.sage, Icon: Users, tabLink: 'consultancy',
      what: 'Embedded advisory work with research teams, coalitions, and direct-service organizations on displacement, homelessness, and human rights.',
      why: 'Consultation grounded in lived expertise short-circuits years of avoidable missteps.',
      where: 'UW One Health Research · cross-sector coalitions · PNW Co-Sheltering Working Group',
      threads: ['onehealth', 'cosheltering', 'tbi'],
    },
  ];

  const threads = [
    { id: 'onehealth',    label: 'One Health',                  color: c.teal },
    { id: 'cosheltering', label: 'Co-sheltering',               color: c.coral },
    { id: 'tbi',          label: 'TBI & Brain Injury',          color: c.indigo },
    { id: 'ai',           label: 'AI as Accommodation',         color: c.magenta },
    { id: 'knowledge',    label: 'Knowledge Transfer',          color: c.gold },
  ];

  // ─────────────────────────────────────────────
  // TAB CONFIG
  // ─────────────────────────────────────────────
  const tabs = [
    { id: 'nexus',       label: 'Nexus',       color: c.coral },
    { id: 'consultancy', label: 'Consultancy', color: c.sage },
    { id: 'visual',      label: 'Visual',      color: c.gold },
    { id: 'prose',       label: 'Prose',       color: c.magenta },
    { id: 'about',       label: 'About',       color: c.indigo },
  ];

  // ─────────────────────────────────────────────
  // CONTENT DATA
  // ─────────────────────────────────────────────
  const currentlyItems = [
    'Architecture of Displacement series — federal policy impacts on displaced populations',
    'ShelterApp Washington State resource database build-out',
    'PNW Co-Sheltering Working Group — ecomap + recruitment',
    'TBI & Homelessness research package — governance-ready deliverables',
    'Long-form article on cognitive prosthetics and AI as accessibility',
  ];

  const consultancyWork = [
    {
      id: 'uw',
      title: 'University of Washington — One Health Research',
      role: 'Displacement Consultant',
      what: 'Provide consultation, outreach, and networking guidance to researchers working with displaced populations. Review materials designed for unhoused communities. Build pathways between UW and King County service providers.',
      why: 'Research designed without lived expertise tends to study people rather than serve them. Embedded review changes that.',
      how: 'Active engagement with the Center for One Health Research; regular collaboration with project leads and community partners.',
    },
    {
      id: 'naeh',
      title: 'National Alliance to End Homelessness',
      role: 'Speaker & Lived Experience Advocate',
      what: 'Deliver national presentations on displacement, policy, and systems change. Contribute to policy recommendations grounded in both lived and professional experience.',
      why: 'National policy is shaped by who shows up. Lived-experience advocates change the room.',
      how: 'Lived Experience Advisory Committee · annual conference presentations · advocacy cohort participation.',
    },
    {
      id: 'shelterapp',
      title: 'ShelterApp',
      role: 'Co-Creator & Strategist',
      what: 'Co-created in 2019. Continue contributing to platform strategy, content, and the Washington State resource database expansion.',
      why: 'Information access is a basic precondition for service access. ShelterApp was designed around that fact.',
      how: 'Strategic and content guidance · resource database curation · NGO networking.',
    },
    {
      id: 'pnw',
      title: 'PNW Co-Sheltering Working Group',
      role: 'Member · Ecomap Lead',
      what: 'Co-developing relational mapping, recruitment materials, and convening structure for a multi-state working group on co-sheltering practices for people and their animals.',
      why: 'The pet-keeping unhoused population is systematically excluded from shelter. Co-sheltering is the structural answer.',
      how: 'Monthly convenings · ecomap maintenance · recruitment outreach.',
    },
  ];

  const educationItems = [
    { kind: 'Resources', text: 'Plain-language explainers on federal policy (OBBBA, FY27 budget, Medicaid changes) accessible to mixed audiences — advocates, frontline workers, and directly impacted people.' },
    { kind: 'Trainings', text: 'Workshops and presentations at UW, NHCHC and NAEH conferences, UNITAR. Topics include displacement systems, One Health framing, and lived-experience-led research.' },
    { kind: 'Mentorship', text: 'One-on-one mentorship for ShelterApp volunteers, NAEH Advocacy Cohort members, and people new to lived-experience advocacy.' },
  ];

  const proseItems = [
    {
      id: 'aoa',
      title: 'Architecture of Abandonment',
      kind: 'White paper',
      blurb: 'Advocacy white paper documenting how converging federal policy harms compound on communities facing structural harm. Framing introduced at CSW70 (UN Commission on the Status of Women).',
      status: 'Completed',
      link: '#REPLACE_AOA_LINK',
    },
    {
      id: 'aod',
      title: 'The Architecture of Displacement',
      kind: 'Essay series',
      blurb: 'Educational series on OBBBA and FY27 federal budget impacts on homelessness systems. Includes Aging Out of Options (Parts 1 & 2) on the health-to-homelessness pipeline for older adults, caregivers, and people with disabilities.',
      status: 'Ongoing',
      link: '#REPLACE_AOD_LINK',
    },
    {
      id: 'culling',
      title: 'The Culling of Americans',
      kind: 'White paper',
      blurb: 'Documents converging federal policy harms — Medicaid, SNAP, LIHEAP, caregiver labor — as structural violence.',
      status: 'Completed',
      link: '#REPLACE_CULLING_LINK',
    },
    {
      id: 'ngo',
      title: 'NGO Compliance and Displacement',
      kind: 'Long-form analysis',
      blurb: 'Argues that NGO preemptive compliance with HUD Continuum of Care overhauls constitutes complicity in displacement.',
      status: 'Completed',
      link: '#REPLACE_NGO_LINK',
    },
    {
      id: 'rebuild',
      title: 'If We\'re Rebuilding Anyway',
      kind: 'Substack',
      blurb: 'Reframes current systemic demolition as an opportunity to build toward universal human rights.',
      status: 'Published',
      link: '#REPLACE_REBUILD_LINK',
    },
    {
      id: 'runta',
      title: 'Runta News reporting',
      kind: 'Journalism',
      blurb: 'Reporting at the intersection of displacement, community health, and human rights for a multimedia outlet serving Somali and Muslim communities.',
      status: 'Ongoing',
      link: '#REPLACE_RUNTA_LINK',
    },
  ];

  const aboutEngagements = [
    'CSW70 — UN Commission on the Status of Women (presenter)',
    'UNITAR — United Nations Institute for Training and Research (presenter)',
    'NHCHC Annual Conference (presenter)',
    'NAEH National Conference on Ending Homelessness (presenter)',
    'University of Washington research presentations',
  ];

  const aboutRoles = [
    'Board Member — National Health Care for the Homeless Council (NHCHC)',
    'Governance Council — Seattle/King County Health Care for the Homeless Network (HCHN)',
    'UN NGO Working Group to End Homelessness',
    'Washington Balance of State Continuum of Care',
    'PNW Co-Sheltering Working Group',
    'Displacement Consultant — UW Center for One Health Research',
  ];

  // ─────────────────────────────────────────────
  // FONTS + GLOBAL STYLE
  // ─────────────────────────────────────────────
  const fontStack = `
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@300;400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; overflow-x: hidden; width: 100%; background: ${c.cream}; }

    .font-display { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
    .font-body    { font-family: 'Spectral', Georgia, serif; }
    .font-mono    { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.14em; }

    .grain {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        radial-gradient(circle at 18% 14%, rgba(237,126,71,0.08), transparent 38%),
        radial-gradient(circle at 82% 22%, rgba(232,72,85,0.06), transparent 42%),
        radial-gradient(circle at 24% 78%, rgba(201,154,46,0.07), transparent 44%),
        radial-gradient(circle at 78% 80%, rgba(45,168,168,0.05), transparent 40%);
      mix-blend-mode: multiply;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .anim-in { animation: fadeUp 0.5s ease forwards; }

    @keyframes sheetUp {
      from { opacity: 0; transform: translateY(100%); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .anim-sheet { animation: sheetUp 0.32s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

    button { -webkit-tap-highlight-color: transparent; }
    a { color: inherit; }
  `;

  // ─────────────────────────────────────────────
  // ECOMAP RENDERER
  // ─────────────────────────────────────────────
  const Ecomap = () => {
    const cx = 200, cy = 220;
    const r = 140;          // radius of node circle
    const nodeR = 48;       // node radius (larger now that labels are gone)

    const sel = selectedNode ? nodes.find(n => n.id === selectedNode) : null;
    const activeThreadIds = sel ? sel.threads : [];

    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <svg viewBox="0 0 400 500" style={{ width: '100%', height: 'auto', display: 'block' }}>
          {/* watercolor halo behind everything */}
          <defs>
            <radialGradient id="centerHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%"  stopColor={c.cream} stopOpacity="1" />
              <stop offset="60%" stopColor={c.creamDeep} stopOpacity="0.6" />
              <stop offset="100%" stopColor={c.creamDeep} stopOpacity="0" />
            </radialGradient>
            {nodes.map(n => (
              <radialGradient key={`g-${n.id}`} id={`halo-${n.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%"  stopColor={n.color} stopOpacity="0.28" />
                <stop offset="65%" stopColor={n.color} stopOpacity="0.08" />
                <stop offset="100%" stopColor={n.color} stopOpacity="0" />
              </radialGradient>
            ))}
          </defs>

          {/* center halo */}
          <circle cx={cx} cy={cy} r={180} fill="url(#centerHalo)" />

          {/* spokes from center to each node, faint */}
          {nodes.map(n => {
            const rad = (n.angle * Math.PI) / 180;
            const x = cx + r * Math.cos(rad);
            const y = cy + r * Math.sin(rad);
            const dim = sel && !sel.id === n.id ? 0.18 : 0.32;
            return (
              <line key={`spoke-${n.id}`}
                x1={cx} y1={cy} x2={x} y2={y}
                stroke={n.color} strokeWidth="1" strokeOpacity={dim}
                strokeDasharray="2 4" />
            );
          })}

          {/* foundation arc — lived experience */}
          <path
            d={`M 30 420 Q 200 470 370 420`}
            fill="none" stroke={c.inkLight} strokeWidth="1" strokeDasharray="3 5" opacity="0.55"
          />
          <text x={200} y={448} textAnchor="middle"
            className="font-mono"
            style={{ fontSize: 9, fill: c.inkSoft, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            Foundation · Lived Experience
          </text>

          {/* center node */}
          <circle cx={cx} cy={cy} r={56} fill={c.creamDeep} stroke={c.ink} strokeWidth="1.5" />
          <text x={cx} y={cy - 4} textAnchor="middle"
            className="font-display"
            style={{ fontSize: 16, fill: c.ink, fontWeight: 500, fontStyle: 'italic' }}>
            Human
          </text>
          <text x={cx} y={cy + 14} textAnchor="middle"
            className="font-display"
            style={{ fontSize: 16, fill: c.ink, fontWeight: 500, fontStyle: 'italic' }}>
            Rights
          </text>

          {/* nodes */}
          {nodes.map(n => {
            const rad = (n.angle * Math.PI) / 180;
            const x = cx + r * Math.cos(rad);
            const y = cy + r * Math.sin(rad);
            const isSelected = sel && sel.id === n.id;
            const isOther = sel && sel.id !== n.id;
            return (
              <g key={n.id} onClick={() => setSelectedNode(n.id)} style={{ cursor: 'pointer' }}>
                {/* halo behind each node */}
                <circle cx={x} cy={y} r={nodeR + 16} fill={`url(#halo-${n.id})`} />
                <circle cx={x} cy={y} r={nodeR}
                  fill={c.cream}
                  stroke={n.color}
                  strokeWidth={isSelected ? 3 : 2}
                  opacity={isOther ? 0.55 : 1}
                />
                {/* icon */}
                <foreignObject x={x - 16} y={y - 16} width="32" height="32">
                  <div style={{
                    width: 32, height: 32,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: n.color,
                    opacity: isOther ? 0.55 : 1,
                  }}>
                    <n.Icon size={28} strokeWidth={1.6} />
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>

        {/* threads chips */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 6,
          padding: '4px 16px 0', justifyContent: 'center',
        }}>
          {threads.map(t => {
            const active = activeThreadIds.includes(t.id);
            return (
              <span key={t.id} className="font-mono"
                style={{
                  fontSize: 9,
                  textTransform: 'uppercase',
                  padding: '4px 9px',
                  borderRadius: 999,
                  background: active ? t.color : c.cream,
                  color: active ? c.cream : c.inkLight,
                  border: `1px solid ${active ? t.color : c.line}`,
                  transition: 'all 0.25s ease',
                  letterSpacing: '0.18em',
                }}>
                {t.label}
              </span>
            );
          })}
        </div>

        {/* hint when nothing selected */}
        {!sel && (
          <div className="font-mono"
            style={{
              textAlign: 'center', fontSize: 10, color: c.inkLight,
              marginTop: 14, letterSpacing: '0.22em', textTransform: 'uppercase',
            }}>
            Tap a node to read more
          </div>
        )}
      </div>
    );
  };

  // ─────────────────────────────────────────────
  // BOTTOM SHEET (ecomap node detail)
  // ─────────────────────────────────────────────
  const NodeSheet = () => {
    if (!selectedNode) return null;
    const n = nodes.find(x => x.id === selectedNode);
    if (!n) return null;

    return (
      <div
        onClick={() => setSelectedNode(null)}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(44,40,37,0.32)',
          backdropFilter: 'blur(2px)',
          zIndex: 50,
          display: 'flex', alignItems: 'flex-end',
        }}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="anim-sheet"
          style={{
            width: '100%',
            background: c.cream,
            borderTopLeftRadius: 24, borderTopRightRadius: 24,
            padding: '20px 22px 92px',
            maxHeight: '78vh', overflowY: 'auto',
            boxShadow: '0 -20px 60px rgba(44,40,37,0.18)',
            position: 'relative',
          }}>
          {/* handle */}
          <div style={{
            width: 44, height: 4, borderRadius: 4,
            background: c.line, margin: '0 auto 16px',
          }} />

          {/* close */}
          <button onClick={() => setSelectedNode(null)}
            style={{
              position: 'absolute', top: 14, right: 14,
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: c.inkSoft,
            }}>
            <X size={20} />
          </button>

          {/* header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: c.creamDeep,
              border: `2px solid ${n.color}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: n.color,
            }}>
              <n.Icon size={22} strokeWidth={1.7} />
            </div>
            <div>
              <div className="font-mono" style={{ fontSize: 9, color: c.inkLight, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                Practice
              </div>
              <div className="font-display" style={{ fontSize: 22, fontWeight: 500, color: c.ink, fontStyle: 'italic', lineHeight: 1.1 }}>
                {n.full}
              </div>
            </div>
          </div>

          {/* sections */}
          <Section c={c} label="What" body={n.what} accent={n.color} />
          <Section c={c} label="Why"  body={n.why}  accent={n.color} />
          <Section c={c} label="Where it lives" body={n.where} accent={n.color} />

          {/* threads */}
          <div className="font-mono" style={{ fontSize: 9, color: c.inkLight, marginTop: 18, marginBottom: 8, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Connected Threads
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {n.threads.map(tid => {
              const t = threads.find(x => x.id === tid);
              if (!t) return null;
              return (
                <span key={tid} className="font-body"
                  style={{
                    fontSize: 12, color: c.ink,
                    padding: '4px 10px',
                    border: `1px solid ${t.color}`,
                    borderRadius: 999, background: c.cream,
                  }}>
                  {t.label}
                </span>
              );
            })}
          </div>

          {/* deep link */}
          {n.tabLink && (
            <button
              onClick={() => { setActiveTab(n.tabLink); setSelectedNode(null); }}
              className="font-mono"
              style={{
                marginTop: 22,
                width: '100%',
                background: n.color,
                color: c.cream,
                border: 'none',
                padding: '14px 16px',
                borderRadius: 12,
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}>
              Open {tabs.find(t => t.id === n.tabLink)?.label || ''}
              <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
            </button>
          )}
        </div>
      </div>
    );
  };

  // ─────────────────────────────────────────────
  // NEXUS TAB
  // ─────────────────────────────────────────────
  const NexusTab = () => (
    <div className="anim-in" style={{ padding: '32px 22px 110px' }}>
      <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 10 }}>
        Seattle, WA · She / Her
      </div>
      <h1 className="font-display" style={{
        margin: 0, fontSize: 44, lineHeight: 1.02, fontWeight: 400, color: c.ink, letterSpacing: '-0.01em',
      }}>
        Amanda<br />
        <span style={{ fontStyle: 'italic', color: c.coral }}>Richer</span>
      </h1>
      <p className="font-body" style={{
        marginTop: 12, fontSize: 17, color: c.inkSoft, lineHeight: 1.45, maxWidth: 340,
      }}>
        Displacement consultant, writer, visual artist. Lived expertise organized into a body of work in
        defense of universal human rights.
      </p>

      {/* CURRENTLY */}
      <div style={{ marginTop: 36 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 12 }}>
          Currently
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {currentlyItems.map((it, i) => (
            <li key={i} className="font-body" style={{
              fontSize: 14, color: c.ink, lineHeight: 1.45,
              padding: '10px 0',
              borderBottom: i < currentlyItems.length - 1 ? `1px solid ${c.line}` : 'none',
              display: 'flex', gap: 12,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: c.coral, marginTop: 9, flexShrink: 0,
              }} />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ECOMAP */}
      <div style={{ marginTop: 44 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 6, textAlign: 'center' }}>
          The Work
        </div>
        <div className="font-display" style={{
          fontSize: 22, color: c.ink, fontStyle: 'italic',
          textAlign: 'center', marginBottom: 18, fontWeight: 400,
        }}>
          One orientation, seven practices.
        </div>
        <Ecomap />
      </div>
    </div>
  );

  // ─────────────────────────────────────────────
  // CONSULTANCY TAB
  // ─────────────────────────────────────────────
  const ConsultancyTab = () => (
    <div className="anim-in" style={{ padding: '32px 22px 110px' }}>
      <TabHeader c={c} label="Consultancy" tagline="Embedded advisory work at the intersections of displacement, health, and human rights." color={c.sage} />

      <div style={{ marginTop: 30 }}>
        {consultancyWork.map((w, i) => {
          const open = expandedCard === `cw-${w.id}`;
          return (
            <button key={w.id}
              onClick={() => setExpandedCard(open ? null : `cw-${w.id}`)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: c.cream,
                border: `1px solid ${c.line}`,
                borderRadius: 14,
                padding: '16px 16px',
                marginBottom: 10,
                cursor: 'pointer',
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                <div>
                  <div className="font-mono" style={{ fontSize: 9, color: c.sage, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 4 }}>
                    {w.role}
                  </div>
                  <div className="font-display" style={{ fontSize: 17, color: c.ink, fontWeight: 500, lineHeight: 1.2 }}>
                    {w.title}
                  </div>
                </div>
                <ChevronDown size={18} color={c.inkLight}
                  style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', marginTop: 4, flexShrink: 0 }} />
              </div>
              {open && (
                <div style={{ marginTop: 14, borderTop: `1px solid ${c.line}`, paddingTop: 14 }}>
                  <CardField c={c} label="What" body={w.what} />
                  <CardField c={c} label="Why"  body={w.why} />
                  <CardField c={c} label="How"  body={w.how} />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Education & Training */}
      <div style={{ marginTop: 40 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 14 }}>
          Education & Training
        </div>
        {educationItems.map((e, i) => (
          <div key={i} style={{
            background: c.creamDeep,
            padding: '14px 16px',
            borderRadius: 12,
            marginBottom: 10,
            borderLeft: `3px solid ${c.sage}`,
          }}>
            <div className="font-mono" style={{ fontSize: 9, color: c.sage, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 6 }}>
              {e.kind}
            </div>
            <div className="font-body" style={{ fontSize: 14, color: c.ink, lineHeight: 1.5 }}>
              {e.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ─────────────────────────────────────────────
  // VISUAL TAB
  // ─────────────────────────────────────────────
  const VisualTab = () => (
    <div className="anim-in" style={{ padding: '32px 22px 110px' }}>
      <TabHeader c={c} label="Visual" tagline="Painting, photography, and mixed creative work under the name Manda J Artistry." color={c.gold} />

      <p className="font-body" style={{
        fontSize: 15, color: c.inkSoft, lineHeight: 1.55, marginTop: 18,
      }}>
        Painting from imagination rather than reference. Focus on natural subjects, transition, and the
        textures of belonging. Photography and a long-form memoir/fiction project ("Unplanned Life") share
        the same orientation, in different languages.
      </p>

      {/* placeholder gallery */}
      <div style={{
        marginTop: 24,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
      }}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{
            aspectRatio: '1',
            background: `linear-gradient(135deg, ${c.creamDeep}, ${c.creamShade})`,
            borderRadius: 10,
            border: `1px dashed ${c.line}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span className="font-mono" style={{ fontSize: 9, color: c.inkLight, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Artwork {i}
            </span>
          </div>
        ))}
      </div>
      <div className="font-mono" style={{ fontSize: 9, color: c.inkLight, marginTop: 14, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        Replace tiles with paintings, photographs, or scans
      </div>
    </div>
  );

  // ─────────────────────────────────────────────
  // PROSE TAB
  // ─────────────────────────────────────────────
  const ProseTab = () => (
    <div className="anim-in" style={{ padding: '32px 22px 110px' }}>
      <TabHeader c={c} label="Prose" tagline="Long-form essays, white papers, and reported journalism." color={c.magenta} />

      <div style={{ marginTop: 24 }}>
        {proseItems.map((p, i) => (
          <a key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: c.cream,
              border: `1px solid ${c.line}`,
              borderRadius: 14,
              padding: '16px',
              marginBottom: 10,
              textDecoration: 'none',
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
              <div className="font-mono" style={{ fontSize: 9, color: c.magenta, textTransform: 'uppercase', letterSpacing: '0.22em' }}>
                {p.kind} · {p.status}
              </div>
              <ExternalLink size={14} color={c.inkLight} />
            </div>
            <div className="font-display" style={{ fontSize: 19, color: c.ink, fontWeight: 500, lineHeight: 1.2, marginTop: 6, fontStyle: 'italic' }}>
              {p.title}
            </div>
            <p className="font-body" style={{ fontSize: 14, color: c.inkSoft, lineHeight: 1.5, marginTop: 6, marginBottom: 0 }}>
              {p.blurb}
            </p>
            {p.link.startsWith('#REPLACE') && (
              <div className="font-mono" style={{ fontSize: 9, color: c.coral, marginTop: 8, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                → Add real link
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );

  // ─────────────────────────────────────────────
  // ABOUT TAB
  // ─────────────────────────────────────────────
  const AboutTab = () => (
    <div className="anim-in" style={{ padding: '32px 22px 110px' }}>
      <TabHeader c={c} label="About" tagline="Background, roles, and how to reach me." color={c.indigo} />

      {/* Bio */}
      <div style={{ marginTop: 22 }}>
        <p className="font-body" style={{ fontSize: 15.5, color: c.ink, lineHeight: 1.65 }}>
          Amanda Richer is a displacement consultant, writer, and visual artist working at the intersections of
          homelessness policy, lived experience, and the <em>One Health</em> framework — an approach that treats
          human, animal, and environmental wellbeing as fundamentally interconnected.
        </p>
        <p className="font-body" style={{ fontSize: 15.5, color: c.ink, lineHeight: 1.65 }}>
          Her career was built over roughly eight years following lived experience of adult street homelessness,
          which she frames as foundational expertise rather than background detail. Her work moves across
          journalism, policy writing, governance, embedded consultancy, and visual practice — held together by
          a single orientation toward universal human rights.
        </p>
        <p className="font-body" style={{ fontSize: 15.5, color: c.ink, lineHeight: 1.65 }}>
          Her creative practice operates under the name <em>Manda J Artistry</em>. Visual work, writing, and
          policy work are not separate disciplines synthesized into a brand — they are expressions of the same
          orientation, in different languages.
        </p>
      </div>

      {/* Roles */}
      <div style={{ marginTop: 30 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 12 }}>
          Roles
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {aboutRoles.map((r, i) => (
            <li key={i} className="font-body" style={{
              fontSize: 14, color: c.ink, lineHeight: 1.45,
              padding: '10px 0',
              borderBottom: i < aboutRoles.length - 1 ? `1px solid ${c.line}` : 'none',
              display: 'flex', gap: 12,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.indigo, marginTop: 9, flexShrink: 0 }} />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Engagements */}
      <div style={{ marginTop: 30 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 12 }}>
          Selected Engagements
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {aboutEngagements.map((e, i) => (
            <li key={i} className="font-body" style={{
              fontSize: 14, color: c.ink, lineHeight: 1.45,
              padding: '10px 0',
              borderBottom: i < aboutEngagements.length - 1 ? `1px solid ${c.line}` : 'none',
            }}>
              {e}
            </li>
          ))}
        </ul>
      </div>

      {/* AI Working Standards */}
      <div style={{
        marginTop: 30,
        background: c.creamDeep,
        padding: '16px 18px',
        borderRadius: 12,
        borderLeft: `3px solid ${c.magenta}`,
      }}>
        <div className="font-mono" style={{ fontSize: 9, color: c.magenta, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 8 }}>
          AI Working Standards
        </div>
        <p className="font-body" style={{ fontSize: 14, color: c.ink, lineHeight: 1.55, margin: 0 }}>
          This site, and a portion of the work it documents, is produced in collaboration with AI tools used as
          cognitive accommodation. Final judgment, voice, and accountability remain with the author. Disclosure
          is part of the framework.
        </p>
      </div>

      {/* Contact */}
      <div style={{ marginTop: 30 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 12 }}>
          Contact
        </div>
        <a href="mailto:REPLACE@EMAIL.com"
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '14px 16px',
            background: c.cream,
            border: `1px solid ${c.line}`,
            borderRadius: 12,
            textDecoration: 'none', color: c.ink,
          }}>
          <Mail size={18} color={c.indigo} />
          <span className="font-body" style={{ fontSize: 14 }}>
            REPLACE@EMAIL.com
          </span>
        </a>
        <div className="font-mono" style={{ fontSize: 9, color: c.coral, marginTop: 8, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          → Add real email
        </div>
      </div>
    </div>
  );

  // ─────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────
  const renderTab = () => {
    switch (activeTab) {
      case 'nexus':       return <NexusTab />;
      case 'consultancy': return <ConsultancyTab />;
      case 'visual':      return <VisualTab />;
      case 'prose':       return <ProseTab />;
      case 'about':       return <AboutTab />;
      default:            return <NexusTab />;
    }
  };

  return (
    <div style={{ background: c.cream, minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{fontStack}</style>
      <div className="grain" />

      {/* main scroll area */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 480, margin: '0 auto',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}>
        {renderTab()}
      </div>

      {/* bottom sheet for ecomap */}
      <NodeSheet />

      {/* bottom nav */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: `${c.cream}f5`,
        backdropFilter: 'blur(12px)',
        borderTop: `1px solid ${c.line}`,
        zIndex: 40,
      }}>
        <div style={{
          maxWidth: 480, margin: '0 auto',
          display: 'flex', justifyContent: 'space-around',
          padding: '10px 8px 16px',
        }}>
          {tabs.map(t => {
            const active = activeTab === t.id;
            return (
              <button key={t.id}
                onClick={() => { setActiveTab(t.id); setExpandedCard(null); }}
                style={{
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
                  padding: '4px 6px',
                  color: active ? t.color : c.inkLight,
                  transition: 'color 0.2s ease',
                }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: active ? t.color : 'transparent',
                  border: active ? 'none' : `1px solid ${c.inkLight}`,
                  transition: 'all 0.2s ease',
                }} />
                <span className="font-mono"
                  style={{
                    fontSize: 10,
                    textTransform: 'uppercase',
                    letterSpacing: '0.16em',
                    fontWeight: active ? 500 : 400,
                  }}>
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
function Section({ c, label, body, accent }) {
  return (
    <div style={{ marginTop: 14 }}>
      <div className="font-mono" style={{ fontSize: 9, color: c.inkLight, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 6 }}>
        {label}
      </div>
      <div className="font-body" style={{ fontSize: 14.5, color: c.ink, lineHeight: 1.55, paddingLeft: 10, borderLeft: `2px solid ${accent}` }}>
        {body}
      </div>
    </div>
  );
}

function CardField({ c, label, body }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div className="font-mono" style={{ fontSize: 9, color: c.inkLight, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 4 }}>
        {label}
      </div>
      <div className="font-body" style={{ fontSize: 14, color: c.ink, lineHeight: 1.5 }}>
        {body}
      </div>
    </div>
  );
}

function TabHeader({ c, label, tagline, color }) {
  return (
    <div>
      <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 10 }}>
        Section · {label}
      </div>
      <h2 className="font-display" style={{
        margin: 0, fontSize: 36, fontWeight: 400, color: c.ink, letterSpacing: '-0.01em',
        fontStyle: 'italic',
      }}>
        {label}
      </h2>
      <div style={{ width: 40, height: 2, background: color, marginTop: 10, marginBottom: 14 }} />
      <p className="font-body" style={{ fontSize: 15, color: c.inkSoft, lineHeight: 1.55, margin: 0, maxWidth: 360 }}>
        {tagline}
      </p>
    </div>
  );
}
