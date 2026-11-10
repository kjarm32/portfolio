<nav class="portfolio-nav" aria-label="Portfolio navigation">
  <a class="portfolio-brand" href="#top">KA</a>
  <div class="portfolio-nav-links">
    <a href="#experience">Robotics</a>
    <a href="#bwb">Aircraft</a>
    <a href="#hycube">Space</a>
    <a href="#rotorcraft">Research</a>
    <a href="#drone">Drone</a>
  </div>
</nav>

<a id="top"></a>

<section class="hero-compact">
  <div class="hero-copy">
    <p class="eyebrow">UC BERKELEY · MECHANICAL ENGINEERING ’28</p>
    <h1>Kevin Armstrong II</h1>
    <p class="hero-title">Mechanical Design, Build &amp; Test · Aerodynamics &amp; Flight Hardware.</p>
    <p class="hero-summary">
      I design, build, integrate, and test mechanical and flight hardware, using structural analysis, CFD,
      and measured results to guide design decisions.
    </p>
    <div class="hero-links">
      <a class="hero-link" href="https://app.notion.com/p/Zipline-Aerodynamics-Presentation-Kevin-Armstrong-II-3f1f045049e780f89fbadf1b7cc8d9f6"
         target="_blank" rel="noopener noreferrer">Aerodynamics Specific Work</a>
      <a class="hero-link" href="https://www.linkedin.com/in/kevin-armstrong-ii-647125319/"
         target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a class="hero-link" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=kevarm2028@berkeley.edu"
         target="_blank" rel="noopener noreferrer">Email</a>
    </div>
  </div>

  <img class="hero-headshot"
       src="assets/4headshotasmes.png"
       alt="Kevin Armstrong II">
</section>

<section id="featured-work" class="featured-work">
  <header class="section-heading">
    <h2>Selected work</h2>
  </header>

  <div class="featured-grid">
    <a class="featured-card" href="#experience">
      <div class="featured-card-media standardbots-render">
        <img src="assets/Standard%20Bots%20RO1.png"
             alt="Standard Bots RO1 industrial robot">
      </div>
      <div class="featured-card-copy">
        <span class="card-kicker">MECHANICAL DESIGN + TEST</span>
        <h3>Standard Bots</h3>
        <p>High-load test infrastructure, mechanical interfaces, structural analysis, assembly, calibration, and validation.</p>
        <strong class="card-result">100 hr loaded burn-in</strong>
      </div>
    </a>

    <a class="featured-card" href="#bwb">
      <div class="featured-card-media">
        <img src="assets/bwb_fog_hero.jpg"
             alt="Fog flowing over the new blended-wing-body model in the wind tunnel">
      </div>
      <div class="featured-card-copy">
        <span class="card-kicker">AERODYNAMICS + EXPERIMENTAL VALIDATION</span>
        <h3>Blended-Wing-Body Aircraft</h3>
        <p>Two linked test articles: the first mapped separation; the revised model explores its flow and force trends.</p>
        <strong class="card-result">CAD → fabrication → physical test</strong>
      </div>
    </a>

    <a class="featured-card" href="#hycube">
      <div class="featured-card-media">
        <img src="assets/HyCubeINAir.png"
             alt="HyCUBE payload during high-altitude flight">
      </div>
      <div class="featured-card-copy">
        <span class="card-kicker">AEROSPACE HARDWARE + TEST</span>
        <h3>HyCUBE Reentry Vehicle</h3>
        <p>Thermal instrumentation, calibration, payload integration, flight operations, recovery, and post-flight validation.</p>
        <strong class="card-result">~90,000 ft flight</strong>
      </div>
    </a>

    <a class="featured-card" href="#rotorcraft">
      <div class="featured-card-media dark-media">
        <video autoplay muted loop playsinline preload="metadata"
               aria-label="Matched AH-1S recovery comparison">
          <source src="assets/ah1s_matched_recovery_20s.mp4" type="video/mp4">
        </video>
      </div>
      <div class="featured-card-copy">
        <span class="card-kicker">FLIGHT DYNAMICS + MODEL VALIDATION</span>
        <h3>Learned Flight Dynamics</h3>
        <p>Aerodynamic force/moment modeling, nonlinear 6-DOF simulation, local stability analysis, and controller-facing validation.</p>
        <strong class="card-result">First-author abstract accepted · IEEE Aerospace 2027</strong>
      </div>
    </a>

  </div>
