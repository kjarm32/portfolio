# Engineering Portfolio

Mechanical Engineering student focused on aerospace systems, thermal modeling/instrumentation, and applied machine learning. I build validated, reproducible engineering workflows backed by clear evidence (plots, summaries, verification checks).

Quick links  
- BWB CFD executive summary: [PDF](assets/BWB%20Executive%20Summary%20(2).pdf)  
- CT Hemorrhage (StrokeNet) 1-page summary: [PDF](assets/CT_Hemorrhage_1page_summary.pdf)  

---

## Table of contents
1. [Concept Aircraft: Blended-Wing-Body Aerodynamics](#concept-aircraft-blended-wing-body-aerodynamics)
2. [HyCUBE: CubeSat Thermal & Instrumentation Payload](#hycube-cubesat-thermal--instrumentation-payload)
3. [StrokeNet: Hemorrhage Detection on Non-Contrast Head CT](#strokenet-hemorrhage-detection-on-non-contrast-head-ct)
4. [Wind Turbine Design–Build–Test (E26)](#wind-turbine-designbuildtest-e26)
5. [Automated Market-Open Execution Bot (UPRO/SPXU)](#automated-market-open-execution-bot-uprospxu)

---

## Concept Aircraft: Blended-Wing-Body Aerodynamics

Validated low-speed CFD of a blended-wing-body aircraft  
Aerodynamics • CFD verification (mesh/domain) • Coefficient extraction + clean post-processing

<p align="center">
  <a href="assets/BWB%20Executive%20Summary%20(2).pdf">
    <img src="assets/BWB_Plane_RelPresIso4deg.png" width="82%">
  </a>
</p>

<p align="center">
  <em>Relative static pressure on the BWB upper surface (α = 4°, V∞ ≈ 40 mph).</em><br>
  <a href="assets/BWB%20Executive%20Summary%20(2).pdf">Open the executive summary (PDF)</a>
</p>

A blended-wing-body aircraft can reduce drag by generating lift with more of the airframe, not just the wings. In this study, I used steady-state CFD in SOLIDWORKS Flow Simulation to estimate lift/drag coefficients across angle-of-attack and to produce clean, comparable flow/pressure visualizations backed by basic verification (convergence, domain, and mesh sensitivity checks).

Next step (in progress): physical validation.  
This project is moving from simulation to test. Next, I’m 3D-printing the final CAD model and running a small wind-tunnel campaign to compare measured force trends (lift/drag vs. angle of attack) against the CFD sweep and quantify where the model matches and where it breaks.

<p align="center">Physical prototype (first draft)</p>
<p align="center">
  <img src="assets/3DPrinted_BWB.jpg" width="72%">
</p>
<p align="center">
  <em>First-draft 3D-printed BWB prototype for upcoming wind-tunnel / flow visualization validation.</em>
</p>

Highlights
- Quantified performance: AoA sweep (−2° → +8° at ~40 mph); peak efficiency L/D ≈ 7.3 near ~6°
- Credibility checks: convergence stability window; domain <0.5% effect; mesh medium→fine ΔCL ≈ 1.25%
- Communication: fixed views/scales for honest cross-case comparison (velocity cuts + pressure maps)

<details>
  <summary>Selected figures</summary>

  <p align="center">Aerodynamic Coefficients vs. Angle of Attack</p>
  <p align="center">
    <img src="assets/bwb_cfd_summary1.png" width="92%">
  </p>

  <p align="center">Flow-field visualization (fixed legends for cross-case comparison)</p>
  <p align="center">
    <img src="assets/Aero_Grid_VelX_vs_Pressure_0_4_8%20%283%29.png" width="92%">
  </p>
</details>

---

## HyCUBE: CubeSat Thermal & Instrumentation Payload

Making CubeSat thermal data trustworthy  
Aerospace Systems + Instrumentation • Sensor calibration + validation • Flight-readiness testing

<p align="center">
  <img src="assets/HyCubeINAir.png" width="48%">
  <img src="assets/hycube_mission_graphic.webp" width="48%">
</p>

Reliable temperature sensing is critical for thermal testing and flight readiness. I built a thermocouple calibration + validation workflow for HyCUBE (Hypersonic Configurable Unit Ballistic Experiment) to support sensor selection and pre-flight verification. The pipeline converts raw voltage/temperature logs into regression-based calibration fits with confidence bounds and evaluates measurement agreement using parity and Bland–Altman analysis.

Results snapshot
- Estimated sensitivity (slope): 19 in ≈ 44.51 µV/°C (R² ≈ 0.499), 25 in ≈ 33.84 µV/°C (R² ≈ 0.377), 30 in ≈ 45.05 µV/°C (R² ≈ 0.542)
- Agreement vs reference: overall bias ≈ 0.00°C with limits of agreement ≈ ±3.60°C (Bland–Altman)
- Deliverable: calibration summary + figures exported as PNGs suitable for reports and review decks

Key contributions
- Designed thermocouple calibration experiments and produced decision-ready plots for sensor selection
- Implemented cold-junction compensation and regression-based calibration with confidence bounds
- Validated measurement behavior with parity + Bland–Altman agreement (bias and limits-of-agreement)
- Automated analysis outputs (tables + PNG exports) to keep results reproducible and reviewable
- Supported high-altitude balloon flight operations: payload integration, ground-station setup, flight monitoring, recovery, and post-flight data validation

<details>
  <summary>Selected figures</summary>

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
</details>

---

## StrokeNet: Hemorrhage Detection on Non-Contrast Head CT

Post-stroke imaging triage: identifying intracranial bleeding on head CT  
Medical Imaging • Applied Deep Learning • Interpretability + validation focus

<p align="center">
  <img src="assets/gradcam_grid_imagenet_maskedcrop%20(1).png" width="86%">
</p>

Rapid identification of intracranial hemorrhage on non-contrast head CT can accelerate triage because hemorrhagic findings drive time-critical decisions and differ from ischemic pathways. This project was motivated by Mofrad Lab discussions on stroke imaging and a concrete question that came up in mentorship feedback: whether CT-native self-supervised pretraining can provide better representations than standard ImageNet pretraining for CT. I built a reproducible slice-level hemorrhage detection baseline and compared three initialization strategies—random initialization (scratch), ImageNet pretraining, and CT-native student/teacher self-supervised pretraining (JEPA)—using a fixed supervised training pipeline and interpretability checks with Grad-CAM.

1-page summary  
- [Open the 1-page project summary (PDF)](assets/CT_Hemorrhage_1page_summary.pdf)

Validation (held-out 20% split, n = 240 slices)  
Same supervised training recipe across runs; only the initialization changed.

<table align="center">
  <thead>
    <tr>
      <th>Initialization</th>
      <th>ROC AUC</th>
      <th>Sensitivity</th>
      <th>Specificity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ImageNet-pretrained</td>
      <td>0.878</td>
      <td>0.70</td>
      <td>0.89</td>
    </tr>
    <tr>
      <td>Scratch (random init)</td>
      <td>0.829</td>
      <td>0.79</td>
      <td>0.74</td>
    </tr>
    <tr>
      <td>JEPA (CT self-supervised)</td>
      <td>0.752</td>
      <td>0.85</td>
      <td>0.53</td>
    </tr>
  </tbody>
</table>

What this shows
- On this small RSNA subset and a lightweight JEPA run, ImageNet pretraining preserved the best overall AUC and specificity.
- CT-native JEPA increased sensitivity (fewer missed hemorrhage slices) but traded off specificity, which is useful as a baseline and a pointer toward longer pretraining and tighter SSL tuning.

Engineering contributions
- Built an end-to-end CT preprocessing and training pipeline (HU conversion/windowing, normalization, augmentation, stratified splits)
- Implemented balanced training for class imbalance and stable fine-tuning
- Produced interpretability visuals (Grad-CAM grids with artifact-aware cropping) to sanity-check model behavior
- Implemented and tested student/teacher self-supervised pretraining and compared initialization strategies

---

## Wind Turbine Design–Build–Test (E26)

Improving small wind-turbine power through iterative testing  
Rapid prototyping • Wind-tunnel testing • Power characterization • FEA-informed structural check

Ranked #1 / 40 teams in measured electrical power output (final course test). In a 4-person team project, we designed and tested a small wind turbine under manufacturability and performance constraints. We compared candidate blade concepts, fabricated prototypes via 3D printing, and evaluated designs in a wind-tunnel-style setup using voltage/current measurements to quantify electrical power output. Structural sanity checks were performed with linear-static FEA (led by a teammate) and reviewed by the team.

My contributions (team of 4)
- Measurement owner: captured and hand-logged most of the voltage/current data during testing across runs and iterations
- Performance characterization: converted V–I measurements into comparable power results (curves/peak power) to rank iterations and support the final configuration
- Design input: conducted independent blade/airfoil research and contributed to group selection of blade geometry (airfoil/twist/profile tradeoffs)
- Verification review: double-checked a teammate’s linear-static FEA assumptions/results to confirm stiffness/strength constraints were reasonable

<details>
  <summary>Selected figures</summary>

  <p align="center">
    <img src="assets/windturbine_fea_triptych.png" width="92%" alt="FEA results: displacement, stress, and factor of safety">
  </p>
  <p align="center">
    <em>Linear-static FEA sanity check on the tower: displacement, von Mises stress, and factor of safety under representative loading.</em>
  </p>

  <div style="max-width: 980px; margin: 12px auto; display:flex; gap:16px; justify-content:center; align-items:center; flex-wrap:wrap;">
    <img src="assets/windturbine_power_vs_current.png"
         style="height:320px; width:auto; max-width:58%; object-fit:contain; display:block;"
         alt="Power vs current">
    <img src="assets/windturbine_test_setup.jpg"
         style="height:320px; width:auto; max-width:38%; object-fit:cover; object-position:50% 35%; display:block;"
         alt="Wind turbine test setup">
  </div>
  <p align="center">
    <em>Measured electrical output (power vs current) and the wind-tunnel-style test setup used to capture voltage/current under controlled airflow.</em>
  </p>
</details>

---

## Automated Market-Open Execution Bot (UPRO/SPXU)

Reliability-first automation under real-world constraints  
Systems engineering • Deterministic state machine • Cloud-ready execution

I built a reliability-first paper-trading automation system that runs at the U.S. market open, briefly observes two leveraged S&P 500 ETFs (UPRO, SPXU), makes a deterministic winner/leader decision, and executes a single cash-only order with explicit safety checks. The goal is robust automation: clear state transitions, fail-closed behavior, and auditability—so the system behaves predictably even when external APIs or market conditions are imperfect.

<p align="center">
  <img src="assets/upro_spxu_system_diagram1.svg" width="100%">
</p>

Highlights
- Deterministic decision logic: fixed open-time observation window + threshold-based winner selection with an explicit end-of-window tie-break
- Constraint-aware execution: whole-share sizing, cash-only allocation, and a dynamic PDT guard that fails closed if account checks can’t be verified
- Reliability guardrails: cancel-stale-orders, fill confirmation with timeouts, and “morning cleanup” to flatten leftover positions safely before a new run
- Auditability: timestamped logs at each state transition (open → observe → decide → route order → confirm fill → hold/exit) for post-run traceability

Engineering notes
- State machine design: the script is structured as discrete states with explicit pass/fail branches rather than one long script, which makes failure modes predictable
- Fail-closed philosophy: when critical checks fail (market closed, API unreachable, fill not confirmed), the system exits without trading and logs why
- Reproducible evidence: logs are designed to be audit trails (what the system believed, what it did, and when)

---
