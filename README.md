<img src="assets/4headshotatm.JPG"
     alt="Headshot"
     style="float:right; width:135px; height:165px; object-fit:cover; object-position:center 20%; border-radius:10px; margin:0 0 12px 18px;">


Mechanical Engineering student at the University of California, Berkeley, and student-athlete. My work spans aerospace systems, thermal instrumentation, and applied machine learning, with a focus on validated analysis, reproducible workflows, and decision-ready technical communication.

<p align="center"><strong>Aerospace Systems</strong> • <strong>Thermal Instrumentation</strong> • <strong>Applied ML</strong> • <strong>Verification &amp; Validation</strong></p>

<table style="width:100%; border-collapse:separate; border-spacing:18px 16px; table-layout:fixed;">
  <tr>
    <td style="vertical-align:top;">
      <a href="#concept-aircraft-blended-wing-body-aerodynamics">
        <img src="assets/BWB_Tuftinit.jpeg"
             alt="Blended-wing-body aerodynamic validation project"
             style="width:100%; height:230px; object-fit:cover; border-radius:12px; display:block; border:1px solid #2a3542;">
      </a>
      <p style="margin:10px 0 0 0;">
        <a href="#concept-aircraft-blended-wing-body-aerodynamics" class="card-title"><strong>Blended-Wing-Body Aerodynamics</strong></a><br>
        <span class="card-subtitle">Validated CFD and planned tufting comparison.</span>
      </p>
    </td>

  <td style="vertical-align:top;">
      <a href="#hycube-cubesat-thermal--instrumentation-payload">
        <img src="assets/HyCubeINAir.png"
             alt="HyCUBE thermal instrumentation payload"
             style="width:100%; height:230px; object-fit:cover; object-position:center 35%; border-radius:12px; display:block; border:1px solid #2a3542;">
      </a>
      <p style="margin:10px 0 0 0;">
        <a href="#hycube-cubesat-thermal--instrumentation-payload" class="card-title"><strong>HyCUBE Thermal Payload</strong></a><br>
        <span class="card-subtitle">Calibration, validation, and flight-ready instrumentation.</span>
      </p>
    </td>
  </tr>

  <tr>
    <td style="vertical-align:top;">
      <div class="dark-figure-frame">
        <a href="#post-stroke-imaging-triage-detecting-intracranial-bleeding-on-head-ct">
          <img src="assets/gradcam_grid_imagenet_maskedcrop%20(1).png"
               alt="Medical imaging ML project"
               style="width:100%; height:190px; object-fit:contain; display:block;">
        </a>
      </div>
      <p style="margin:10px 0 0 0;">
        <a href="#post-stroke-imaging-triage-detecting-intracranial-bleeding-on-head-ct" class="card-title"><strong>Medical Imaging ML</strong></a><br>
        <span class="card-subtitle">Reproducible CT modeling with interpretability checks.</span>
      </p>
    </td>

   <td style="vertical-align:top;">
      <div class="dark-figure-frame">
        <a href="#wind-turbine-designbuildtest-e26">
          <img src="assets/windturbine_fea_triptych.png"
               alt="Wind turbine design build test project"
               style="width:100%; height:190px; object-fit:contain; display:block;">
        </a>
      </div>
      <p style="margin:10px 0 0 0;">
        <a href="#wind-turbine-designbuildtest-e26" class="card-title"><strong>Wind Turbine Design–Build–Test</strong></a><br>
        <span class="card-subtitle">Prototype iteration supported by testing and FEA review.</span>
      </p>
    </td>
  </tr>
</table>

<p align="center" style="margin: 14px 0 22px 0; color:#6b7280;"><em>Selected work in aerodynamics, aerospace instrumentation, applied machine learning, and test-backed mechanical design.</em></p>

## Quick links
- BWB CFD executive summary: [PDF](assets/BWB%20Executive%20Summary%20(2).pdf)