</section>

<section id="experience" class="case-study standardbots-case">
  <header class="case-header standardbots-header">
    <div>
      <p class="eyebrow">PROFESSIONAL EXPERIENCE · SUMMER 2026</p>
      <div class="title-with-note">
        <h2>Standard Bots</h2>
        <span class="company-context">Series C industrial robotics startup</span>
        <a class="text-link company-link" href="https://standardbots.com/" target="_blank" rel="noopener noreferrer">Website ↗</a>
      </div>
    </div>
  </header>

  <p class="case-lede standardbots-lede">
    Designed and commissioned mechanical hardware and test infrastructure for six-axis industrial robots across CAD,
    load-path analysis, static FEA, fabrication, assembly, instrumentation, and validation.
    My work focused on applying representative loads, screening joint reliability before full robot assembly,
    and building robust interfaces for high-load production test equipment.
  </p>

  <div class="metric-row three">
    <div>
      <strong>100 hr</strong>
      <span>automated loaded burn-in</span>
    </div>
    <div>
      <strong>&gt;2.5 kN·m</strong>
      <span>momentary interface load verified</span>
    </div>
    <div>
      <strong>1st at company</strong>
      <span>loaded joint screening before full robot assembly</span>
    </div>
  </div>

  <div class="standardbots-fixture-grid">
    <figure class="figure-card">
      <img class="fixture-image"
           src="assets/standardbots_test_hardware.jpg"
           alt="Loaded burn-in station fixture developed at Standard Bots">
      <figcaption>
        <strong>Automated loaded burn-in fixture.</strong>
        Built station used to screen joints under representative load before full robot assembly.
      </figcaption>
    </figure>

<figure class="figure-card">
  <video class="cad-video"
         autoplay muted loop playsinline controls preload="metadata"
         poster="assets/standardbots_test_hardware.jpg">
    <source src="assets/Loaded%20Burn-in%20View%20+%20Still.mp4" type="video/mp4">
  </video>
  <figcaption>
    <strong>Exploded CAD sequence.</strong>
    Fixture architecture, coupling stack, support structure, and test-side interfaces coming together.
  </figcaption>
</figure>

  </div>

  <div class="workstream-grid">
    <article>
      <span>01</span>
      <h3>Automated load-testing station</h3>
      <p>
        Designed an automated pre-assembly burn-in station that applied representative torque during long-duration cycling,
        integrated torque and position sensing, and screened joints before complete robot assembly.
      </p>
    </article>

<article>
  <span>02</span>
  <h3>High-load dynamometer interface</h3>
  <p>
    Designed a precision mechanical interface and checked bolted, doweled, keyed, and shaft load paths
    with hand calculations and static FEA before releasing the manufactured part.
  </p>
</article>

<article>
  <span>03</span>
  <h3>Assembly, checkout + production support</h3>
  <p>
    Assembled and calibrated three complete robot arms, programmed checkout motion routines,
    improved technician-facing build instructions, and trained technicians.
  </p>
</article>

  </div>

  <div class="evidence-grid">
    <figure class="figure-card assembly-photo">
      <img src="assets/standardbots_build_photo.jpg"
           alt="Kevin Armstrong assembling and calibrating a Standard Bots industrial robot arm">
      <figcaption>
        <strong>Assembly + calibration.</strong>
        Bringing up and validating a completed robot arm.
      </figcaption>
    </figure>

<figure class="figure-card">
  <video autoplay muted loop playsinline controls preload="metadata"
         poster="assets/standardbots_motion_poster.jpg">
    <source src="assets/standardbots_motion_routine.mp4" type="video/mp4">
  </video>
  <figcaption>
    <strong>Checkout routine.</strong>
    Arm executing a motion routine I programmed while bringing up the completed assembly.
  </figcaption>
</figure>

  </div>
</section>

<section id="bwb" class="case-study">
  <header class="case-header split">
    <div>
      <p class="eyebrow">EXPERIMENTAL AERODYNAMICS</p>
      <h2>Blended-Wing-Body Aircraft</h2>
    </div>

