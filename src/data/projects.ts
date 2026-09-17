export type ProjectStage = 'design' | 'simulated' | 'demonstrated' | 'in-development';
export type RepoState = 'pending' | 'public-verified' | 'not-required';

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  disciplines: string[];
  tags: string[];
  stage: ProjectStage;
  stageLabel: string;
  context: string;
  ownership: string;
  outcome: string;
  media: string;
  mediaAlt: string;
  mediaCaption: string;
  problem: string;
  constraints: string[];
  contribution: string[];
  architecture: string[];
  decisions: { title: string; body: string }[];
  implementation: string[];
  validation: string[];
  limitations: string[];
  nextStep: string;
  repository: { state: RepoState; url: string | null; checkedAt: string | null };
  demoUrl: string | null;
  evidenceNote: string;
  priority: number;
  teamProject?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'vista-mobile-service-robot',
    title: 'VISTA Mobile Service Robot',
    shortTitle: 'VISTA',
    summary: 'Mechanical architecture for a mobile service robot, including the base, upper torso, rotating head and shoulder joint assemblies.',
    disciplines: ['Mechanical', 'Robotics & Simulation'],
    tags: ['SOLIDWORKS', 'Robotic mechanisms', 'Assembly design', 'Fabrication'],
    stage: 'design',
    stageLabel: 'Design',
    context: 'Project affiliation — mechanical design scope; organization and team credits to be confirmed before publication.',
    ownership: 'My contribution: mechanical architecture, CAD assemblies and design documentation as supported by the brief.',
    outcome: 'Prepared CAD models and design documentation for future physical prototyping and validation.',
    media: '/media/vista-placeholder.svg',
    mediaAlt: 'Neutral VISTA CAD placeholder showing torso, head and base geometry labels.',
    mediaCaption: 'VISTA / Mobile service robot mechanical design / SOLIDWORKS assembly — neutral placeholder until authentic render is supplied.',
    problem: 'Develop a coherent mechanical architecture for a mobile service robot that can be broken into manufacturable, inspectable subassemblies.',
    constraints: ['Physical prototype and field validation are not established by the supplied evidence.', 'Final team credits and fabrication constraints must be confirmed.', 'Authentic CAD renders, drawings and joint details are still required for launch.'],
    contribution: ['Structured the robot into base, torso, rotating head and shoulder-joint assemblies.', 'Prepared CAD-oriented design documentation for future prototype work.', 'Kept the mechanical contribution distinct from unverified autonomy or software claims.'],
    architecture: ['Modular assembly hierarchy: mobile base → torso → rotating head → shoulder joints.', 'Case study should pair overview geometry with exploded assembly and joint close-ups.', 'Range-of-motion and fabrication constraints should be annotated once source drawings are available.'],
    decisions: [
      { title: 'Modular assembly hierarchy', body: 'Separating major robot regions makes design intent, interfaces and future fabrication changes easier to inspect.' },
      { title: 'Evidence-first presentation', body: 'The portfolio treats CAD completion separately from physical build status so the page does not imply a field-tested robot.' }
    ],
    implementation: ['SOLIDWORKS parts and assembly workflow.', 'Engineering drawings and fabrication-oriented documentation as stated in the brief.', 'Lead visual reserved for the authentic torso/head/shoulder render when supplied.'],
    validation: ['Current verified state: design documentation and CAD-oriented work.', 'Future validation should include joint motion review, fit checks and physical prototype evidence.'],
    limitations: ['No physical prototype evidence supplied here.', 'No measured range-of-motion or fabrication tolerance data supplied.', 'No team/organization credits supplied in the current source package.'],
    nextStep: 'Replace the neutral visual with authentic VISTA renders, add an exploded view and document one joint interface with verified dimensions and constraints.',
    repository: { state: 'not-required', url: null, checkedAt: null },
    demoUrl: null,
    evidenceNote: 'Do not describe VISTA as built or field-tested unless new evidence is added.',
    priority: 1
  },
  {
    slug: 'differential-drive-modeling-control',
    title: 'Dynamic Modeling & Control of a Differential Drive Mobile Robot',
    shortTitle: 'Differential Drive',
    summary: 'Physics-based mobile robot model integrating URDF geometry, rigid-body properties and wheel actuation in Simscape Multibody.',
    disciplines: ['Robotics & Simulation'],
    tags: ['MATLAB', 'Simulink', 'Simscape Multibody', 'URDF'],
    stage: 'simulated',
    stageLabel: 'Simulated',
    context: 'Academic or project context to be confirmed before public release.',
    ownership: 'My contribution: simulation integration and control logic as supplied in the brief; detailed scope to be confirmed.',
    outcome: 'Implemented translational and rotational control logic and evaluated simulated joint responses under different inputs.',
    media: '/media/differential-placeholder.svg',
    mediaAlt: 'Neutral differential drive simulation placeholder with coordinate axes and wheel blocks.',
    mediaCaption: 'Simscape Multibody output diagram placeholder — replace with a real simulation frame and plots with units.',
    problem: 'Create a physics-based differential-drive model that connects robot geometry, rigid-body properties and wheel actuation to inspectable control behavior.',
    constraints: ['Closed-loop stability and tracking accuracy are not established.', 'Plots must carry units, input conditions and a clear simulation label.', 'Mass and inertia assumptions need to be documented from the source model.'],
    contribution: ['Integrated URDF geometry and rigid-body properties into a Simscape Multibody workflow.', 'Implemented translational and rotational control logic.', 'Evaluated simulated joint responses under different inputs.'],
    architecture: ['URDF geometry and inertial properties feed the multibody plant.', 'Wheel actuation drives planar robot motion.', 'Control inputs and joint responses are inspected through simulation outputs.'],
    decisions: [
      { title: 'Physics-based plant model', body: 'Using Simscape Multibody keeps geometry, inertial assumptions and actuation visible instead of reducing the project to an abstract kinematic animation.' },
      { title: 'Separate simulation from measurement', body: 'All plots and statements are labeled as simulated until physical measurements exist.' }
    ],
    implementation: ['MATLAB / Simulink control logic.', 'Simscape Multibody rigid-body integration.', 'URDF-based geometry and joint structure.'],
    validation: ['Simulated responses evaluated under different inputs.', 'Public page should add a real plot with axes, units and exact input conditions.'],
    limitations: ['No physical robot test data supplied.', 'No stability margin or tracking-error metric supplied.', 'Model assumptions still need traceable documentation.'],
    nextStep: 'Add authentic simulation captures, mass/inertia assumptions and one measured or simulated response plot with units and test conditions.',
    repository: { state: 'not-required', url: null, checkedAt: null },
    demoUrl: null,
    evidenceNote: 'Simulation evidence only; do not imply measured performance.',
    priority: 3
  },
  {
    slug: 'automated-wire-cutting-machine',
    title: 'Automated Wire Cutting Machine',
    shortTitle: 'Wire Cutter',
    summary: 'Bare-metal TM4C123 firmware coordinating the operating sequence of an automated wire-cutting machine.',
    disciplines: ['Embedded'],
    tags: ['Embedded C', 'TM4C123', 'Bare-metal', 'Control logic'],
    stage: 'demonstrated',
    stageLabel: 'Academic project',
    context: 'Academic project; team credits and exact peripheral configuration to confirm.',
    ownership: 'My contribution: firmware/control scope as supplied in the brief; supporting artifacts required before launch.',
    outcome: 'Implemented a bare-metal control sequence for the automated wire-cutting workflow.',
    media: '/media/wire-cutter-placeholder.svg',
    mediaAlt: 'Neutral embedded state-machine placeholder for the automated wire cutting machine.',
    mediaCaption: 'Firmware/state-machine placeholder — replace with an authentic hardware photo and verified state diagram.',
    problem: 'Coordinate a repeatable machine sequence directly on a TM4C123 without hiding timing and peripheral behavior behind a high-level runtime.',
    constraints: ['Cutting accuracy, uptime and throughput are not established by the supplied materials.', 'Peripheral mapping and exact firmware behavior require source evidence.', 'Team credits and demonstration media are pending.'],
    contribution: ['Implemented the supplied bare-metal firmware/control sequence.', 'Structured the machine operation around explicit states and peripheral events.', 'Kept the project description focused on the implemented control logic rather than unsupported performance claims.'],
    architecture: ['TM4C123 firmware → input/peripheral events → machine state transitions → actuator commands.', 'State diagram should expose idle, feed, measure/cut and reset/error behavior only when verified from the implementation.'],
    decisions: [
      { title: 'Explicit control states', body: 'A state-oriented sequence makes machine behavior easier to debug and explain than scattered timing logic.' },
      { title: 'Evidence-first reporting', body: 'The case study separates implemented firmware behavior from machine performance claims that still require measured evidence.' }
    ],
    implementation: ['Bare-metal C on TM4C123.', 'Peripheral integration details to be added from the actual code/hardware.', 'Hardware block diagram and state diagram reserved for verified evidence.'],
    validation: ['The supplied brief supports the bare-metal firmware/control scope.', 'Public presentation still requires a hardware demonstration and verified peripheral details.'],
    limitations: ['Cutting accuracy, uptime and throughput are not established.', 'Repository URL is unknown.', 'Hardware configuration and team attribution are incomplete.'],
    nextStep: 'Add the real firmware state diagram, verified peripheral configuration and an authentic hardware photo or demonstration.',
    repository: { state: 'not-required', url: null, checkedAt: null },
    demoUrl: null,
    evidenceNote: 'Academic project; no production-performance claims without measured evidence.',
    priority: 4
  },
  {
    slug: 'ai-study-assistant',
    title: 'AI Study Assistant',
    shortTitle: 'AI Study Assistant',
    summary: 'A Streamlit study interface connecting user requests to language models through the OpenRouter API.',
    disciplines: ['Software'],
    tags: ['Python', 'Streamlit', 'OpenRouter', 'API integration'],
    stage: 'in-development',
    stageLabel: 'Repository pending',
    context: 'Software project; public repository required before any hosted portfolio release.',
    ownership: 'My contribution: application workflow as supplied in the brief; implemented feature set must be checked against the source.',
    outcome: 'API-connected study workflow; supported tasks to be confirmed from the actual application.',
    media: '/media/ai-study-placeholder.svg',
    mediaAlt: 'Neutral UI placeholder for an AI study assistant with request and response panels.',
    mediaCaption: 'Fictional sample UI placeholder — no live API credentials or repository link included.',
    problem: 'Create a simple study interface that moves a user request through an API-backed language-model workflow without exposing provider credentials.',
    constraints: ['Public GitHub repository is a mandatory release dependency.', 'Implemented study tasks must be verified from the actual app.', 'API keys must remain outside browser bundles and repositories.'],
    contribution: ['Built or planned the Streamlit-to-OpenRouter request workflow described in the brief.', 'Separated interface behavior from provider credentials.', 'Reserved public code links until the exact repository is verified.'],
    architecture: ['Streamlit interface → validated user request → OpenRouter API → model response → rendered study output.', 'Environment variables hold provider secrets; public UI must never surface them.'],
    decisions: [
      { title: 'Pending repository state', body: 'The local portfolio exposes the project page but deliberately does not invent a GitHub URL.' },
      { title: 'Credential isolation', body: 'API credentials belong in environment configuration, with only dummy names documented publicly.' }
    ],
    implementation: ['Python and Streamlit application surface.', 'OpenRouter API integration as supplied in the brief.', 'Fictional sample content may be used in screenshots until real sanitized captures are added.'],
    validation: ['Actual supported tasks still need source inspection.', 'Repository must be public, nonempty and project-matched before release.'],
    limitations: ['Repository URL currently missing.', 'No verified feature inventory or public demo supplied.', 'No live credentials are included in this portfolio package.'],
    nextStep: 'Publish and verify the real GitHub repository, then replace the pending badge with a checked code link and authentic sanitized UI capture.',
    repository: { state: 'pending', url: null, checkedAt: null },
    demoUrl: null,
    evidenceNote: 'Required repository gate: blocks hosted release while pending.',
    priority: 8
  },
  {
    slug: 'conveyor-belt-sorting',
    title: 'Automated Conveyor Belt Sorting System',
    shortTitle: 'Conveyor Sorting',
    summary: 'Parametric sorting mechanism with mechanical linkages and actuated components, evaluated through SOLIDWORKS motion studies.',
    disciplines: ['Mechanical'],
    tags: ['SOLIDWORKS', 'Motion Study', 'Mechanical linkages'],
    stage: 'simulated',
    stageLabel: 'Motion study',
    context: 'Academic/semester context to confirm; individual contribution should be stated from the project report.',
    ownership: 'My contribution: mechanical modeling and motion-study scope as supplied in the brief.',
    outcome: 'Modeled mechanism operation and performed structural analysis; physical throughput and sorting accuracy remain unsubstantiated.',
    media: '/media/conveyor-placeholder.svg',
    mediaAlt: 'Neutral CAD-style placeholder of an automated conveyor and sorting linkage.',
    mediaCaption: 'SOLIDWORKS render placeholder — replace with the actual CAD overview, linkage close-up and motion-study clip.',
    problem: 'Design a compact mechanical sorting mechanism whose linkage motion can be evaluated before fabrication.',
    constraints: ['Physical throughput and sorting accuracy are not established.', 'Interactive 3D must reflect the actual assembly, not a decorative substitute.', 'Academic context and exact personal contribution need confirmation.'],
    contribution: ['Created the parametric mechanism and linkage-oriented CAD work described in the brief.', 'Evaluated operation using SOLIDWORKS motion studies.', 'Performed structural analysis as supplied in the project description.'],
    architecture: ['Conveyor transport section → sensing/trigger context → actuated sorting linkage → destination path.', 'Case study should make linkage geometry and actuation sequence visually legible.'],
    decisions: [
      { title: 'Motion-study first', body: 'Evaluating linkage motion in CAD reduces ambiguity before any future fabrication and gives the case study inspectable engineering evidence.' },
      { title: 'Static fallback for 3D', body: 'Any GLB viewer remains optional and must preserve a strong static CAD render when WebGL is unavailable.' }
    ],
    implementation: ['SOLIDWORKS parametric assembly.', 'Motion Study for mechanism evaluation.', 'Structural analysis as supplied; settings/results need authentic captures.'],
    validation: ['Mechanism operation evaluated in motion study.', 'Structural-analysis evidence should be added with load cases and units.'],
    limitations: ['No physical throughput metric supplied.', 'No sorting-accuracy metric supplied.', 'Authentic CAD/media assets are not included in the current source package.'],
    nextStep: 'Add the project’s actual CAD render, motion-study clip and one annotated linkage decision; export a GLB only if it faithfully represents the assembly.',
    repository: { state: 'not-required', url: null, checkedAt: null },
    demoUrl: null,
    evidenceNote: 'Simulation/CAD evidence only; physical performance not claimed.',
    priority: 2
  },
  {
    slug: 'embedded-python-data-pipeline',
    title: 'Embedded + Python Data Pipeline',
    shortTitle: 'Embedded → Python',
    summary: 'A TM4C123-to-Python telemetry workflow connecting UART acquisition, PySerial ingestion, CSV logging and live plotting.',
    disciplines: ['Embedded', 'Software'],
    tags: ['TM4C123', 'UART', 'PySerial', 'CSV', 'Matplotlib'],
    stage: 'in-development',
    stageLabel: 'In development',
    context: 'Integration project in development.',
    ownership: 'My contribution: telemetry pipeline scope as supplied in the brief; publish only demonstrated stages.',
    outcome: 'In development; the next milestone must remain explicit until each pipeline stage is demonstrated.',
    media: '/media/pipeline-placeholder.svg',
    mediaAlt: 'Neutral data pipeline diagram from TM4C123 over UART to Python logging and plotting.',
    mediaCaption: 'Pipeline diagram placeholder — replace with tested baud rate, sample format and a timestamped measured or synthetic plot.',
    problem: 'Move embedded telemetry into a Python workflow that can be logged and visualized while keeping framing, timing and data quality inspectable.',
    constraints: ['Project must never display a Completed badge in its current state.', 'Baud rate, sample format and dropped-frame handling are not yet supplied.', 'Plots must be labeled measured or synthetic.'],
    contribution: ['Connected the intended TM4C123, UART, PySerial, CSV and Matplotlib stages at the design level described in the brief.', 'Kept completion status separate from aspirational next steps.', 'Defined the evidence needed for a credible telemetry case study.'],
    architecture: ['TM4C123 acquisition → UART serialization → PySerial ingestion → CSV logging → live Matplotlib visualization.', 'Data framing and timestamp strategy should be documented once tested.'],
    decisions: [
      { title: 'Inspectable file log', body: 'CSV logging provides a simple audit trail between embedded acquisition and visualization during development.' },
      { title: 'Status stays in development', body: 'The UI refuses to imply completion before tested baud rate, framing and dropped-frame behavior are documented.' }
    ],
    implementation: ['TM4C123 acquisition stage.', 'UART transport and PySerial ingestion.', 'CSV logging and Matplotlib live plotting workflow.'],
    validation: ['No verified end-to-end benchmark supplied yet.', 'Future evidence should include timestamps, sample format and loss/error handling.'],
    limitations: ['Tested baud rate missing.', 'Dropped-frame strategy missing.', 'Measured-vs-synthetic plot status not yet supplied.'],
    nextStep: 'Demonstrate one end-to-end telemetry run and record baud rate, frame format, logging behavior and dropped-frame handling.',
    repository: { state: 'not-required', url: null, checkedAt: null },
    demoUrl: null,
    evidenceNote: 'Never mark completed until the actual pipeline is demonstrated.',
    priority: 7
  },
  {
    slug: 'pakistan-weather-dashboard',
    title: 'Pakistan Weather Dashboard',
    shortTitle: 'Weather Dashboard',
    summary: 'A Pakistan-focused weather dashboard using OpenWeatherMap data and Matplotlib visualizations.',
    disciplines: ['Software'],
    tags: ['Python', 'OpenWeatherMap', 'Matplotlib'],
    stage: 'demonstrated',
    stageLabel: 'Personal project',
    context: 'Personal project; code/demo destination must be verified before linking.',
    ownership: 'My contribution: dashboard workflow as supplied in the brief; implemented views and coverage need confirmation.',
    outcome: 'City weather visualization; exact coverage and implemented views remain to be checked.',
    media: '/media/weather-placeholder.svg',
    mediaAlt: 'Neutral weather dashboard placeholder showing city, units and retrieval time fields.',
    mediaCaption: 'Dashboard placeholder — replace with an authentic capture containing city, units and retrieval time.',
    problem: 'Present weather data for Pakistani cities in a compact interface with readable visualizations and explicit units.',
    constraints: ['City coverage and implemented views are not confirmed.', 'Any public API usage must protect secrets and follow provider terms.', 'Code/demo links remain hidden until verified.'],
    contribution: ['Connected a Python workflow to OpenWeatherMap data as supplied in the brief.', 'Used Matplotlib for weather visualization.', 'Kept public claims limited to city weather visualization.'],
    architecture: ['City input → OpenWeatherMap request → normalized weather data → Matplotlib visualization/dashboard output.'],
    decisions: [
      { title: 'Units and retrieval context', body: 'Weather screenshots should always show units and retrieval time so the displayed values have interpretable context.' },
      { title: 'No guessed coverage', body: 'The portfolio does not claim nationwide or exhaustive city support until the application is inspected.' }
    ],
    implementation: ['Python data retrieval workflow.', 'OpenWeatherMap API usage.', 'Matplotlib-based visualization.'],
    validation: ['Feature coverage and implemented views still need verification.', 'Authentic screenshot and working destination should be added before launch.'],
    limitations: ['No verified repository/demo URL supplied.', 'No city coverage list supplied.', 'No performance or user metrics supplied.'],
    nextStep: 'Add a real dashboard capture, verify which cities/views are implemented and attach a checked code or demo destination if available.',
    repository: { state: 'not-required', url: null, checkedAt: null },
    demoUrl: null,
    evidenceNote: 'Personal project; implemented coverage must be verified.',
    priority: 9
  },
  {
    slug: 'news-summarizer',
    title: 'News Summarizer',
    shortTitle: 'News Summarizer',
    summary: 'A news summarization workflow automated through GitHub Actions.',
    disciplines: ['Software'],
    tags: ['GitHub Actions', 'Automation'],
    stage: 'demonstrated',
    stageLabel: 'Personal project',
    context: 'Personal project; source attribution, language/provider and schedule details require verification.',
    ownership: 'My contribution: automation workflow as supplied in the brief; provider/language details must come from the actual project.',
    outcome: 'Automated execution and summary output, to be supported by a successful workflow log.',
    media: '/media/news-placeholder.svg',
    mediaAlt: 'Neutral GitHub Actions style workflow placeholder leading to a summarized news output.',
    mediaCaption: 'Automation placeholder — replace with a sanitized run history and sample summary with source attribution.',
    problem: 'Automate a repeatable news-summary run while preserving visible execution evidence and source attribution.',
    constraints: ['Language and summarization provider are not supplied.', 'Successful workflow history should be shown before publication.', 'Source attribution and scheduling details need confirmation.'],
    contribution: ['Built or planned the GitHub Actions automation described in the brief.', 'Structured the page around inspectable run evidence rather than unsupported capability claims.', 'Reserved provider/language details until the implementation is checked.'],
    architecture: ['Scheduled/manual GitHub Action → source retrieval → summarization step → output artifact or published result.', 'Actual provider and data-source stages must be populated from the verified workflow.'],
    decisions: [
      { title: 'Workflow log as evidence', body: 'A successful, sanitized run history is more credible than a generic “automated” badge.' },
      { title: 'Source attribution required', body: 'The case study must show where input news came from and avoid presenting summaries without provenance.' }
    ],
    implementation: ['GitHub Actions automation.', 'Summarization language/provider to be added after source inspection.', 'Sanitized run history reserved as the main evidence asset.'],
    validation: ['Successful workflow log required before release.', 'Schedule and output path must match the actual workflow.'],
    limitations: ['Provider/language not yet verified.', 'No repository URL supplied.', 'No current workflow log included in the provided materials.'],
    nextStep: 'Attach a sanitized successful workflow run, verify schedule/provider/language, and add a checked repository link if one is made public.',
    repository: { state: 'not-required', url: null, checkedAt: null },
    demoUrl: null,
    evidenceNote: 'Automation details must be verified from the actual workflow.',
    priority: 10
  },
  {
    slug: 'sign-language-detector',
    title: 'Real-Time Sign Language Detector',
    shortTitle: 'Sign Language Detector',
    summary: 'A desktop computer-vision prototype that converts MediaPipe hand-landmark patterns into stable phrases and optional text-to-speech output.',
    disciplines: ['Software', 'Computer Vision'],
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Tkinter', 'Text-to-speech'],
    stage: 'demonstrated',
    stageLabel: 'Public repository',
    context: 'Personal project; public repository verified on 09 September 2026.',
    ownership: 'Authored and published by Izhaan Mubeen; implementation inspected from the public main branch.',
    outcome: 'Implemented live-camera and uploaded-video processing, eight rule-based gesture mappings, stability filtering, sentence accumulation and text-to-speech playback.',
    media: '/media/sign-language-detector.svg',
    mediaAlt: 'Architecture diagram for the Sign Language Detector showing camera input, MediaPipe landmarks, gesture rules, stability filtering and speech output.',
    mediaCaption: 'Verified implementation architecture based on the public README and main.py source.',
    problem: 'Turn hand movements captured from a webcam or recorded video into a readable, spoken phrase while reducing unstable frame-to-frame detections.',
    constraints: ['The current system recognizes a fixed set of eight deterministic gesture patterns.', 'It is a rule-based MediaPipe prototype, not a trained sign-language classification model.', 'No dataset benchmark, confusion matrix or recognition-accuracy metric is published.'],
    contribution: ['Built the Tkinter desktop interface for selecting live camera or recorded video input.', 'Used MediaPipe Hands landmarks and fingertip positions to derive a five-value finger-state tuple.', 'Mapped stable gesture states into a sentence and connected the output to offline pyttsx3 speech.'],
    architecture: ['OpenCV capture → RGB conversion → MediaPipe Hands → landmark coordinates → finger-state tuple.', 'Gesture dictionary → eight-frame stability threshold → sentence buffer → Tkinter display and pyttsx3 speech.', 'Start, stop and input-selection controls reset the shared recognition state between sessions.'],
    decisions: [
      { title: 'Stability before output', body: 'A gesture must persist across the configured threshold before it is appended, reducing rapidly flickering words in the sentence buffer.' },
      { title: 'Two input paths', body: 'The same processing pipeline accepts either a webcam stream or an uploaded video, keeping the recognition logic independent of the source.' }
    ],
    implementation: ['Python application implemented in main.py.', 'OpenCV frame capture and color conversion.', 'MediaPipe 21-point hand-landmark processing.', 'Tkinter interface with start, upload, stop and speak controls.', 'pyttsx3 text-to-speech output.'],
    validation: ['Public repository and main.py source verified.', 'Source contains eight explicit gesture-to-phrase mappings and an eight-frame stability threshold.', 'Both live-camera and uploaded-video code paths are present.'],
    limitations: ['Gesture rules are based on fingertip position comparisons rather than a trained classifier.', 'No accuracy, latency or multi-user evaluation is published.', 'The current processing loop is a desktop prototype rather than a packaged production application.'],
    nextStep: 'Add a labeled validation set, publish per-gesture accuracy and latency, and move frame updates into a non-blocking Tkinter scheduling loop.',
    repository: { state: 'public-verified', url: 'https://github.com/izhaan-mubeen/Sign-Language-Detector', checkedAt: '2026-09-09' },
    demoUrl: null,
    evidenceNote: 'Public source verified. Present it as a fixed-gesture computer-vision prototype, not a complete sign-language translator.',
    priority: 5
  },
  {
    slug: 'compressive-sensing-sparse-recovery',
    title: 'Compressive Sensing & Sparse Signal Recovery',
    shortTitle: 'Compressive Sensing',
    summary: 'MATLAB and Simulink workflow for reconstructing DFT-sparse signals from random undersampling through Basis Pursuit and ADMM.',
    disciplines: ['Signal Processing', 'Robotics & Simulation'],
    tags: ['MATLAB', 'Simulink', 'DFT', 'CVX', 'ADMM', 'Sparse recovery'],
    stage: 'simulated',
    stageLabel: 'Academic team project',
    context: 'Signal Processing (MCT-244L) academic team project at UET Lahore.',
    ownership: 'Academic team project including Izhaan Mubeen. The supplied report documents the complete system but does not separate individual contribution.',
    outcome: 'The report demonstrates sparse-signal reconstruction from fewer random measurements and evaluates the output through waveform comparison, mean-square error and compression ratio.',
    media: '/media/compressive-sensing-matlab.webp',
    mediaAlt: 'Authentic MATLAB App Designer output showing the frequency spectrum, original signal, ADMM reconstruction, error curve and compressive-sensing parameters.',
    mediaCaption: 'Authentic MATLAB App Designer output reproduced from the supplied Signal Processing project report.',
    problem: 'Reduce the number of acquired samples for a sparse signal while retaining enough information to reconstruct the original waveform accurately.',
    constraints: ['The method assumes the input is sparse or compressible in a suitable transform domain.', 'Recovery quality depends on sparsity, measurement count, measurement matrix and noise.', 'The supplied evidence is simulation/report based; no FPGA or DSP hardware implementation is claimed.'],
    contribution: ['The documented team scope covers normalized DFT-basis construction and sparse signal generation.', 'The workflow performs random undersampling and L1-norm Basis Pursuit recovery through CVX.', 'A Simulink path uses an ADMM recovery block, and App Designer exposes parameters, plots, MSE and compression ratio.'],
    architecture: ['Input signal → normalized DFT sparse representation → random measurement indices.', 'Measurement matrix and compressed samples → CVX Basis Pursuit or ADMM sparse recovery.', 'Inverse DFT → recovered waveform → comparison plots, MSE and compression-ratio evaluation.'],
    decisions: [
      { title: 'DFT as the sparse basis', body: 'The test signal contains a small number of dominant frequencies, making a normalized DFT matrix a direct and interpretable sparsifying transform.' },
      { title: 'Two recovery paths', body: 'CVX expresses the Basis Pursuit problem directly, while the documented ADMM route supports integration inside the Simulink processing chain.' }
    ],
    implementation: ['MATLAB scripts documented for signal generation, random sampling, CVX recovery and parameter sweeps.', 'Simulink model with a MATLAB Function block for sampling, ADMM recovery and reconstruction.', 'App Designer interface for signal and sampling parameters, result plots and evaluation values.'],
    validation: ['Original and recovered waveforms are compared visually.', 'The report evaluates error across measurement counts using MSE.', 'The supplied GUI capture documents an example using 1,000 samples and 200 measurements, producing a compression ratio of 5.'],
    limitations: ['Individual team contribution is not separated in the supplied report.', 'Source MATLAB, Simulink and App Designer files were not supplied with the portfolio update.', 'Noise robustness and hardware execution are identified as future work rather than completed validation.'],
    nextStep: 'Publish a reproducible code package with the MATLAB, Simulink and App Designer files, document one fixed random seed, and report reconstruction error across sparsity and noise levels.',
    repository: { state: 'not-required', url: null, checkedAt: null },
    demoUrl: null,
    evidenceNote: 'Team project supported by the supplied report and authentic MATLAB output; individual contribution remains unspecified.',
    priority: 6,
    teamProject: true
  }
];

export const requiredRepositories = [
  { slug: 'ai-study-assistant', label: 'AI Study Assistant', url: null, state: 'pending' as const },
  { slug: 'sand-simulation', label: 'Sand Simulation', url: null, state: 'pending' as const }
];