## Explore Projects
- [Concept Aircraft: Blended-Wing-Body Aerodynamics](#concept-aircraft-blended-wing-body-aerodynamics)
- [HyCUBE: CubeSat Thermal & Instrumentation Payload](#hycube-cubesat-thermal--instrumentation-payload)
- [Post-Stroke Imaging Triage: Detecting Intracranial Bleeding on Head CT](#post-stroke-imaging-triage-detecting-intracranial-bleeding-on-head-ct)
- [Wind Turbine Design–Build–Test (E26)](#wind-turbine-designbuildtest-e26)
- [Reliability-First Automation Under Real-World Constraints (UPRO/SPXU)](#reliability-first-automation-under-real-world-constraints-uprospxu)

---

## Concept Aircraft: Blended-Wing-Body Aerodynamics

Validated low-speed CFD of a blended-wing-body aircraft  
Aerodynamics • CFD verification (mesh/domain) • Coefficient extraction • Clean post-processing

<p align="center">
  <a href="assets/BWB%20Executive%20Summary%20(2).pdf">
    <img src="assets/Aero_Grid_VelX_vs_Pressure_0_4_8%20%283%29.png" width="92%">
  </a>
</p>

<p align="center">
  <a href="assets/BWB%20Executive%20Summary%20(2).pdf">Open the executive summary (PDF)</a>
</p>

Blended-wing-body concepts aim to improve efficiency by generating lift across more of the airframe, not just the wings. I used steady-state CFD in SOLIDWORKS Flow Simulation to estimate lift/drag coefficients across angle-of-attack and produced comparable flow/pressure visualizations backed by convergence, domain, and mesh sensitivity checks.

**Highlights**
- AoA sweep: −2° → +8° at ~40 mph; peak efficiency L/D ≈ 7.3 near ~6°
- Verification: domain effect <0.5%; mesh medium→fine ΔCL ≈ 1.25%
- Comparison-ready visuals: fixed views/scales across cases (velocity cuts + pressure maps)

**My contributions**
- Ran steady-state CFD across AoA and extracted lift/drag trends (CL/CD)
- Verified results with convergence stability, domain sensitivity, and mesh sensitivity checks
- Produced clean figure sets for cross-case comparison and packaged results into an executive summary

**Next step**
- Physical validation: preparing a tufted prototype and running a small wind-tunnel campaign to compare measured lift/drag vs. AoA against the CFD sweep

<p align="center">Tufting preparation for physical validation</p>
<p align="center">
  <img src="assets/BWB_Tuftinit.jpeg" width="72%">
</p>
<p align="center">
  <em>Tufted BWB prototype prepared for upcoming wind-tunnel / flow-visualization validation.</em>
</p>

<p align="center">Aerodynamic Coefficients vs. Angle of Attack</p>
<p align="center">
  <img src="assets/bwb_cfd_summary1.png" width="92%">
</p>


---

## HyCUBE: CubeSat Thermal & Instrumentation Payload

Thermocouple calibration + validation workflow for flight-readiness decisions  
Aerospace Systems + Instrumentation • Sensor calibration • Validation • Flight-readiness testing

<p align="center">
  <img src="assets/HyCubeINAir.png" width="48%">
  <img src="assets/hycube_mission_graphic.webp" width="48%">
</p>

Reliable temperature sensing is a prerequisite for flight-readiness decisions. I built a thermocouple calibration + validation workflow for HyCUBE (Hypersonic Configurable Unit Ballistic Experiment) that converts raw voltage/temperature logs into regression-based calibration fits with confidence bounds and evaluates agreement using parity plots and Bland–Altman analysis.

**Highlights**
- Sensitivity (slope): 19 in ≈ 44.51 µV/°C (R² ≈ 0.499), 25 in ≈ 33.84 µV/°C (R² ≈ 0.377), 30 in ≈ 45.05 µV/°C (R² ≈ 0.542)
- Agreement vs reference: bias ≈ 0.00°C with limits of agreement ≈ ±3.60°C (Bland–Altman)
- Deliverable: calibration summary + figures exported as PNGs for reports and review decks

**My contributions**
- Designed thermocouple calibration experiments and produced decision-ready plots for sensor selection
- Implemented cold-junction compensation and regression-based calibration with confidence bounds
- Validated measurement behavior with parity plots and Bland–Altman limits-of-agreement
- Automated analysis outputs (tables + PNG exports) to keep results reproducible and reviewable
- Supported high-altitude balloon flight operations: payload integration, ground-station setup, flight monitoring, recovery, and post-flight data validation

<p align="center">Validation views (parity + error)</p>
<p align="center">
  <img src="assets/hycube_validation_2up.png" width="92%">
</p>

<p align="center">Agreement + sensitivity</p>
<p align="center">
  <img src="assets/hycube_agreement_2up.png" width="92%">
</p>

<p align="center">Centered calibration fits + 95% confidence bands (shared axes)</p>
<p align="center">
  <img src="assets/hycube_centered_fit_ci_shared_axes(1).png" width="86%">
</p>

---

## Post-Stroke Imaging Triage: Detecting Intracranial Bleeding on Head CT

Slice-level intracranial hemorrhage detection baseline + controlled initialization study (Scratch vs ImageNet vs JEPA)  
Medical Imaging • Applied Deep Learning • Interpretability • Validation focus  
Mofrad Lab collaboration

<p align="center">
  <img src="assets/gradcam_grid_imagenet_maskedcrop%20(1).png" width="86%">
</p>

Intracranial hemorrhage on non-contrast head CT drives time-critical decisions in stroke triage. I built a reproducible slice-level baseline and ran a controlled comparison of three initialization strategies—scratch, ImageNet pretraining, and CT-native student/teacher self-supervised pretraining (JEPA)—using the same supervised training recipe and Grad-CAM checks.

### Highlights
- Fixed labeled split across all runs: 400 positive / 800 negative; held-out validation split (20%), n = 240 slices
- Matched supervised recipe across runs: ResNet-18, BCEWithLogits + pos_weight, dropout head, early stopping
- JEPA pretraining scale study: 10k/25k/50k/100k unlabeled CT slices, 5 SSL epochs each
- Best JEPA result: JEPA-10k achieved val ROC-AUC 0.8465 (eval AUC 0.8463), sensitivity 0.80, specificity 0.706 at threshold 0.5
- JEPA-100k showed a recall-heavy operating regime (eval AUC ~0.773, sensitivity ~0.875, specificity ~0.456 at threshold 0.5), motivating threshold sweeps as a next step

### My contributions
- Built an end-to-end CT preprocessing + training pipeline (DICOM ingestion, HU conversion/windowing, normalization, augmentation, stratified splits)
- Implemented class-imbalance handling (pos_weight and balanced sampling) and a stable fine-tuning setup
- Implemented student/teacher CT self-supervised pretraining (JEPA-style) and transferred encoder checkpoints into supervised fine-tuning
- Produced interpretability visuals (Grad-CAM grids with artifact-aware cropping) to sanity-check model behavior
- Summarized results into a clean deliverable table + run logs for fast lab review

### Validation results (threshold = 0.5)

<table align="center">
  <thead>
    <tr>
      <th>Initialization</th>
      <th>ROC AUC</th>
      <th>Sensitivity</th>
      <th>Specificity</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>JEPA-10k</td>
      <td>0.846</td>
      <td>0.80</td>
      <td>0.706</td>
      <td>Best overall JEPA performance</td>
    </tr>
    <tr>
      <td>JEPA-25k</td>
      <td>~0.83</td>
      <td>~0.86</td>
      <td>~0.57</td>
      <td>Similar AUC; higher recall tradeoff</td>
    </tr>
    <tr>
      <td>JEPA-50k</td>
      <td>~0.826</td>
      <td>~0.775</td>
      <td>~0.681</td>
      <td>Mid-scale checkpoint</td>
    </tr>
    <tr>
      <td>JEPA-100k</td>
      <td>~0.773</td>
      <td>~0.875</td>
      <td>~0.456</td>
      <td>Recall-heavy at 0.5 threshold</td>
    </tr>
  </tbody>
</table>

Next experiments: threshold selection per run (e.g., Youden’s J or fixed sensitivity target) and multi-seed robustness reporting.

---

## Wind Turbine Design–Build–Test (E26)

Iterative prototyping + test-based power characterization  
Rapid prototyping • Wind-tunnel testing • Power characterization • FEA-informed structural check

Ranked #1 / 40 teams in measured electrical power output (final course test). In a 4-person team project, we designed and tested a small wind turbine under manufacturability and performance constraints. We compared candidate blade concepts, fabricated prototypes via 3D printing, and evaluated designs in a wind-tunnel-style setup using voltage/current measurements. Structural sanity checks were performed with linear-static FEA (led by a teammate) and reviewed by the team.

**Highlights**
- Ranked #1 / 40 teams in measured electrical power output (final course test)
- Measured voltage/current across iterations and converted V–I data to comparable power curves/peak power
- Reviewed linear-static FEA assumptions/results to confirm stiffness/strength constraints were reasonable

**My contributions (team of 4)**
- Measurement owner: captured and hand-logged most voltage/current data during testing across runs and iterations
- Performance characterization: converted V–I measurements into comparable power results (curves/peak power) to rank iterations and support the final configuration
- Design input: conducted independent blade/airfoil research and contributed to group selection of blade geometry (airfoil/twist/profile tradeoffs)
- Verification review: double-checked a teammate’s linear-static FEA assumptions/results to confirm stiffness/strength constraints were reasonable

<p align="center">
  <img src="assets/windturbine_fea_triptych.png" width="92%" alt="FEA results: displacement, stress, and factor of safety">
</p>
<p align="center">
  <em>Linear-static FEA sanity check on the tower: displacement, von Mises stress, and factor of safety under representative loading.</em>
</p>

<table style="width:100%; max-width:980px; margin:12px auto; border-collapse:separate; border-spacing:16px 0;">
  <tr>
    <td style="width:62%; vertical-align:middle;">
      <img src="assets/windturbine_power_vs_current.png"
           style="width:100%; height:auto; display:block;"
           alt="Power vs current">
    </td>
    <td style="width:38%; vertical-align:middle;">
      <img src="assets/windturbine_test_setup.jpg"
           style="width:100%; height:auto; display:block; border-radius:8px;"
           alt="Wind turbine test setup">
    </td>
  </tr>
</table>

<p align="center">
  <em>Measured electrical output (power vs current) and the wind-tunnel-style test setup used to capture voltage/current under controlled airflow.</em>
</p>

---

## Reliability-First Automation Under Real-World Constraints (UPRO/SPXU)

Deterministic market-open execution with explicit safety checks and audit logs  
Systems engineering • Deterministic state machine • Cloud-ready execution

I built a reliability-first paper-trading automation system that runs at the U.S. market open, briefly observes two leveraged S&P 500 ETFs (UPRO, SPXU), makes a deterministic winner/leader decision, and executes a single cash-only order with explicit safety checks. This was built as a reliability engineering exercise: predictable behavior under imperfect conditions through fail-closed checks, traceable state transitions, and auditability when APIs or market conditions are unreliable.

<p align="center">
  <img src="assets/upro_spxu_system_diagram1.svg" width="100%">
</p>

**Highlights**
- Deterministic decision logic: fixed open-time observation window + threshold-based winner selection with an explicit end-of-window tie-break
- Constraint-aware execution: whole-share sizing, cash-only allocation, and a dynamic PDT guard that fails closed if account checks can’t be verified
- Reliability guardrails: cancel-stale-orders, fill confirmation with timeouts, and “morning cleanup” to flatten leftover positions safely before a new run
- Auditability: timestamped logs at each state transition (open → observe → decide → route order → confirm fill → hold/exit) for post-run traceability

**My contributions**
- Implemented a state-machine structure with explicit pass/fail branches to make failure modes predictable
- Implemented fail-closed checks (market closed, API unreachable, fill not confirmed) and explicit logging for each exit path
- Built log outputs designed as audit trails (what the system believed, what it did, and when)

---