<a class="text-link" href="assets/BWB_Project_Showcase_Tufts%20(4).html">First test technical showcase ↗</a>

  </header>

  <h3 id="bwb-second" class="bwb-campaign-heading">Revised model · Second test</h3>

  <div class="bwb-hero-media">
    <figure class="figure-card bwb-fog-photo">
      <img src="assets/bwb_fog_hero.jpg"
           alt="Fog passing around the new blended-wing-body model in the wind tunnel">
      <figcaption><strong>New configuration.</strong> Fog visualization in the wind tunnel.</figcaption>
    </figure>
    <figure class="figure-card bwb-fog-video">
      <video autoplay muted loop playsinline controls preload="metadata" poster="assets/bwb_fog_hero.jpg"
             aria-label="Fog visualization around the new blended-wing-body model">
        <source src="assets/bwb_fog_flow.mp4" type="video/mp4">
        Your browser does not support this video.
      </video>
      <figcaption><strong>Flow in motion.</strong> Watch the fog move past the model.</figcaption>
    </figure>
  </div>

  <p class="case-lede single">
    The fog test above is my second BWB test article. The first combined CFD, force-balance measurements, and tufts;
    its inboard flow behavior shaped the questions I took into a revised geometry, a new tunnel sweep, and a mobile rig.
  </p>

  <div class="case-block">
    <div class="case-block-copy">
      <span class="step">SECOND TEST / GEOMETRY + AIRFOIL</span>
      <h3>Revised CAD and MH45 section choice</h3>
      <p>
        The revised outer mold line blends a raised centerbody into swept outer panels. I selected MH45 for its low
        section pitching moment, relevant to a tailless layout without a conventional horizontal tail; its relative
        thickness is 9.85%. The tunnel test examined the complete three-dimensional model, not just the
        <a href="https://www.mh-aerotools.de/airfoils/mh45koo.htm" target="_blank" rel="noopener noreferrer">isolated airfoil ↗</a>.
      </p>
    </div>

    <div class="media-grid bwb-design-grid">
      <figure class="figure-card">
        <a href="assets/bwb_new_cad_top.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size planform CAD view">
          <img src="assets/bwb_new_cad_top.png" alt="Top CAD view of the revised blended-wing-body model">
        </a>
        <figcaption><strong>Planform CAD</strong></figcaption>
      </figure>
      <figure class="figure-card">
        <a href="assets/bwb_new_cad_iso.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size isometric CAD view">
          <img src="assets/bwb_new_cad_iso.png" alt="Isometric CAD view of the revised blended-wing-body model">
        </a>
        <figcaption><strong>Isometric CAD</strong></figcaption>
      </figure>
      <figure class="figure-card">
        <a href="assets/bwb_mh45_profile.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size MH45 airfoil profile">
          <img src="assets/bwb_mh45_profile.png" alt="Outline of the MH45 airfoil plotted against normalized chord">
        </a>
        <figcaption><strong>MH45 airfoil</strong></figcaption>
      </figure>
    </div>
  </div>

  <div class="case-block bwb-sweep-block">
    <div class="case-block-copy">
      <span class="step">SECOND TEST / WIND-TUNNEL SWEEP</span>
      <h3>Lift and efficiency across the measured angle range</h3>
      <p>
        The new model was tested from −6° to 30° at 20–60 mph. Lift increases through most of the sweep,
        while the 28° to 30° points show a consistent high-angle roll-over. Peak L/D occurs at a lower angle
        than peak lift.
      </p>
    </div>

    <div class="bwb-re-table-wrap">
      <table class="bwb-re-table" aria-label="Airspeed and chord Reynolds number for the revised BWB wind-tunnel sweep">
        <tbody>
          <tr><th scope="row">Airspeed</th><td>20 mph</td><td>30 mph</td><td>40 mph</td><td>50 mph</td><td>60 mph</td></tr>
          <tr><th scope="row">Reynolds no.</th><td>≈35,000</td><td>≈53,000</td><td>≈70,000</td><td>≈88,000</td><td>≈106,000</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bwb-re-note">Chord-based Reynolds number is dimensionless. Run 4 medians use an estimated 60.2 mm mean chord.</p>

    <div class="media-grid two">
      <figure class="figure-card bwb-performance-plot">
        <img src="assets/bwb_new_cl_vs_aoa.png" alt="New BWB lift coefficient versus angle of attack at 20 to 60 mph">
        <figcaption><strong>Lift.</strong> New-configuration wind-tunnel sweep.</figcaption>
      </figure>
      <figure class="figure-card bwb-performance-plot">
        <img src="assets/bwb_new_ld_vs_aoa.png" alt="New BWB lift-to-drag ratio versus angle of attack at 20 to 60 mph">
        <figcaption><strong>Efficiency.</strong> L/D across the same angle and speed range.</figcaption>
      </figure>
    </div>
  </div>

  <div class="case-block">
    <div class="case-block-copy">
      <span class="step">SECOND TEST / MOBILE RIG</span>
      <h3>A second way to observe the model in motion</h3>
      <p>
        I mounted the revised model above a small wheeled platform and ran it outdoors.
        The rig and video document a qualitative physical test; the wind tunnel is the source of measured aerodynamic data.
      </p>
    </div>

    <div class="media-grid two bwb-rig-grid">
      <figure class="figure-card">
        <img src="assets/bwb_mobile_rig.jpg" alt="New blended-wing-body model mounted above the mobile test rig">
        <figcaption><strong>Test rig.</strong> The revised model mounted above the wheeled platform.</figcaption>
      </figure>
      <figure class="figure-card">
        <video controls playsinline preload="metadata" poster="assets/bwb_mobile_rig.jpg"
               aria-label="Outdoor run of the blended-wing-body mobile test rig">
          <source src="assets/bwb_mobile_rig_run.mp4" type="video/mp4">
          Your browser does not support this video.
        </video>
        <figcaption><strong>Outdoor run.</strong> The mobile rig carrying the model.</figcaption>
      </figure>
    </div>
  </div>

  <div id="bwb-first" class="case-block bwb-first-test">
    <div class="bwb-first-intro">
      <div class="case-block-copy">
        <span class="step">ORIGINAL MODEL / FIRST TEST</span>
        <h3>CFD and tufts revealed inboard-first separation</h3>
        <p>
          I simulated the original model from −2° to +8°, then tested a 1:1 FDM article in the tunnel through 20°.
          At 14–16°, the tufts show separation starting near the centerbody while the outer panels remain partly attached.
          That finding informed the revised model above. These are separate test campaigns.
        </p>
      </div>
      <figure class="figure-card bwb-cfd-streamline-still">
        <a href="assets/bwb_first_cfd_streamline_still.png" target="_blank" rel="noopener noreferrer"
           aria-label="Open first-test CFD streamline view">
          <img src="assets/bwb_first_cfd_streamline_still.png"
               alt="CFD streamline view around the original blended-wing-body model">
        </a>
        <figcaption><strong>First-test CFD.</strong> Flow-field view of the original model.</figcaption>
      </figure>
    </div>

    <div class="bwb-first-evidence">
      <figure class="figure-card bwb-cfd-overview">
        <a href="assets/Aero_Grid_VelX_vs_Pressure_0_4_8%20(3).png" target="_blank" rel="noopener noreferrer"
           aria-label="Open full-size CFD field comparison">
          <img src="assets/Aero_Grid_VelX_vs_Pressure_0_4_8 (3).png"
               alt="Streamwise velocity and surface pressure at 0, 4, and 8 degrees angle of attack">
        </a>
        <figcaption><strong>CFD.</strong> Velocity and pressure at 0°, 4°, and 8°.</figcaption>
      </figure>

      <div class="tuft-grid" aria-label="Tuft flow progression">
        <figure>
          <img src="assets/tuft_prestall.png" alt="Attached BWB tuft flow at low angle of attack">
          <figcaption><strong>0–4°</strong><span>Attached</span></figcaption>
        </figure>
        <figure>
          <img src="assets/tuft_onset.png" alt="Centerbody tufts beginning to curl on the BWB">
          <figcaption><strong>6–10°</strong><span>Inboard disturbance</span></figcaption>
        </figure>
        <figure>
          <img src="assets/tuft_stall.png" alt="Centerbody separation at BWB stall onset">
          <figcaption><strong>14–16°</strong><span>Centerbody separation</span></figcaption>
        </figure>
        <figure>
          <img src="assets/tuft_poststall.png" alt="Post-stall BWB tuft flow with partially attached outer panels">
          <figcaption><strong>18–20°</strong><span>Progressive separation</span></figcaption>
        </figure>
      </div>
    </div>
  </div>

  <details class="technical-details">
    <summary>Technical appendix — first-test CFD coefficient sweep</summary>
    <div class="technical-details-body">
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>AoA</th><th>CL</th><th>CD</th><th>L/D</th></tr>
          </thead>
          <tbody>
            <tr><td>−2°</td><td>−0.0414</td><td>0.0283</td><td>−1.46</td></tr>
            <tr><td>0°</td><td>0.0586</td><td>0.0272</td><td>2.15</td></tr>
            <tr><td>2°</td><td>0.1612</td><td>0.0307</td><td>5.25</td></tr>
            <tr><td>4°</td><td>0.2598</td><td>0.0373</td><td>6.97</td></tr>
            <tr><td>6°</td><td>0.3554</td><td>0.0486</td><td><strong>7.31</strong></td></tr>
            <tr><td>8°</td><td>0.4473</td><td>0.0644</td><td>6.95</td></tr>
          </tbody>
        </table>
      </div>

  <p class="resource-links">
    <a href="assets/BWB_CFD_Summary_.pdf">CFD summary PDF ↗</a>
    <a href="assets/BWB_Project_Showcase_Tufts%20(4).html">Full project showcase ↗</a>
  </p>
