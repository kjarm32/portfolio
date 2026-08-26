<nav class="portfolio-nav" aria-label="Portfolio navigation">
  <a class="portfolio-brand" href="#top">KA</a>
  <div class="portfolio-nav-links">
    <a href="#experience">Experience</a>
    <a href="#bwb">Aircraft</a>
    <a href="#rotorcraft">Research</a>
    <a href="#hycube">Flight Hardware</a>
  </div>
</nav>

<a id="top"></a>

<section class="hero-compact">
  <div class="hero-copy">
    <p class="eyebrow">UC BERKELEY · MECHANICAL ENGINEERING ’28</p>
    <h1>Kevin Armstrong II</h1>
     <p class="hero-title">Aerospace systems, robotics hardware, and experimental aerodynamics.</p>
    <p class="hero-summary">
      I build engineering systems from geometry and first-principles analysis through fabrication,
      instrumentation, and physical test.
    </p>
    <div class="hero-links">
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

<section class="experience-brief" aria-label="Experience overview">
  <div class="experience-brief-item">
    <span>ROBOTICS HARDWARE</span>
    <strong>Standard Bots</strong>
    <p>Mechanical Design &amp; Test Intern · Long Island, New York</p>
  </div>

  <div class="experience-brief-item">
    <span>AEROSPACE SYSTEMS</span>
    <strong>UMN Aerospace Systems Lab</strong>
    <p>Aerospace Systems Intern · HyCUBE Hypersonic Reentry Vehicle · NASA Minnesota Space Grant</p>
  </div>

  <div class="experience-brief-item">
    <span>FLIGHT DYNAMICS RESEARCH</span>
    <strong>UC Berkeley</strong>
    <p>Learned rotorcraft dynamics · IEEE Aerospace 2027 accepted abstract</p>
  </div>
</section>

