import { useState, useEffect } from 'react';
import {
  X, ExternalLink, ChevronDown, Mail, Phone, Download,
  PenTool, Mic, GraduationCap, Smartphone, HeartPulse, Landmark, Palette,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('nexus');
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedThread, setSelectedThread] = useState(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // ─────────────────────────────────────────────
  // PALETTE  ·  watercolor + cream
  // ─────────────────────────────────────────────
  // Dark leadership theme — deep navy canvas, cream text, brass-gold accent.
  // The dark ground reads gallery-sophisticated, makes the photography and the
  // gold accents pop, and keeps navy-and-gold authority. Node tones are
  // brightened so they stay legible and vivid against the dark panels.
  const c = {
    cream: '#0E141F',      // content area / card / node fill (near-black, faint navy)
    creamDeep: '#141C2A',  // raised panel (ecomap card, etc.)
    creamShade: '#26303F', // tile gradient / subtle borders
    coral: '#D88C5A',      // bronze / amber (brightened)
    hotpink: '#D67E8A',    // rose
    magenta: '#A091D6',    // lilac
    teal: '#46A6B4',       // teal
    gold: '#DCB45C',       // brass gold accent
    indigo: '#6E97D6',     // steel blue (deep navy reads as this on dark)
    sage: '#93AC6E',       // olive
    ink: '#ECEFF4',        // primary light text
    inkSoft: '#B7C0D0',    // secondary text
    inkLight: '#828FA6',   // muted labels
    line: '#283442',       // hairline on near-black
    sidebarBg: '#080C14',  // deepest — sidebar / page frame (near-black)
    sidebarText: 'rgba(236,239,244,0.72)',
    sidebarActive: '#DCB45C', // gold
  };

  // ─────────────────────────────────────────────
  // ECOMAP DATA
  // ─────────────────────────────────────────────
  const nodes = [
    {
      id: 'writing', short: 'Writing', full: 'Writing & Journalism',
      angle: -90 + 2 * (360 / 7), color: c.coral, tabLink: 'writing', Icon: PenTool,
      what: 'Long-form essays, policy analysis, and reported journalism that translate systems-level patterns into public argument.',
      why: 'Writing makes structural harm visible to people who would never sit through a policy briefing.',
      where: 'Substack · Runta News (guest reporter) · op-eds · white papers',
      threads: ['ai', 'knowledge'],
      proof: [
        '"Served with a Side of Propaganda" — HUD\'s Housing First reversal',
        '"Historical Déjà Vu" — recycled mechanisms of oppression',
        'Guest reporting for Runta News (Somali & Muslim communities)',
      ],
      links: [
        { label: 'Read on Substack', url: 'https://amandaricher.substack.com' },
        { label: 'Runta News', url: 'https://runtanews.com' },
      ],
    },
    {
      id: 'speaking', short: 'Speaking', full: 'Public Speaking',
      angle: -90 + 3 * (360 / 7), color: c.hotpink, tabLink: 'governance', Icon: Mic,
      what: 'Plenaries, panels, and subject-matter-expert testimony at international, national, and local convenings — bringing lived experience into rooms that often exclude it.',
      why: 'Decisions about displaced people happen in rooms most never enter. I enter them, then bring the framing back.',
      where: 'UN · NHCHC · UNITAR · CSW70 · NAEH',
      threads: ['knowledge', 'climate', 'harmreduction', 'disability'],
      proof: [
        'UN Commission on the Status of Women (CSW70), 2025 · UNITAR',
        'USICH federal webinar "19 Strategies to Reduce Encampments" — ~2,000 registrants',
        'Featured by Invisible People, The Seattle Times (Project Homeless) & WABI-TV',
      ],
    },
    {
      id: 'teaching', short: 'Teaching', full: 'Training & Education',
      angle: -90 + 5 * (360 / 7), color: c.magenta, tabLink: 'courses', Icon: GraduationCap,
      what: 'Courses, workshops, and one-on-one mentorship for people new to advocacy, NGO staff, students, and researchers.',
      why: 'Knowledge transfer is how this work survives me. Mentorship is how it grows.',
      where: 'Free beginner courses · workshops · NAEH Advocacy Cohort · ShelterApp volunteers',
      threads: ['ai', 'knowledge', 'disability'],
      proof: [
        'Trainings for UW medical residents on serving displaced patients',
        'Rights World — a gamified human-rights learning platform (UDHR, SDGs, UN system)',
        'Four free beginner courses for advocates',
      ],
    },
    {
      id: 'tech', short: 'Tech', full: 'Tech for Good',
      angle: -90 + 6 * (360 / 7), color: c.teal, tabLink: 'tech', Icon: Smartphone,
      what: 'Co-creating tools and resource systems that reach people who fall outside the reach of conventional services.',
      why: 'Tools built without lived expertise repeat the failures of the systems they try to fix.',
      where: 'ShelterApp / OutreachApp (co-founder) · WA State resource database',
      threads: ['ai', 'animals', 'harmreduction'],
      proof: [
        'Co-founder, ShelterApp / OutreachApp',
        'Built a local automation program that sharply scaled how many services can be added',
        'Rights World human-rights education app',
      ],
      links: [
        { label: 'Visit ShelterApp', url: 'https://www.shelterapp.org' },
      ],
    },
    {
      id: 'onehealth', short: 'One Health', full: 'One Health',
      angle: -90, color: c.sage, tabLink: 'nexus', Icon: HeartPulse,
      what: 'Consultation and research support at the intersection of human, animal, and environmental health — including co-sheltering for people and their animals.',
      why: 'Health is shared. People, their animals, and their environments cannot be separated in policy without causing harm.',
      where: 'UW Center for One Health Research · One Health Clinic · PNW Co-Sheltering Working Group',
      threads: ['climate', 'animals', 'harmreduction'],
      proof: [
        'Co-author, peer-reviewed study of the One Health Clinic (J. Primary Care & Community Health, 2025)',
        'Consultant, UW Center for One Health Research',
        'PNW Co-Sheltering Working Group',
      ],
      links: [
        { label: 'Read the peer-reviewed paper', url: 'https://doi.org/10.1177/21501319251345973' },
      ],
    },
    {
      id: 'governance', short: 'Governance', full: 'Governance & Leadership',
      angle: -90 + (360 / 7), color: c.indigo, tabLink: 'governance', Icon: Landmark,
      what: 'Board, council, and committee leadership shaping policy and program direction across systems serving displaced and unhoused communities.',
      why: 'Governance is where direction gets set. Showing up there with lived expertise is non-negotiable.',
      where: 'UN NGO Working Group to End Homelessness (Executive Committee; former Chair, Member State Outreach) · NHCHC Board · Chair, SPU Consumer Review Panel · Housing Narrative Lab',
      threads: ['climate', 'animals', 'disability'],
      proof: [
        'Executive Committee, UN NGO Working Group to End Homelessness (ECOSOC-accredited)',
        'Authored outreach to UN Permanent Missions toward the High-Level Political Forum 2026',
        'Board Member & Co-Chair, Ellen Dailey Advocacy Committee (NHCHC)',
        'Chair, Seattle Public Utilities Consumer Review Panel',
      ],
    },
    {
      id: 'art', short: 'Art', full: 'Visual Practice',
      angle: -90 + 4 * (360 / 7), color: c.gold, tabLink: 'art', Icon: Palette,
      what: 'Photography and painting — documentary street work alongside fine-art landscape and wildlife.',
      why: 'Image makes legible what argument cannot. The visual practice and the policy practice are the same orientation, in different languages.',
      where: 'Documentary photography · paintings · commissions',
      threads: ['knowledge'],
      proof: [
        'Documentary photography of people experiencing homelessness and their animals',
        'Fine-art landscape, macro, and original painting — prints and originals available',
      ],
    },
  ];

  // Each thread carries a one-line "throughline" — the argument that these
  // separate-looking practices are one orientation. Surfaced when a thread is tapped.
  const threads = [
    { id: 'ai',            label: 'AI',                             color: c.magenta,
      line: 'AI is a tool I command across the work — building resource platforms and learning games, and accelerating research, analysis, and content.' },
    { id: 'knowledge',     label: 'Knowledge Transfer',            color: c.gold,
      line: 'None of this survives if it stays with me. Knowledge transfer runs through the teaching, speaking, writing, and visual work.' },
    { id: 'climate',       label: 'Climate & Environment',         color: c.sage,
      line: 'Displacement, health, and the environment are one system — climate, contaminants, and disasters shape who ends up unhoused and who recovers.' },
    { id: 'animals',       label: 'Animals & Co-Sheltering',       color: c.teal,
      line: 'People and their animals are inseparable, so the work is too — from One Health research to the tools and governance that make pet-inclusive shelter real.' },
    { id: 'harmreduction', label: 'Harm Reduction',                color: c.hotpink,
      line: 'Meeting people where they are, without conditions — harm reduction runs through the health work, the policy, and the tools I build.' },
    { id: 'disability',    label: 'Disability Advocacy & Education', color: c.indigo,
      line: 'Disability — including brain injury — is everywhere in homelessness and rarely designed for. I teach it, speak it, and push governance to accommodate it.' },
  ];

  // ─────────────────────────────────────────────
  // TAB CONFIG
  // ─────────────────────────────────────────────
  const tabs = [
    { id: 'nexus',      label: 'Nexus',      color: c.teal },
    { id: 'governance', label: 'Governance', color: c.indigo },
    { id: 'writing',    label: 'Writing',    color: c.magenta },
    { id: 'art',        label: 'Art',        color: c.gold },
    { id: 'courses',    label: 'Courses',    color: c.sage },
    { id: 'tech',       label: 'Tech',       color: c.coral },
    { id: 'about',      label: 'About',      color: c.hotpink },
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

  // Consultant positions — surfaced in the Nexus intro (all of Amanda's
  // current work is consultancy, so it lives with the introduction).
  const consultantPositions = [
    {
      id: 'uw',
      title: 'UW Center for One Health Research',
      role: 'Displacement Consultant',
      years: '2018 — Present',
      what: 'Guide researchers working with displaced populations, review materials designed for unhoused communities, and build pathways between UW and King County service providers.',
    },
    {
      id: 'shelterapp',
      title: 'ShelterApp / OutreachApp',
      role: 'Co-Founder',
      years: '2018 — Present',
      what: 'Co-founded a national website and app that removes barriers to resources; continue to guide platform strategy and the Washington State resource database.',
    },
    {
      id: 'spu',
      title: 'Seattle Public Utilities — Consumer Review Panel',
      role: 'Chair (formerly Co-Chair)',
      years: 'Present',
      what: 'Chair the panel that advises the utility’s work and its presence within the communities it serves.',
    },
  ];

  // ─────────────────────────────────────────────
  // TECH & DIGITAL PRACTICE
  // Proof of proficiency directing AI tools to ship real software.
  // ─────────────────────────────────────────────
  const techTools = [
    'Claude · Claude Code', 'Base44', 'React + Vite',
    'Firebase', 'Cloudflare Pages', 'Netlify', 'Stripe', 'Playwright',
  ];

  // Verified projects come first; the three `draft` entries below need Amanda's
  // details (exact names, one-line descriptions, links) before publishing.
  const techProjects = [
    {
      kind: 'Web App',
      title: 'This site — portfolio & interactive ecomap',
      blurb: 'A React single-page app I directed and shipped end-to-end: the interactive ecomap that argues the through-line of my work, deployed live.',
      tools: ['Claude Code', 'React + Vite', 'Cloudflare Pages'],
      proof: [
        'Designed the interactive "one orientation, seven practices" ecomap',
        'Built, tested, and deployed live to Cloudflare Pages',
      ],
      link: { label: 'You’re looking at it', url: 'https://amanda-richer-portfolio-git.pages.dev' },
    },
    {
      kind: 'Automation Agent',
      title: 'ShelterApp — WA resource database & audit agent',
      blurb: 'A local automation program I built that scans public data, adds missing resources, and audits existing listings across a national homeless-services directory — sharply increasing how many services the team can add and verify.',
      tools: ['Claude Code', 'Python', 'Playwright'],
      proof: [
        'Dramatically increased the team’s capacity to add and verify services',
        'Add + audit across 30,000+ national listings, and growing, with duplicate-safety',
        'Fuzzy entity-matching + geocoding over open data (HRSA, OpenStreetMap)',
        'Designed the platform’s early empathetic chatbot (2019) — empathy built into the response logic, not just the wording',
      ],
      link: { label: 'Visit ShelterApp', url: 'https://www.shelterapp.org' },
    },
    {
      kind: 'Real-time App',
      title: 'PNW Co-Sheltering ecomap',
      blurb: 'A live, multi-user relationship map for a multi-state working group — everyone edits one shared map and changes sync instantly.',
      tools: ['Claude Code', 'React', 'Firebase'],
      proof: [
        'Real-time sync via Firestore with anonymous auth',
        'Built for the PNW Co-Sheltering Working Group',
      ],
      link: { label: 'Open the live map', url: 'https://verdant-empanada-2e484f.netlify.app/' },
    },
    {
      kind: 'Learning Platform',
      title: 'Rights-Based Practice course platform',
      blurb: 'A full self-paced course platform — courses with a checkout flow, a bundle, and completion certificates.',
      tools: ['Claude Code', 'Netlify', 'Stripe'],
      proof: [
        'Seven courses with paywall, bundle, and PDF certificates',
        'Built end-to-end; preparing to launch',
      ],
    },
    {
      kind: 'Interactive Simulation',
      badge: 'Base44',
      title: 'End Homelessness',
      blurb: 'A policy-simulation game: players run a city’s housing levers — development permits, budgets, ordinances — and watch the human consequences unfold. The choice it poses: prioritize profit, or dismantle the barriers to housing.',
      tools: ['Base44'],
      link: { label: 'Play End Homelessness', url: 'https://shift-structural-systems.base44.app' },
    },
    {
      kind: 'Learning Platform',
      badge: 'Base44 · Do Good Initiative',
      title: 'Rights World',
      blurb: 'A gamified platform for mastering the Universal Declaration of Human Rights and the UN Sustainable Development Goals through trivia, simulations, and matching games. Selected for the Base44 Do Good Initiative.',
      tools: ['Base44'],
      link: { label: 'Open Rights World', url: 'https://rights-world.base44.app' },
    },
    {
      kind: 'Policy Modeling Tool',
      title: 'Kent WA Harm Reduction Ban Simulation',
      blurb: 'A policy-impact model projecting the public-health, economic, and population effects of a hypothetical 24-month harm-reduction services ban in Kent, WA. Users adjust parameters — naloxone access, treatment expansion, and more — to see effects on overdose deaths, new HIV/HCV cases, and community costs.',
      tools: ['Claude Code', 'Netlify'],
      proof: [
        'Built on King County baseline data + peer-reviewed harm-reduction literature',
        'Models outcomes for both the drug-using population and broader community (EMS, child welfare, workforce)',
      ],
      link: { label: 'Open the simulation', url: 'https://kentharm.netlify.app/' },
    },
  ];

  // Free beginner courses — hosted in /public/courses/.
  const courseList = [
    { slug: 'being-valued', title: 'Being Valued, Not Just Visible', blurb: 'The difference between being included and being used — and what fair value actually looks like.' },
    { slug: 'trauma-informed-care', title: 'Trauma-Informed Care, In Everyday Life', blurb: 'What trauma actually does, and how to treat people — including yourself — with that in mind.' },
    { slug: 'lived-experience-to-advocacy', title: 'Lived Experience to Effective Advocacy', blurb: 'Housing is a right, not a report card — turning what you already know into change.' },
    { slug: 'speaking-up-for-yourself', title: 'Speaking Up for Yourself, Without Fighting Your Own Body', blurb: 'Self-advocacy that works with your nervous system, not against it.' },
  ];

  const educationItems = [
    { kind: 'Resources', text: 'Plain-language explainers on federal policy (OBBBA, FY27 budget, Medicaid changes) accessible to mixed audiences — advocates, frontline workers, and directly impacted people.' },
    { kind: 'Trainings', text: 'Workshops and presentations at UW, NHCHC and NAEH conferences, UNITAR. Topics include displacement systems, One Health framing, and lived-experience-led research.' },
    { kind: 'Mentorship', text: 'One-on-one mentorship for ShelterApp volunteers, NAEH Advocacy Cohort members, and people new to lived-experience advocacy.' },
  ];

  const proseItems = [
    {
      id: 'propaganda',
      title: 'Served with a Side of Propaganda',
      kind: 'Policy analysis',
      blurb: 'Reading the rhetoric behind HUD’s $4.04 billion reversal of Housing First.',
      status: 'Substack',
      link: 'https://amandaricher.substack.com/p/served-with-a-side-of-propaganda',
    },
    {
      id: 'cruelty',
      title: 'Celebration of Cruelty',
      kind: 'Analysis',
      blurb: 'How the Point-in-Time count’s narrative diverges from the reality of homelessness.',
      status: 'Substack',
      link: 'https://amandaricher.substack.com/p/celebration-of-cruelty',
    },
    {
      id: 'dejavu',
      title: 'Historical Déjà Vu',
      kind: 'Essay series',
      blurb: 'Recycled history, homelessness, and poverty — the refurbished mechanisms of oppression. (Two parts.)',
      status: 'Parts 1 & 2',
      link: 'https://amandaricher.substack.com/p/historical-deja-vu',
    },
    {
      id: 'sharedhealth',
      title: 'When Health Is Shared',
      kind: 'Essay',
      blurb: 'One Health, homelessness, and the animals who come with — the human–animal bond on the street.',
      status: 'Substack',
      link: 'https://amandaricher.substack.com/p/when-health-is-shared',
    },
    {
      id: 'inbetween',
      title: 'The In-Between',
      kind: 'Essay',
      blurb: 'Reclaiming human worth in the rising age of automation.',
      status: 'Substack',
      link: 'https://amandaricher.substack.com/p/the-in-between',
    },
    {
      id: 'runta',
      title: 'Runta News reporting',
      kind: 'Journalism',
      blurb: 'Reporting at the intersection of displacement, community health, and human rights for a multimedia outlet serving Somali and Muslim communities.',
      status: 'Ongoing',
      link: 'https://runtanews.com',
    },
  ];

  const aboutEngagements = [
    'CSW70 — UN Commission on the Status of Women (presenter)',
    'UNITAR — United Nations Institute for Training and Research (presenter)',
    'NHCHC Annual Conference (presenter)',
    'NAEH National Conference on Ending Homelessness (presenter)',
    'University of Washington research presentations',
  ];

  const governanceRoles = [
    {
      org: 'UN NGO Working Group to End Homelessness',
      role: 'Executive Committee · Former Chair, Member State Outreach',
      years: '2022 — Present',
      note: 'Serve on the Executive, Advocacy, and VNR sub-committees of a ~30-org ECOSOC-accredited coalition; authored outreach to UN Permanent Missions toward HLPF 2026.',
    },
    {
      org: 'National Health Care for the Homeless Council',
      role: 'Board Member · Co-Chair, Ellen Dailey Advocacy Committee',
      years: '2025 — Present',
      note: 'National board governance; co-chair the consumer- and lived-experience-led advocacy body; NCAB Steering Committee.',
    },
    {
      org: 'Seattle Public Utilities',
      role: 'Chair, Consumer Review Panel',
      years: 'Present',
      note: 'Chair the panel advising the utility’s work and presence within communities.',
    },
    {
      org: 'Housing Narrative Lab',
      role: 'Advisory Board',
      years: 'Present',
      note: 'Advise on narrative strategies to end homelessness.',
    },
    {
      org: 'Seattle/King County Health Care for the Homeless Network',
      role: 'Former Chair, Governance Council',
      years: '2022 — 2023',
      note: 'Chaired the governance council for the regional Health Care for the Homeless network.',
    },
  ];

  // Art tab. Hero portrait opens the human–animal theme personally; the
  // documentary series carries it into the field; then sellable prints and
  // original paintings. Files live in public/photos/.
  const heroPhoto = { src: '/photos/son-cat.jpg', title: 'Companion', meta: 'Street portrait · Seattle', pos: 'center 20%' };

  const artSections = [
    {
      id: 'series',
      eyebrow: 'Documentary Series',
      title: 'The Ones Who Stay',
      statement: 'An ongoing series on the people I work among and the animals who stay beside them through homelessness — the same refusal to look away that drives the policy work. Not for sale.',
      photos: [
        { src: '/photos/seeking-kindness.jpg', title: 'Seeking Kindness', meta: 'Seattle' },
        { src: '/photos/woman-dog.jpg',        title: 'Shared Bowl',      meta: 'Seattle' },
        { src: '/photos/underpass.jpg',        title: 'Homeward',         meta: 'Seattle' },
      ],
    },
    {
      id: 'prints',
      eyebrow: 'Prints Available',
      title: 'Landscape & Nature',
      statement: 'Macro, landscape, and wildlife — available as prints.',
      photos: [
        { src: '/photos/lavender.jpg',    title: 'Lavender & Bee', meta: 'Macro' },
        { src: '/photos/arizona.jpg',     title: 'Desert Bloom', meta: 'Arizona' },
        { src: '/photos/glacier-bay.jpg', title: 'Glacier Bay',  meta: 'Alaska' },
        { src: '/photos/wood-duck.jpg',   title: 'Still Water',  meta: 'Reflection' },
      ],
    },
    {
      id: 'paintings',
      eyebrow: 'Original Work',
      title: 'Paintings',
      statement: 'Original paintings on canvas.',
      photos: [
        { src: '/photos/painting-pockets.jpg', title: 'Pockets',        meta: 'Original painting' },
        { src: '/photos/painting-field.jpg',   title: 'Harvest Light',  meta: 'Original painting' },
        { src: '/photos/painting-cherry.jpg',  title: 'First Bloom',    meta: 'Original painting' },
      ],
    },
  ];

  // ─────────────────────────────────────────────
  // FONTS + GLOBAL STYLE
  // ─────────────────────────────────────────────
  const fontStack = `
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@300;400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; overflow-x: hidden; width: 100%; background: ${c.sidebarBg}; }

    .font-display { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
    .font-body    { font-family: 'Spectral', Georgia, serif; }
    .font-mono    { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.14em; }

    .grain {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        radial-gradient(circle at 18% 14%, rgba(46,80,130,0.10), transparent 38%),
        radial-gradient(circle at 82% 22%, rgba(220,180,92,0.07), transparent 42%),
        radial-gradient(circle at 24% 78%, rgba(70,166,180,0.07), transparent 44%),
        radial-gradient(circle at 78% 80%, rgba(46,61,94,0.10), transparent 40%);
      mix-blend-mode: screen;
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

    @keyframes ringPulse {
      0%        { transform: scale(1);   opacity: 0.45; }
      70%, 100% { transform: scale(1.3); opacity: 0;    }
    }

    button { -webkit-tap-highlight-color: transparent; }
    a { color: inherit; }
  `;

  // ─────────────────────────────────────────────
  // ECOMAP RENDERER
  // ─────────────────────────────────────────────
  const Ecomap = () => {
    const cx = 200, cy = 230;
    const r = 150;          // orbit radius
    const nodeR = 50;       // node circle radius — sized so nodes never touch

    const sel = selectedNode ? nodes.find(n => n.id === selectedNode) : null;
    const selThread = selectedThread ? threads.find(t => t.id === selectedThread) : null;
    const idle = !sel && !selThread;
    const activeThreadIds = selThread ? [selThread.id] : (sel ? sel.threads : []);
    const nodeOn = (n) => selThread ? n.threads.includes(selThread.id) : (sel ? sel.id === n.id : true);

    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <svg viewBox="-30 -6 460 474" style={{ width: '100%', height: 'auto', display: 'block' }}>
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
            const on = nodeOn(n);
            const strokeColor = selThread ? selThread.color : n.color;
            let op = 0.32, w = 1, dash = '2 4';
            if (selThread) { op = on ? 0.8 : 0.06; w = on ? 2 : 1; dash = on ? 'none' : '2 4'; }
            else if (sel) { op = sel.id === n.id ? 0.55 : 0.1; w = sel.id === n.id ? 2 : 1; dash = sel.id === n.id ? 'none' : '2 4'; }
            return (
              <line key={`spoke-${n.id}`}
                x1={cx} y1={cy} x2={x} y2={y}
                stroke={strokeColor} strokeWidth={w} strokeOpacity={op}
                strokeDasharray={dash}
                style={{ transition: 'stroke-opacity 0.35s ease, stroke-width 0.35s ease' }} />
            );
          })}

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
          {nodes.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const x = cx + r * Math.cos(rad);
            const y = cy + r * Math.sin(rad);
            const on = nodeOn(n);
            const isSelected = sel && sel.id === n.id;
            const dim = !idle && !on;
            const op = dim ? 0.2 : 1;
            const NodeIcon = n.Icon;
            const labelSize = n.short.length > 9 ? 11 : 13;
            return (
              <g key={n.id}
                onClick={() => { setSelectedNode(n.id); setSelectedThread(null); }}
                style={{ cursor: 'pointer' }}>
                <circle cx={x} cy={y} r={nodeR + 16} fill={`url(#halo-${n.id})`}
                  opacity={dim ? 0.12 : 1} style={{ transition: 'opacity 0.35s ease' }} />
                {idle && (
                  <circle cx={x} cy={y} r={nodeR} fill="none" stroke={n.color} strokeWidth="2"
                    style={{ transformOrigin: `${x}px ${y}px`, animation: `ringPulse 2.8s ease-out ${i * 0.3}s infinite`, pointerEvents: 'none' }} />
                )}
                {selThread && on && (
                  <circle cx={x} cy={y} r={nodeR + 7} fill="none"
                    stroke={selThread.color} strokeWidth="2" strokeOpacity="0.9"
                    style={{ pointerEvents: 'none' }} />
                )}
                <circle cx={x} cy={y} r={nodeR}
                  fill={c.cream}
                  stroke={n.color}
                  strokeWidth={isSelected ? 3 : 2}
                  opacity={op}
                  style={{ transition: 'opacity 0.35s ease' }}
                />
                {/* symbol above the label */}
                <foreignObject x={x - 14} y={y - 30} width={28} height={28}
                  style={{ overflow: 'visible', pointerEvents: 'none', opacity: op, transition: 'opacity 0.35s ease' }}>
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <NodeIcon size={22} color={n.color} strokeWidth={1.75} />
                  </div>
                </foreignObject>
                <text x={x} y={y + 22} textAnchor="middle"
                  style={{ fontSize: labelSize, fontFamily: 'Spectral, Georgia, serif', fontStyle: 'italic', fontWeight: 600, pointerEvents: 'none', transition: 'opacity 0.35s ease' }}
                  fill={n.color}
                  opacity={op}>
                  {n.short}
                </text>
              </g>
            );
          })}
        </svg>

        {/* foundation caption — clean, replaces the old dashed arc */}
        <div className="font-mono" style={{
          textAlign: 'center', fontSize: 9, color: c.inkLight,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          margin: '2px 0 14px',
        }}>
          Foundation · Frontline Expertise
        </div>

        {/* threads chips */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 6,
          padding: '4px 16px 0', justifyContent: 'center',
        }}>
          {threads.map(t => {
            const active = activeThreadIds.includes(t.id);
            return (
              <button key={t.id} className="font-mono"
                onClick={() => { setSelectedThread(selectedThread === t.id ? null : t.id); setSelectedNode(null); }}
                style={{
                  fontSize: 9,
                  textTransform: 'uppercase',
                  padding: '5px 10px',
                  borderRadius: 999,
                  cursor: 'pointer',
                  background: active ? t.color : 'transparent',
                  color: active ? c.sidebarBg : c.inkLight,
                  border: `1px solid ${active ? t.color : c.line}`,
                  transition: 'all 0.25s ease',
                  letterSpacing: '0.18em',
                  fontWeight: active ? 600 : 400,
                }}>
                {t.label}
              </button>
            );
          })}
        </div>

        {/* throughline narrative when a thread is selected */}
        {selThread && (
          <div style={{
            marginTop: 14, maxWidth: 440, marginLeft: 'auto', marginRight: 'auto',
            padding: '12px 16px', background: c.creamDeep, borderRadius: 12,
            borderLeft: `3px solid ${selThread.color}`,
          }}>
            <div className="font-mono" style={{
              fontSize: 9, color: selThread.color, textTransform: 'uppercase',
              letterSpacing: '0.2em', marginBottom: 6,
            }}>
              {selThread.label} · the through-line
            </div>
            <div className="font-body" style={{ fontSize: 14, color: c.ink, lineHeight: 1.5, fontStyle: 'italic' }}>
              {selThread.line}
            </div>
          </div>
        )}

        {/* hint when nothing selected */}
        {idle && (
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <span className="font-mono" style={{
              display: 'inline-block',
              fontSize: 10, color: c.sidebarBg, background: c.gold,
              padding: '7px 15px', borderRadius: 999,
              letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600,
            }}>
              Tap a practice — or a thread to trace it
            </span>
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
              color: n.color, fontFamily: 'Spectral, serif', fontStyle: 'italic', fontSize: 13,
            }}>
              {n.short.slice(0,2)}
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

          {/* proof */}
          {n.proof && (
            <div style={{ marginTop: 18 }}>
              <div className="font-mono" style={{ fontSize: 9, color: c.inkLight, marginBottom: 8, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Proof
              </div>
              {n.proof.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 9, marginBottom: 7 }}>
                  <span style={{ flexShrink: 0, marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: n.color }} />
                  <span className="font-body" style={{ fontSize: 13.5, color: c.ink, lineHeight: 1.45 }}>{p}</span>
                </div>
              ))}
            </div>
          )}

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

          {/* find out more — external links */}
          {n.links && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
              {n.links.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="font-mono"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: n.color, textDecoration: 'none',
                    border: `1px solid ${n.color}`, borderRadius: 999, padding: '8px 14px',
                  }}>
                  {l.label}
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
          )}

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
    <div className="anim-in" style={{ padding: '32px 22px 110px', maxWidth: 700, margin: '0 auto' }}>
      <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 10 }}>
        Seattle, WA · She / Her
      </div>
      <h1 className="font-display" style={{
        margin: 0, fontSize: 44, lineHeight: 1.02, fontWeight: 400, color: c.ink, letterSpacing: '-0.01em',
      }}>
        Amanda<br />
        <span style={{ fontStyle: 'italic', color: c.gold }}>Richer</span>
      </h1>
      <p className="font-body" style={{
        marginTop: 12, fontSize: 17, color: c.inkSoft, lineHeight: 1.5, maxWidth: 400,
      }}>
        Displacement consultant. Writer. UN civil-society representative.
        I carry what I know from the frontline into research, policy, and the United
        Nations — and bring the framing back.
      </p>

      {/* CREDIBILITY STRIP — flag the headline proof up front */}
      <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {[
          'Peer-reviewed co-author',
          'UN NGO Working Group · Executive Committee',
        ].map((item, i) => (
          <div key={i} className="font-mono" style={{
            fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1.3,
            color: c.ink, background: c.creamDeep, border: `1px solid ${c.line}`,
            borderLeft: `2px solid ${c.gold}`, borderRadius: 8, padding: '9px 12px',
          }}>
            {item}
          </div>
        ))}
      </div>

      {/* ECOMAP */}
      <div style={{
        marginTop: 48,
        background: c.creamDeep,
        borderRadius: 16,
        padding: '28px 16px 20px',
        border: `1px solid ${c.creamShade}`,
      }}>
        <div className="font-mono" style={{
          fontSize: 10, color: c.inkLight, letterSpacing: '0.28em',
          textTransform: 'uppercase', marginBottom: 4, textAlign: 'center',
        }}>
          The Work
        </div>
        <div className="font-display" style={{
          fontSize: 20, color: c.ink, fontStyle: 'italic',
          textAlign: 'center', marginBottom: 8, fontWeight: 400,
        }}>
          One orientation, seven practices.
        </div>
        <div style={{ maxWidth: 420, margin: '0 auto' }}>
          <Ecomap />
        </div>
      </div>

      {/* CONSULTANCY — current engagements */}
      <div style={{ marginTop: 40 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 12 }}>
          Current Engagements
        </div>
        {consultantPositions.map((p) => (
          <div key={p.id} style={{
            background: c.cream, border: `1px solid ${c.line}`, borderRadius: 14,
            padding: '16px', marginBottom: 10, borderLeft: `3px solid ${c.gold}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
              <div className="font-mono" style={{ fontSize: 9, color: c.gold, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                {p.role}
              </div>
              <div className="font-mono" style={{ fontSize: 9, color: c.inkLight, letterSpacing: '0.12em', flexShrink: 0 }}>
                {p.years}
              </div>
            </div>
            <div className="font-display" style={{ fontSize: 17, color: c.ink, fontWeight: 500, lineHeight: 1.2, marginTop: 4 }}>
              {p.title}
            </div>
            <p className="font-body" style={{ fontSize: 13.5, color: c.inkSoft, lineHeight: 1.5, margin: '6px 0 0' }}>
              {p.what}
            </p>
          </div>
        ))}
      </div>

      {/* CURRENTLY — active projects */}
      <div style={{ marginTop: 34 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 12 }}>
          Currently
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {currentlyItems.map((item, i) => (
            <li key={i} className="font-body" style={{
              fontSize: 14, color: c.ink, lineHeight: 1.45,
              padding: '10px 0',
              borderBottom: i < currentlyItems.length - 1 ? `1px solid ${c.line}` : 'none',
              display: 'flex', gap: 12,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.teal, marginTop: 9, flexShrink: 0 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* COURSES & LEARNING HIGHLIGHT */}
      <button
        onClick={() => setActiveTab('courses')}
        style={{
          display: 'block', width: '100%', textAlign: 'left', cursor: 'pointer',
          marginTop: 34,
          background: `linear-gradient(135deg, ${c.creamDeep}, ${c.cream})`,
          border: `1.5px solid ${c.gold}`,
          borderRadius: 16, padding: '22px 22px',
        }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <GraduationCap size={26} color={c.gold} strokeWidth={1.75} style={{ flexShrink: 0 }} />
          <div className="font-mono" style={{ fontSize: 9, color: c.gold, textTransform: 'uppercase', letterSpacing: '0.22em' }}>
            Teaching &amp; Courses
          </div>
        </div>
        <div className="font-display" style={{ fontSize: 21, color: c.ink, fontWeight: 500, fontStyle: 'italic', lineHeight: 1.15 }}>
          Learning built for advocates — free, and beyond.
        </div>
        <div className="font-body" style={{ fontSize: 14, color: c.inkSoft, marginTop: 6, lineHeight: 1.5 }}>
          Four free beginner courses, live now — plus a seven-course Rights-Based Practice platform and Rights World, my gamified human-rights learning app.
        </div>
        <div className="font-mono" style={{ fontSize: 10, color: c.gold, textTransform: 'uppercase', letterSpacing: '0.18em', marginTop: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
          Explore courses <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
        </div>
      </button>
    </div>
  );

  // ─────────────────────────────────────────────
  // GOVERNANCE & LEADERSHIP TAB
  // ─────────────────────────────────────────────
  const GovernanceTab = () => (
    <div className="anim-in" style={{ padding: '32px 22px 110px', maxWidth: 700, margin: '0 auto' }}>
      <TabHeader c={c} label="Governance & Leadership" tagline="Board, council, and committee leadership shaping how systems serve displaced and unhoused communities." color={c.indigo} />

      <div style={{ marginTop: 28 }}>
        {governanceRoles.map((g, i) => (
          <div key={i} style={{
            background: c.cream, border: `1px solid ${c.line}`, borderRadius: 14,
            padding: '16px', marginBottom: 10, borderLeft: `3px solid ${c.indigo}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
              <div className="font-mono" style={{ fontSize: 9, color: c.indigo, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                {g.role}
              </div>
              <div className="font-mono" style={{ fontSize: 9, color: c.inkLight, letterSpacing: '0.12em', flexShrink: 0 }}>
                {g.years}
              </div>
            </div>
            <div className="font-display" style={{ fontSize: 17, color: c.ink, fontWeight: 500, lineHeight: 1.2, marginTop: 4 }}>
              {g.org}
            </div>
            <p className="font-body" style={{ fontSize: 13.5, color: c.inkSoft, lineHeight: 1.5, margin: '6px 0 0' }}>
              {g.note}
            </p>
          </div>
        ))}
      </div>

      {/* Selected Engagements */}
      <div style={{ marginTop: 38 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 12 }}>
          Selected Engagements
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {aboutEngagements.map((e, i) => (
            <li key={i} className="font-body" style={{
              fontSize: 14, color: c.ink, lineHeight: 1.45,
              padding: '10px 0',
              borderBottom: i < aboutEngagements.length - 1 ? `1px solid ${c.line}` : 'none',
              display: 'flex', gap: 12,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.indigo, marginTop: 9, flexShrink: 0 }} />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // ─────────────────────────────────────────────
  // COURSES & RESOURCES TAB
  // ─────────────────────────────────────────────
  const CoursesTab = () => (
    <div className="anim-in" style={{ padding: '32px 22px 110px', maxWidth: 700, margin: '0 auto' }}>
      <TabHeader c={c} label="Courses & Resources" tagline="Free beginner courses for people new to advocacy — and the people who walk alongside them." color={c.sage} />

      <div style={{ marginTop: 16, marginBottom: 8 }}>
        <span className="font-mono" style={{
          fontSize: 9, color: c.sage, textTransform: 'uppercase', letterSpacing: '0.2em',
          border: `1px solid ${c.sage}`, borderRadius: 999, padding: '4px 10px',
        }}>
          Beginner Series · Free
        </span>
      </div>

      <div style={{ marginTop: 14 }}>
        {courseList.map((course, i) => (
          <a key={course.slug}
            href={`/courses/${course.slug}.html`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block', background: c.cream, border: `1px solid ${c.line}`,
              borderRadius: 14, padding: '16px', marginBottom: 10, textDecoration: 'none',
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
              <div className="font-mono" style={{ fontSize: 9, color: c.sage, textTransform: 'uppercase', letterSpacing: '0.22em' }}>
                Course {i + 1} · Free
              </div>
              <ExternalLink size={14} color={c.inkLight} />
            </div>
            <div className="font-display" style={{ fontSize: 18, color: c.ink, fontWeight: 500, lineHeight: 1.2, marginTop: 6, fontStyle: 'italic' }}>
              {course.title}
            </div>
            <p className="font-body" style={{ fontSize: 14, color: c.inkSoft, lineHeight: 1.5, marginTop: 6, marginBottom: 0 }}>
              {course.blurb}
            </p>
          </a>
        ))}
      </div>

      {/* Beyond the courses */}
      <div style={{ marginTop: 38 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 14 }}>
          Workshops & Mentorship
        </div>
        {educationItems.map((e, i) => (
          <div key={i} style={{
            background: c.creamDeep, padding: '14px 16px', borderRadius: 12,
            marginBottom: 10, borderLeft: `3px solid ${c.sage}`,
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
  const ArtTab = () => (
    <div className="anim-in" style={{ padding: '32px 22px 110px', maxWidth: 700, margin: '0 auto' }}>
      <TabHeader c={c} label="Art" tagline="Original photography and painting." color={c.gold} />

      <p className="font-body" style={{
        fontSize: 15, color: c.inkSoft, lineHeight: 1.55, marginTop: 18,
      }}>
        Documentary work alongside fine-art landscape, macro, and original painting — the same
        orientation as the policy practice, in a different language: attention turned toward the
        people and places the frame usually leaves out.
      </p>

      {/* hero portrait */}
      <figure style={{
        margin: '26px 0 0', borderRadius: 14, overflow: 'hidden',
        border: `1px solid ${c.line}`, background: c.creamDeep, position: 'relative',
      }}>
        <img src={heroPhoto.src} alt={heroPhoto.title} loading="lazy"
          style={{ display: 'block', width: '100%', height: 360, objectFit: 'cover', objectPosition: heroPhoto.pos || 'center' }} />
        <figcaption style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, padding: '30px 16px 12px',
          background: 'linear-gradient(to top, rgba(8,12,20,0.85), transparent)',
        }}>
          <div className="font-display" style={{ fontSize: 19, color: '#F2EFE9', fontStyle: 'italic', lineHeight: 1.1 }}>
            {heroPhoto.title}
          </div>
          <div className="font-mono" style={{ fontSize: 8, color: 'rgba(242,239,233,0.82)', textTransform: 'uppercase', letterSpacing: '0.16em', marginTop: 4 }}>
            {heroPhoto.meta}
          </div>
        </figcaption>
      </figure>

      {/* sections: series · prints · paintings */}
      {artSections.map((section) => (
        <div key={section.id} style={{ marginTop: 34 }}>
          <div className="font-mono" style={{ fontSize: 9, color: c.gold, textTransform: 'uppercase', letterSpacing: '0.24em', marginBottom: 6 }}>
            {section.eyebrow}
          </div>
          <div className="font-display" style={{ fontSize: 23, color: c.ink, fontStyle: 'italic', fontWeight: 500, lineHeight: 1.12 }}>
            {section.title}
          </div>
          <p className="font-body" style={{ fontSize: 13.5, color: c.inkSoft, lineHeight: 1.55, margin: '8px 0 0', maxWidth: 520 }}>
            {section.statement}
          </p>
          <div style={{ marginTop: 14, columnCount: 2, columnGap: 12 }}>
            {section.photos.map((p) => (
              <figure key={p.src} style={{
                margin: '0 0 12px', breakInside: 'avoid', borderRadius: 12, overflow: 'hidden',
                border: `1px solid ${c.line}`, background: c.creamDeep, position: 'relative',
              }}>
                <img src={p.src} alt={p.title} loading="lazy"
                  style={{ display: 'block', width: '100%', height: 'auto' }} />
                <figcaption style={{
                  position: 'absolute', left: 0, right: 0, bottom: 0, padding: '20px 12px 9px',
                  background: 'linear-gradient(to top, rgba(8,12,20,0.82), transparent)',
                }}>
                  <div className="font-display" style={{ fontSize: 15, color: '#F2EFE9', fontStyle: 'italic', lineHeight: 1.1 }}>
                    {p.title}
                  </div>
                  <div className="font-mono" style={{ fontSize: 8, color: 'rgba(242,239,233,0.8)', textTransform: 'uppercase', letterSpacing: '0.16em', marginTop: 3 }}>
                    {p.meta}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
      {/* portfolio + inquiry */}
      <div style={{
        marginTop: 36, padding: '18px 20px',
        background: c.creamDeep, border: `1px solid ${c.line}`, borderRadius: 14,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 16, flexWrap: 'wrap',
      }}>
        <div style={{ flex: '1 1 240px' }}>
          <div className="font-mono" style={{ fontSize: 9, color: c.gold, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 5 }}>
            Prints, Originals & Sessions
          </div>
          <div className="font-body" style={{ fontSize: 14, color: c.inkSoft, lineHeight: 1.5 }}>
            A portfolio of original photography and painting. Prints and select originals are available,
            and I take a small number of quick portrait and pet sessions — reach out to buy a piece or book a shoot.
          </div>
        </div>
        <a href="mailto:richer.amanda@gmail.com?subject=Photography%20%E2%80%94%20print%2C%20commission%20or%20session"
          className="font-mono"
          style={{
            flexShrink: 0, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: c.sidebarBg, background: c.gold, padding: '11px 18px', borderRadius: 999,
            textDecoration: 'none', fontWeight: 600,
          }}>
          Inquire / Book
        </a>
      </div>
    </div>
  );

  // ─────────────────────────────────────────────
  // PROSE TAB
  // ─────────────────────────────────────────────
  const WritingTab = () => (
    <div className="anim-in" style={{ padding: '32px 22px 110px', maxWidth: 700, margin: '0 auto' }}>
      <TabHeader c={c} label="Writing" tagline="Long-form essays, white papers, and reported journalism." color={c.magenta} />

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
          </a>
        ))}
      </div>
    </div>
  );

  // ─────────────────────────────────────────────
  // ABOUT TAB
  // ─────────────────────────────────────────────
  const AboutTab = () => (
    <div className="anim-in" style={{ padding: '32px 22px 110px', maxWidth: 700, margin: '0 auto' }}>
      <TabHeader c={c} label="About" tagline="Background, working standards, and how to reach me." color={c.indigo} />

      {/* Bio */}
      <div style={{ marginTop: 22 }}>
        <p className="font-body" style={{ fontSize: 15.5, color: c.ink, lineHeight: 1.65 }}>
          Amanda Richer is a displacement consultant, writer, and visual artist. Displacement is the human-rights
          frame her work lives in; homelessness is the specific, most visible form she knows deepest. She works at
          the intersection of homelessness policy, community health, and the <em>One Health</em> framework, which
          treats human, animal, and environmental wellbeing as fundamentally interconnected.
        </p>
        <p className="font-body" style={{ fontSize: 15.5, color: c.ink, lineHeight: 1.65 }}>
          Her expertise comes from two kinds of direct knowledge, built over roughly a decade: frontline work —
          outreach, supply distribution, and harm-reduction among unhoused communities — and her own experience of
          street homelessness. Both inform the work; neither is a footnote. It moves across journalism, policy
          writing, governance, embedded consultancy, and visual practice, held together by a single orientation
          toward universal human rights.
        </p>
        <p className="font-body" style={{ fontSize: 15.5, color: c.ink, lineHeight: 1.65 }}>
          Her visual work, writing, and policy work are not separate disciplines synthesized into a
          brand — they are expressions of the same orientation, in different languages.
        </p>
      </div>

      {/* Curriculum Vitae */}
      <div style={{ marginTop: 30 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 12 }}>
          Curriculum Vitae
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <a href="/amanda-richer-cv.pdf" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '13px 20px',
              background: c.indigo, border: `1px solid ${c.indigo}`, borderRadius: 12,
              textDecoration: 'none', color: c.cream,
            }}>
            <Download size={17} color={c.cream} />
            <span className="font-body" style={{ fontSize: 14 }}>Download CV (PDF)</span>
          </a>
          <a href="/cv.html" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '13px 20px',
              background: 'transparent', border: `1px solid ${c.indigo}`, borderRadius: 12,
              textDecoration: 'none', color: c.indigo,
            }}>
            <ExternalLink size={17} color={c.indigo} />
            <span className="font-body" style={{ fontSize: 14 }}>View online</span>
          </a>
        </div>
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
          AI &amp; Technology
        </div>
        <p className="font-body" style={{ fontSize: 14, color: c.ink, lineHeight: 1.55, margin: 0 }}>
          I build and direct AI-powered tools — resource platforms, a human-rights learning game, and field
          simulations — and use AI fluently across research, analysis, and communications. Final judgment, voice,
          and accountability are my own.
        </p>
      </div>

      {/* Contact */}
      <div style={{ marginTop: 30 }}>
        <div className="font-mono" style={{ fontSize: 10, color: c.inkLight, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 12 }}>
          Contact
        </div>
        <a href="mailto:richer.amanda@gmail.com"
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '14px 16px',
            background: c.cream,
            border: `1px solid ${c.line}`,
            borderRadius: 12,
            textDecoration: 'none', color: c.ink,
            marginBottom: 8,
          }}>
          <Mail size={18} color={c.indigo} />
          <span className="font-body" style={{ fontSize: 14 }}>
            richer.amanda@gmail.com
          </span>
        </a>
        <a href="tel:+12063767859"
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '14px 16px',
            background: c.cream,
            border: `1px solid ${c.line}`,
            borderRadius: 12,
            textDecoration: 'none', color: c.ink,
            marginBottom: 8,
          }}>
          <Phone size={18} color={c.indigo} />
          <span className="font-body" style={{ fontSize: 14 }}>
            (206) 376-7859
          </span>
        </a>
        <a href="https://linkedin.com/in/amandaricher" target="_blank" rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '14px 16px',
            background: c.cream,
            border: `1px solid ${c.line}`,
            borderRadius: 12,
            textDecoration: 'none', color: c.ink,
          }}>
          <ExternalLink size={18} color={c.indigo} />
          <span className="font-body" style={{ fontSize: 14 }}>
            linkedin.com/in/amandaricher
          </span>
        </a>
      </div>
    </div>
  );

  // ─────────────────────────────────────────────
  // TECH & DIGITAL PRACTICE TAB
  // ─────────────────────────────────────────────
  const TechTab = () => (
    <div className="anim-in" style={{ padding: '32px 22px 110px', maxWidth: 700, margin: '0 auto' }}>
      <TabHeader c={c} label="Tech & Digital Practice" tagline="Working software I direct, test, and ship using AI tools — deployed tools for the field, not prototypes." color={c.coral} />

      {/* framing */}
      <p className="font-body" style={{ marginTop: 20, fontSize: 15, color: c.ink, lineHeight: 1.6 }}>
        I build real applications by directing AI tools — making the design and product
        calls, testing, debugging, and deploying. The result is a growing set of working
        tools that serve displaced and unhoused communities and the people who advocate
        alongside them.
      </p>

      {/* tools I work with */}
      <div style={{ marginTop: 20 }}>
        <div className="font-mono" style={{ fontSize: 9, color: c.inkLight, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8 }}>
          Tools I work with
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {techTools.map((t, i) => (
            <span key={i} className="font-body" style={{
              fontSize: 12, color: c.ink, padding: '4px 10px',
              border: `1px solid ${c.coral}`, borderRadius: 999, background: c.cream,
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* projects */}
      <div style={{ marginTop: 28 }}>
        {techProjects.map((p, i) => (
          <div key={i} style={{
            background: c.cream, border: `1px solid ${c.line}`, borderRadius: 14,
            padding: '16px', marginBottom: 10,
            borderLeft: `3px solid ${p.draft ? c.gold : c.coral}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
              <div className="font-mono" style={{ fontSize: 9, color: c.coral, textTransform: 'uppercase', letterSpacing: '0.22em' }}>
                {p.kind}
              </div>
              {p.badge && (
                <span className="font-mono" style={{
                  fontSize: 8.5, color: c.gold, textTransform: 'uppercase', letterSpacing: '0.16em',
                  border: `1px solid ${c.gold}`, borderRadius: 999, padding: '3px 8px', flexShrink: 0,
                }}>
                  {p.badge}
                </span>
              )}
            </div>
            <div className="font-display" style={{ fontSize: 19, color: c.ink, fontWeight: 500, lineHeight: 1.2, marginTop: 6, fontStyle: 'italic' }}>
              {p.title}
            </div>
            <p className="font-body" style={{ fontSize: 14, color: c.inkSoft, lineHeight: 1.5, margin: '6px 0 0' }}>
              {p.blurb}
            </p>

            {p.proof && (
              <div style={{ marginTop: 10 }}>
                {p.proof.map((x, j) => (
                  <div key={j} style={{ display: 'flex', gap: 9, marginBottom: 6 }}>
                    <span style={{ flexShrink: 0, marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: c.coral }} />
                    <span className="font-body" style={{ fontSize: 13, color: c.ink, lineHeight: 1.45 }}>{x}</span>
                  </div>
                ))}
              </div>
            )}

            {p.tools && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                {p.tools.map((t, j) => (
                  <span key={j} className="font-mono" style={{
                    fontSize: 9, color: c.inkLight, textTransform: 'uppercase', letterSpacing: '0.12em',
                    border: `1px solid ${c.line}`, borderRadius: 6, padding: '4px 8px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            {p.link && (
              <a href={p.link.url} target="_blank" rel="noopener noreferrer" className="font-mono" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: c.coral, textDecoration: 'none',
                border: `1px solid ${c.coral}`, borderRadius: 999, padding: '8px 14px', marginTop: 12,
              }}>
                {p.link.label}
                <ExternalLink size={12} />
              </a>
            )}

            {p.draft && (
              <div className="font-mono" style={{ fontSize: 9, color: c.gold, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 12 }}>
                Draft · details to confirm
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // ─────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────
  const renderTab = () => {
    switch (activeTab) {
      case 'nexus':      return <NexusTab />;
      case 'governance': return <GovernanceTab />;
      case 'writing':    return <WritingTab />;
      case 'art':        return <ArtTab />;
      case 'courses':    return <CoursesTab />;
      case 'tech':       return <TechTab />;
      case 'about':      return <AboutTab />;
      default:           return <NexusTab />;
    }
  };

  return (
    <div style={{ background: c.sidebarBg, minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{fontStack}</style>
      <div className="grain" />

      {/* desktop layout wrapper */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex',
        minHeight: '100vh',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}>
        {/* desktop side nav */}
        <style>{`
          @media (min-width: 700px) {
            .mobile-bottom-nav { display: none !important; }
            .desktop-side-nav { display: flex !important; }
            .main-content { max-width: none !important; padding-bottom: 60px !important; }
          }
          @media (max-width: 699px) {
            .desktop-side-nav { display: none !important; }
          }
        `}</style>

        <div className="desktop-side-nav" style={{
          display: 'none',
          flexDirection: 'column',
          width: 220,
          flexShrink: 0,
          position: 'sticky',
          top: 0,
          height: '100vh',
          background: c.sidebarBg,
          padding: '40px 24px',
          justifyContent: 'space-between',
        }}>
          <div>
            <div className="font-display" style={{ fontSize: 19, color: 'rgba(244,240,234,0.9)', fontStyle: 'italic', fontWeight: 500, marginBottom: 2 }}>
              Amanda
            </div>
            <div className="font-display" style={{ fontSize: 19, color: c.sidebarActive, fontStyle: 'italic', fontWeight: 500, marginBottom: 36 }}>
              Richer
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {tabs.filter(t => t.id !== 'courses').map(t => {
                const active = activeTab === t.id;
                return (
                  <button key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    style={{
                      background: active ? 'rgba(199,162,74,0.16)' : 'transparent',
                      border: 'none', cursor: 'pointer',
                      textAlign: 'left',
                      padding: '11px 14px',
                      borderRadius: 6,
                      borderLeft: active ? `3px solid ${c.sidebarActive}` : '3px solid transparent',
                      color: active ? c.sidebarActive : c.sidebarText,
                      transition: 'all 0.18s ease',
                    }}>
                    <span className="font-mono" style={{
                      fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em',
                      fontWeight: active ? 600 : 400,
                    }}>
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>
            {/* Courses — set apart below the other tabs, highlighted */}
            <button
              onClick={() => setActiveTab('courses')}
              style={{
                marginTop: 16, width: '100%',
                background: activeTab === 'courses' ? 'rgba(199,162,74,0.16)' : 'rgba(220,180,92,0.08)',
                border: `1px solid ${c.gold}`, cursor: 'pointer',
                textAlign: 'left', padding: '11px 14px', borderRadius: 8,
                color: c.gold, transition: 'all 0.18s ease',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
              <GraduationCap size={14} color={c.gold} strokeWidth={2} style={{ flexShrink: 0 }} />
              <span className="font-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 600 }}>
                Courses
              </span>
            </button>
          </div>
          <div className="font-mono" style={{ fontSize: 9, color: 'rgba(244,240,234,0.35)', letterSpacing: '0.14em', lineHeight: 1.8, textTransform: 'uppercase' }}>
            Seattle, WA<br />
            She / Her
          </div>
        </div>

        {/* main scroll area */}
        <div className="main-content" style={{ flex: 1, background: c.cream, minHeight: '100vh' }}>
          {renderTab()}
        </div>
      </div>

      {/* bottom sheet for ecomap */}
      <NodeSheet />

      {/* bottom nav — mobile only */}
      <div className="mobile-bottom-nav" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: `${c.cream}f5`,
        backdropFilter: 'blur(12px)',
        borderTop: `1px solid ${c.line}`,
        zIndex: 40,
      }}>
        <div style={{
          maxWidth: 560, margin: '0 auto',
          display: 'flex', justifyContent: 'space-around',
          padding: '10px 4px 16px',
        }}>
          {tabs.map(t => {
            const active = activeTab === t.id;
            return (
              <button key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
                  padding: '4px 3px',
                  color: active ? t.color : c.inkLight,
                  transition: 'color 0.2s ease',
                }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: active ? t.color : 'transparent',
                  border: active ? 'none' : `1px solid ${c.inkLight}`,
                  transition: 'all 0.2s ease',
                }} />
                <span className="font-mono" style={{
                  fontSize: 10, textTransform: 'uppercase',
                  letterSpacing: '0.16em', fontWeight: active ? 500 : 400,
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