</div>

  </details>
</section>

<section id="hycube" class="case-study compact-case">
  <header class="case-header">
    <div>
      <p class="eyebrow">SPACE HARDWARE</p>
      <h2>HyCUBE Hypersonic Reentry Vehicle</h2>
    </div>
  </header>

  <div class="media-grid two hycube-context">
    <figure class="figure-card">
      <img src="assets/HyCubeINAir.png"
           alt="HyCUBE payload during high-altitude flight">
      <figcaption><strong>High-altitude flight.</strong> HyCUBE payload during the balloon mission.</figcaption>
    </figure>

<figure class="figure-card">
  <img src="assets/hycube_mission_graphic.webp"
       alt="HyCUBE mission profile showing balloon ascent, release, and reentry">
  <figcaption><strong>Mission architecture.</strong> Balloon ascent, release, reentry experiment, and Iridium data return.</figcaption>
</figure>

  </div>

  <div class="hycube-detail-grid">
    <div class="hycube-copy-panel">
      <p class="case-lede">
        Hypersonic entry exposes vehicles to extreme aerothermal heating, making reliable temperature measurements essential for validating thermal-protection-system performance.
        Built, wired, and programmed a thermocouple calibration rig for flight instrumentation,
        then characterized probe configurations against a reference and supported payload integration,
        high-altitude flight operations, recovery, and post-flight validation.
      </p>

  <div class="hycube-contributions">
    <article>
      <h3>Calibration &amp; analysis</h3>
      <p>Used Arduino DAQ and cold-junction compensation to characterize probes from 50–155°C with regression and agreement analysis.</p>
    </article>
    <article>
      <h3>Flight integration</h3>
      <p>Secured payload hardware, tracked Iridium telemetry to approximately 90,000 ft, recovered the payload, and validated post-flight data.</p>
    </article>
  </div>

  <div class="metric-grid two">
    <div class="metric">
      <strong>50–155°C</strong>
      <span>probe characterization range</span>
    </div>
    <div class="metric">
      <strong>~90,000 ft</strong>
      <span>high-altitude flight and recovery</span>
    </div>
  </div>