<section id="featured-work" class="featured-work">
  <header class="section-heading">
    <p class="eyebrow">SELECTED ENGINEERING</p>
    <h2>Work</h2>
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
        <p>Industrial-robot test infrastructure, high-load interfaces, assembly, calibration, and production validation.</p>
        <strong class="card-result">100 hr loaded burn-in</strong>
      </div>
    </a>

    <a class="featured-card" href="#bwb">
      <div class="featured-card-media">
        <img src="assets/IMG_3685 (1).jpeg"
             alt="Blended-wing-body model mounted in a wind tunnel">
      </div>
      <div class="featured-card-copy">
        <span class="card-kicker">AIRCRAFT DESIGN + AERODYNAMICS</span>
        <h3>Blended-Wing-Body Aircraft</h3>
        <p>Outer-mold-line design, CFD verification, FDM fabrication, force-balance testing, and tuft visualization.</p>
        <strong class="card-result">14–16° stall onset</strong>
      </div>
    </a>

    <a class="featured-card" href="#rotorcraft">
      <div class="featured-card-media dark-media">
        <img src="assets/rotorcraft_matched_trajectory_comparison_v3.gif"
             alt="Matched rotorcraft trajectory comparison">
      </div>
      <div class="featured-card-copy">
        <span class="card-kicker">FLIGHT DYNAMICS + ML</span>
        <h3>Learned Rotorcraft Dynamics</h3>
        <p>Physics-informed force and moment models evaluated through trajectory rollout and controller-facing behavior.</p>
        <strong class="card-result">IEEE Aerospace 2027</strong>
      </div>
    </a>

    <a class="featured-card" href="#hycube">
      <div class="featured-card-media">
        <img src="assets/HyCubeINAir.png"
             alt="HyCUBE payload during high-altitude flight">
      </div>
      <div class="featured-card-copy">
        <span class="card-kicker">AEROSPACE SYSTEMS</span>
        <h3>HyCUBE Reentry Vehicle</h3>
        <p>Flight instrumentation, calibration, payload integration, high-altitude operations, recovery, and validation.</p>
        <strong class="card-result">~90,000 ft flight</strong>
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
      </div>
      <p class="case-subtitle">Mechanical Design &amp; Test Intern · Long Island, New York</p>
    </div>
  </header>

  <p class="case-lede standardbots-lede">
    Industrial robots must maintain positioning accuracy under repeated production loads, making joint reliability and validation critical to reducing downstream failures and rework.
    Designed mechanical hardware and test infrastructure for six-axis industrial robots across CAD,
    structural analysis, fabrication, assembly, instrumentation, and validation.
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
      <strong>~75 hr</strong>
      <span>downstream disassembly / rework avoided</span>
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
        Designed an automated pre-assembly burn-in station that applied representative load for long-duration testing,
        integrated torque and position sensing, and screened joints before complete robot assembly.
      </p>
    </article>

    <article>
      <span>02</span>
      <h3>High-load dynamometer interface</h3>
      <p>
        Designed a precision mechanical interface and checked bolted, doweled, and keyed load paths
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
      <h2>Blended-Wing-Body Aircraft Design &amp; Aerodynamic Validation</h2>
      <p class="case-subtitle">Outer-mold-line design · CFD verification · FDM fabrication · force-balance testing · tuft flow visualization</p>
    </div>

    <a class="text-link" href="assets/BWB_Project_Showcase_Tufts%20(4).html">Full technical showcase ↗</a>
  </header>

  <figure class="case-hero">
    <img src="assets/IMG_3685 (1).jpeg"
         alt="3D-printed blended-wing-body model mounted to a three-component wind tunnel balance">
  </figure>

  <div class="metric-grid four">
    <div class="metric">
      <strong>−2° → 20°</strong>
      <span>wind-tunnel test envelope</span>
    </div>
    <div class="metric">
      <strong>14–16°</strong>
      <span>stall onset</span>
    </div>
    <div class="metric">
      <strong>3.36 N</strong>
      <span>peak normal force at 18°</span>
    </div>
    <div class="metric">
      <strong>7.31</strong>
      <span>peak CFD L/D at 6°</span>
    </div>
  </div>

  <p class="case-lede single">
    Blended-wing-body aircraft integrate the wing and fuselage into a single lifting form, reducing drag and offering significant fuel-burn potential over conventional tube-and-wing aircraft.
    I designed a custom blended-wing-body outer mold line in SOLIDWORKS, established a repeatable pre-stall CFD workflow,
    fabricated a 1:1 FDM model, and extended the physical test campaign through 20° angle of attack to characterize the stall sequence.
  </p>

  <div class="case-block">
    <div class="case-block-copy">
      <span class="step">01 / DESIGN</span>
      <h3>From cross-sections to a physical test article</h3>
      <p>
        A multi-section loft with guide curves blends a custom centerbody into the outer panels.
        The geometry moved directly from CAD into simulation, FDM fabrication, and wind-tunnel testing.
      </p>
    </div>

    <div class="media-grid two">
      <figure class="figure-card bwb-geometry-card bwb-sketch-card">
        <img src="assets/Cadbwbsketch.png" alt="BWB concept sketch and geometry development">
        <figcaption><strong>Geometry definition.</strong> Cross-sections and guide curves used to shape the BWB outer mold line.</figcaption>
      </figure>
      <figure class="figure-card bwb-geometry-card bwb-loft-card">
        <img src="assets/BWB_Aero_CADd1.png" alt="SOLIDWORKS loft used to construct the BWB outer mold line">
        <figcaption><strong>SOLIDWORKS loft definition.</strong> Multi-section loft and guide-curve setup used to generate the final outer mold line.</figcaption>
      </figure>
    </div>
  </div>

  <div class="case-block">
    <div class="case-block-copy">
      <span class="step">02 / CFD</span>
      <h3>Checked numerical sensitivity before using the sweep for design conclusions</h3>
      <p>
        Steady external-flow cases covered −2° to +8° at 40 mph.
        A domain study at 4° changed CL by 0.17% and CD by 0.43%;
        medium-to-fine mesh refinement changed CL by 1.25% and CD by 0.37%.
      </p>
    </div>

    <figure class="figure-card wide-figure bwb-cfd-overview">
      <img src="assets/Aero_Grid_VelX_vs_Pressure_0_4_8 (3).png"
           alt="Streamwise velocity and surface pressure at 0, 4, and 8 degrees angle of attack">
      <figcaption><strong>CFD field comparison.</strong> Streamwise-velocity and surface-pressure views compared at 0°, 4°, and 8° angle of attack.</figcaption>
    </figure>

    <div class="verification-grid">
      <div>
        <span>DOMAIN SENSITIVITY</span>
        <strong>ΔCL = 0.17%</strong>
        <small>ΔCD = 0.43% at 4°</small>
      </div>
      <div>
        <span>MESH REFINEMENT</span>
        <strong>ΔCL = 1.25%</strong>
        <small>ΔCD = 0.37% from medium → fine</small>
      </div>
      <div>
        <span>CONVERGENCE CHECK</span>
        <strong>100+ iterations</strong>
        <small>beyond solver-goal convergence</small>
      </div>
    </div>
  </div>

  <div class="case-block">
    <div class="case-block-copy">
      <span class="step">03 / TEST</span>
      <h3>Extended the experiment beyond the CFD range to capture stall</h3>
      <p>
        The tunnel sweep ran from −2° through 20° using a three-component balance, wind-off tare,
        point-by-point dynamic-pressure correction, and 25 Hz acquisition.
        Stall onset appears around 14–16°; normal force peaks at 3.36 N at 18° and falls only about 1% by 20°.
      </p>
    </div>

    <div class="media-grid two">
      <figure class="figure-card bwb-performance-plot">
        <img src="assets/bwb_cfd_sweep_plot.png"
             alt="BWB CFD lift coefficient and lift-to-drag ratio across angle of attack">
        <figcaption>Pre-stall CFD sweep.</figcaption>
      </figure>
      <figure class="figure-card bwb-performance-plot">
        <img src="assets/bwb_wind_tunnel_run4_plot.png"
             alt="BWB wind tunnel normal force and pitching moment across angle of attack">
        <figcaption>Wind-tunnel run through 20°.</figcaption>
      </figure>
    </div>
  </div>

  <div class="case-block">
    <div class="case-block-copy">
      <span class="step">04 / UNDERSTAND</span>
      <h3>The force balance showed when stall began; tufts showed where it began</h3>
      <p>
        Tufts show the centerbody becoming disturbed before the outer panels.
        At 14–16° the inboard flow is clearly separated while the tips remain partially attached,
        matching the gradual roll-over in the force data.
      </p>
    </div>

    <div class="tuft-grid">
      <figure>
        <img src="assets/tuft_prestall.png" alt="Attached BWB tuft flow at low angle of attack">
        <figcaption><strong>0–4°</strong><span>Attached baseline</span></figcaption>
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
        <figcaption><strong>18–20°</strong><span>Progressive post-stall</span></figcaption>
      </figure>
    </div>
  </div>

  <div class="finding-grid">
    <article>
      <span>01</span>
      <h3>Progressive stall onset</h3>
      <p>Force and tuft evidence converge on a 14–16° onset window.</p>
    </article>
    <article>
      <span>02</span>
      <h3>Peak CFD efficiency at 6°</h3>
      <p>Within the simulated range, L/D peaks at 7.31 before drag growth overtakes lift growth.</p>
    </article>
    <article>
      <span>03</span>
      <h3>Moment changes before peak normal force</h3>
      <p>Pitching moment turns before the normal-force peak, consistent with loading redistribution near stall.</p>
    </article>
    <article>
      <span>04</span>
      <h3>Outer panels remain partly attached</h3>
      <p>Tip tufts stay partly ordered through 20°, explaining the soft force roll-over.</p>
    </article>
  </div>

  <details class="technical-details">
    <summary>Technical appendix — current CFD coefficient sweep</summary>
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