</div>

<figure class="figure-card hycube-plot-card">
  <img src="assets/hycube_validation_2up.png"
       alt="HyCUBE thermocouple parity and temperature-error validation plots">
  <figcaption><strong>Calibration validation.</strong> Parity and residual error across the 50–155°C probe-characterization range.</figcaption>
</figure>

<figure class="figure-card hycube-ground-photo">
  <img src="assets/hycube_balloon_preflight.jpeg"
       alt="Kevin Armstrong integrating the HyCUBE payload before balloon release">
  <figcaption><strong>Preflight integration.</strong> Securing payload hardware before balloon release.</figcaption>
</figure>

<figure class="figure-card hycube-plot-card secondary">
  <img src="assets/hycube_agreement_2up.png"
       alt="HyCUBE agreement and sensitivity plots across thermocouple probe configurations">
  <figcaption><strong>Agreement + sensitivity.</strong> Bias, limits of agreement, and fitted sensitivity across probe configurations.</figcaption>
</figure>

  </div>
</section>


<section id="rotorcraft" class="case-study compact-case">
  <header class="case-header split">
    <div>
      <p class="eyebrow">FLIGHT DYNAMICS RESEARCH</p>
      <h2>Rotorcraft Flight Dynamics Research</h2>
    </div>

<span class="status-pill">First-author abstract accepted · IEEE Aerospace 2027</span>

  </header>

  <div class="split-feature research-feature">
    <div>
      <p class="case-lede">
        I am developing physics-informed AH-1S rotorcraft surrogates that learn aerodynamic force and moment maps
        while retaining the nonlinear rigid-body equations of motion.
        The research evaluates flight behavior through trajectory rollout, local linearization,
        stability analysis, and feedback tracking alongside one-step accuracy.
      </p>

  <div class="research-points">
    <article>
      <span>01</span>
      <h3>Physics-informed 6-DOF simulator</h3>
      <p>
        Built a PyTorch/JSBSim pipeline coupling learned force/moment maps to nonlinear rigid-body dynamics
        across 56 maneuver trajectories, 8 aircraft states, and multiple speed regimes.
      </p>
    </article>

    <article>
      <span>02</span>
      <h3>Rollout + local dynamic fidelity</h3>
      <p>
        A past-12 temporal model cut held-out rollout geomean RMSE from 0.06498 to 0.02293 (64.7%);
        GroupDRO reduced mean locally unstable-mode incidence from 0.771 to 0.302 (60.8%).
      </p>
    </article>

    <article>
      <span>03</span>
      <h3>Controller-facing validation</h3>
      <p>
        Developed local A/B Jacobian, eigenmode, and paired LQR tracking tests across 27 cases;
        leading variants achieved about 0.91× baseline tracking error with no observed divergence in nonideal tests.
      </p>
    </article>
  </div>

  <p class="paper-note">
    <strong>First-author accepted abstract:</strong>
    “Controller-Facing Rotorcraft Load Surrogates: Response Fidelity and Mechanism-Informed Memory.”
  </p>
</div>

<figure class="figure-card rotorcraft-figure">
  <video autoplay muted loop playsinline controls preload="metadata"
         aria-label="Matched AH-1S recovery comparison across open-loop and neural controllers">
    <source src="assets/ah1s_matched_recovery_20s.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    <strong>Matched recovery comparison.</strong>
    Four controllers replay the same 2-second JSBSim disturbance in a 20-second slow-motion clip.
    <code>confirmation_046</code> had the largest completed open-loop error among 48 locked trials and was
    selected before model ranking. Displacement is reconstructed from velocity error; position and attitude
    are magnified 1000× and 120×.
    <span class="caption-note"><strong>Display scale.</strong> Colored offset radius represents normalized
    eight-state tracking error at 900× scale, grouped across longitudinal, lateral-directional, and
    vertical-pitch channels. This is simulation visualization, not a geographic path or flight-test footage.</span>
  </figcaption>
</figure>

  </div>
</section>

<section id="aero-sae" class="case-study compact-case aero-sae-case">
  <header class="case-header">
    <p class="eyebrow">AEROSPACE SAE AT BERKELEY</p>
    <h2>Wing Rib Design &amp; Layout</h2>
    <p class="case-subtitle">In progress: parametric rib layout and CAD reference geometry</p>
  </header>

  <div class="aero-sae-intro">
    <div class="aero-sae-copy">
      <p>
        I am working on the rib design and layout for Aerospace SAE at Berkeley's current aircraft.
        I built a parametric tool that converts the team's VLM lift distribution, wing planform, and CH10
        reference profile into trial rib stations and 3D exterior contours. I use these outputs to develop
        rib spacing and prepare reference geometry for wing CAD and structural design reviews.
      </p>
      <p>Rib-to-spar interfaces, attachment loads, and final sizing remain open before fabrication.</p>
    </div>
  </div>

  <div class="media-grid two aero-sae-rib-grid">
    <figure class="figure-card">
      <a href="assets/aero_sae_rib_layout.png" target="_blank" rel="noopener noreferrer"
         aria-label="Open full-size upper and lower wing rib layout">
        <img src="assets/aero_sae_rib_layout.png"
             alt="Trial spanwise rib station layout for the top and bottom wings">
      </a>
      <figcaption><strong>Rib station layout.</strong> Trial spacing across both exposed half-spans.</figcaption>
    </figure>
    <figure class="figure-card">
      <a href="assets/aero_sae_rib_contours_3d.png" target="_blank" rel="noopener noreferrer"
         aria-label="Open full-size 3D wing rib contour view">
        <img src="assets/aero_sae_rib_contours_3d.png"
             alt="Three-dimensional exterior rib contours for the top and bottom wings">
      </a>
      <figcaption><strong>3D rib contours.</strong> Reference geometry for sweep, stagger, and incidence.</figcaption>
    </figure>
  </div>