<section id="rotorcraft" class="case-study compact-case">
  <header class="case-header split">
    <div>
      <p class="eyebrow">RESEARCH · FLIGHT DYNAMICS</p>
      <h2>Learned Rotorcraft Dynamics for Controller-Facing Simulation</h2>
      <p class="case-subtitle">Physics-informed force/moment modeling · nonlinear 6-DOF rollout · local stability · LQR tracking</p>
    </div>

    <span class="status-pill">IEEE Aerospace 2027 · Accepted</span>
  </header>

  <div class="split-feature research-feature">
    <div>
      <p class="case-lede">
        Rotorcraft are dynamically complex and often inherently unstable, making accurate, control-ready models essential for simulation and flight-control design.
        I am developing physics-informed AH-1S rotorcraft surrogates that learn aerodynamic force and moment maps
        while retaining the nonlinear rigid-body equations of motion. The research asks whether a learned model
        preserves controller-facing behavior under rollout, local linearization, and feedback tracking—not only whether
        it matches one-step data.
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
          <h3>Rollout + local differential fidelity</h3>
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
        <strong>Accepted abstract:</strong>
        “From Accurate Predictions to Controller-Facing Learned Rotorcraft Surrogates: Stability &amp; Tracking.”
      </p>
    </div>

    <figure class="figure-card rotorcraft-figure">
      <img src="assets/rotorcraft_matched_trajectory_comparison_v3.gif"
           alt="Matched rotorcraft trajectory rollout comparison">
      <figcaption>
        <strong>Same-pulse trajectory response.</strong>
        Augmented-memory GroupDRO and open-loop dynamics receive the same control pulse but produce different flight paths, exposing controller-facing differences that one-step prediction error alone does not capture.