</section>

<section id="drone" class="case-study compact-case">
  <header class="case-header">
    <div>
      <p class="eyebrow">MECHANICAL DESIGN AND FLIGHT TEST</p>
      <h2>Drone Payload Integration</h2>
    </div>
  </header>

  <div class="media-grid two drone-hero">
    <figure class="figure-card drone-cad-card">
      <img src="assets/dronee29Cadrender.png"
           alt="CAD render of drone seed-dispersal attachment mounted under a quadcopter">
      <figcaption><strong>Integrated CAD.</strong> ABS-printed hopper/body, mounting interface, and service-access geometry.</figcaption>
    </figure>
    <figure class="figure-card drone-flight-card">
      <img src="assets/drone_flight_photo.jpg"
           alt="Indoor flight test with the seed-dispersal attachment mounted">
      <figcaption><strong>Loaded flight validation.</strong> Complete attachment mounted under the DJI quadcopter during indoor testing.</figcaption>
    </figure>
  </div>

  <div class="metric-grid four">
    <div class="metric"><strong>15 mph</strong><span>CFD forward-flight condition</span></div>
    <div class="metric"><strong>3.94 N</strong><span>predicted drag</span></div>
    <div class="metric"><strong>0.926 N</strong><span>predicted lift</span></div>
    <div class="metric"><strong>−0.044 N</strong><span>predicted side force</span></div>
  </div>

  <div class="drone-body-grid">
    <div class="drone-copy">
      <p>
        External payloads can alter an aircraft’s mass distribution, aerodynamics, stability, and controllability,
        so the attachment had to be engineered as part of the flight vehicle.
        On a four-person team, I owned mounting placement, aerodynamic outer geometry, maintenance access,
        and DfAM for a 418 g ABS-printed seed-dispersal attachment, then validated retention and aircraft integration
        on a DJI quadcopter through loaded flight testing.
      </p>
      <p>
        I ran a 15 mph CFD study that predicted 3.94 N drag, 0.926 N lift, and −0.044 N side force.
        The initial geometry showed unfavorable leading-edge separation, so I redesigned the forward face
        from flat to curved to improve aerodynamic integration before final flight testing.
      </p>
      <p>
        The payload also required a compact dispensing mechanism: a gravity-fed hopper/ramp with a belt-driven drivetrain,
        4.875:1 HTD reduction (16T → 78T), printed pulleys, interference-fit bearings,
        and a custom shaft/bearing stack packaged beneath the hopper.
      </p>
    </div>

<figure class="figure-card drone-cfd-pair">
  <div class="drone-cfd-inner">
    <img src="assets/e29DronePressure.png"
         alt="Static pressure result for the drone seed-dispersal attachment at 15 mph">
    <img src="assets/e29dronevel.png"
         alt="Velocity field result for the drone seed-dispersal attachment at 15 mph">
  </div>
  <figcaption><strong>15 mph CFD.</strong> Pressure and velocity fields used to quantify loads and drive the leading-edge redesign.</figcaption>
</figure>

  </div>
</section>

<footer class="portfolio-footer">
  <span>Kevin Armstrong II · UC Berkeley Mechanical Engineering</span>
  <div>
    <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=kevarm2028@berkeley.edu"
       target="_blank" rel="noopener noreferrer">Email</a>
    <a href="https://www.linkedin.com/in/kevin-armstrong-ii-647125319/"
       target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </div>
</footer>