</figcaption>
    </figure>
  </div>
</section>

<section id="hycube" class="case-study compact-case">
  <header class="case-header">
    <div>
      <p class="eyebrow">NASA MINNESOTA SPACE GRANT · UMN SMALL SATELLITE PROGRAM</p>
      <h2>HyCUBE Hypersonic Reentry Vehicle</h2>
      <p class="case-subtitle">Thermal instrumentation · calibration · payload integration · high-altitude flight operations</p>
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

      <ul class="clean-list">
        <li>
          Used Arduino DAQ and cold-junction compensation to characterize probe configurations
          from 50–155°C using regression and agreement analysis.
        </li>
        <li>
          Integrated and secured payload hardware, tracked telemetry and state estimates over the Iridium satellite network
          to approximately 90,000 ft, recovered the payload, and validated post-flight data.
        </li>
      </ul>

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

<section id="drone" class="case-study compact-case">
  <header class="case-header">
    <div>
      <p class="eyebrow">MECHANICAL INTEGRATION · AERODYNAMIC ANALYSIS · FLIGHT TEST</p>
      <h2>Drone Seed-Dispersal Attachment</h2>
      <p class="case-subtitle">CAD · DfAM · CFD analysis · mechanical integration · loaded flight testing</p>
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
        External payloads can alter an aircraft’s mass distribution, aerodynamics, stability, and controllability, so drone attachments must be engineered as part of the flight vehicle.
        On a four-person team, I owned mounting placement, aerodynamic outer geometry, maintenance access,
        and DfAM for a 418 g ABS-printed seed-dispersal attachment, then validated retention and aircraft integration
        on a DJI quadcopter through loaded flight testing.
      </p>
      <p>
        The attachment combined a gravity-fed hopper/ramp with a belt-driven dispensing mechanism.
        The drivetrain used a 4.875:1 HTD reduction (16T → 78T), printed pulleys, interference-fit bearings,
        and a custom shaft/bearing stack packaged beneath the hopper.
      </p>
      <p>
        I ran a 15 mph CFD study that predicted 3.94 N drag, 0.926 N lift, and −0.044 N side force,
        then redesigned the leading edge from flat to curved to reduce simulated flow separation and improve
        aerodynamic integration before final flight testing.
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
