# Engineering Portfolio

Mechanical Engineering student focused on aerospace systems, thermal modeling, and applied machine learning. Hands-on experience across CubeSat payload testing, aerodynamic analysis, and medical image modeling.

---

<h2 align="center" style="margin-top:8px; margin-bottom:10px;">
  Blended-Wing-Body Aerodynamics: Lift/Drag Across Angle of Attack
</h2>

<p align="center" style="margin:0; font-weight:700; font-size:1.02rem; opacity:0.92;">
  Validated Low-Speed CFD of a Blended-Wing-Body Aircraft
</p>

<p align="center" style="margin-top:4px; margin-bottom:14px; opacity:0.85;">
  <em>Aerodynamics • CFD verification (mesh/domain) • Coefficient extraction + clean post-processing</em>
</p>

<!-- KEEP THIS IMAGE BLOCK -->
<p align="center">
  <a href="assets/BWB%20Executive%20Summary (2).pdf">
    <img src="assets/BWB_Plane_RelPresIso4deg.png" width="82%">
  </a>
</p>

<!-- then your caption/link -->
<p align="center">
  <em>Relative static pressure on the BWB upper surface (α = 4°, V∞ ≈ 40 mph).</em><br>
  📄 <a href="assets/BWB%20Executive%20Summary (2).pdf"><strong>Open the executive summary (PDF)</strong></a>
</p>


A blended-wing-body aircraft can reduce drag by generating lift with more of the airframe, not just the wings, which is why it’s a recurring concept in efficiency-focused aircraft design. In this study, I used steady-state CFD in SOLIDWORKS Flow Simulation to estimate lift/drag coefficients across angle-of-attack and to produce clean, comparable flow/pressure visualizations while backing the results with basic verification (convergence, domain, and mesh sensitivity checks).

**Highlights**
- Quantified performance: AoA sweep (−2° → +8° at ~40 mph); peak efficiency L/D ≈ 7.3 near ~6°
- Credibility checks: convergence stability window; domain <0.5% effect; mesh medium→fine ΔCL ≈ 1.25%
- Communication: fixed views/scales for honest cross-case comparison (velocity cuts + pressure maps)


### Selected figures

<p align="center"><strong>Streamwise velocity montage (Vx)</strong></p>
<p align="center">
  <img src="assets/13CombinedVelX_STACKED_0_4_8_PORTFOLIO%20%281%29.png" width="50%">
</p>

<p align="center"><strong>Surface relative pressure montage (0°, 4°, 8°)</strong></p>
<p align="center">
  <img src="assets/CombinedRelPres_montage_0_4_8_PORTFOLIO.png" width="92%">
</p>

<p align="center"><strong>Mesh sensitivity (α = 4° baseline)</strong></p>
<p align="center">
  <img src="assets/ES3_mesh_sensitivity.png" width="92%">
</p>

---

<h2 align="center" style="margin-bottom:10px;">Making CubeSat Thermal Data Trustworthy</h2>

<p align="center" style="margin:0; font-weight:700; font-size:1.05rem;">
  HyCUBE: CubeSat Thermal &amp; Instrumentation Payload
</p>

<p align="center" style="margin-top:6px; margin-bottom:18px; opacity:0.85;">
  <em>Aerospace Systems + Instrumentation • Sensor calibration + validation • Flight-readiness testing</em>
</p>


<p align="center">
  <img src="assets/HyCubeINAir.png" width="48%">
  <img src="assets/hycube_mission_graphic.webp" width="48%">
</p>

Reliable temperature sensing is critical for thermal testing and flight readiness. I built a thermocouple calibration + validation workflow for HyCUBE (Hypersonic Configurable Unit Ballistic Experiment) to support sensor selection and pre-flight verification. The pipeline converts raw voltage/temperature logs into regression-based calibration fits with confidence bounds and evaluates measurement agreement using parity and Bland–Altman analysis.

**Results snapshot**
- Estimated sensitivity (slope): 19 in ≈ 44.51 µV/°C (R² ≈ 0.499), 25 in ≈ 33.84 µV/°C (R² ≈ 0.377), 30 in ≈ 45.05 µV/°C (R² ≈ 0.542)
- Agreement vs reference: overall bias ≈ 0.00°C with limits of agreement ≈ ±3.60°C (Bland–Altman)
- Deliverable: calibration summary + figures exported as PNGs suitable for reports and review decks

### Selected figures

<p align="center"><strong>Validation views (parity + error)</strong></p>
<p align="center">
  <img src="assets/hycube_validation_2up.png" width="92%">
</p>

<p align="center"><strong>Agreement + sensitivity</strong></p>
<p align="center">
  <img src="assets/hycube_agreement_2up.png" width="92%">
</p>

<p align="center"><strong>Centered calibration fits + 95% confidence bands (shared axes)</strong></p>
<p align="center">
  <img src="assets/hycube_centered_fit_ci_shared_axes(1).png" width="86%">
</p>




**Key contributions**
- Designed thermocouple calibration experiments and produced decision-ready plots for sensor selection
- Implemented cold-junction compensation and regression-based calibration with confidence bounds
- Validated measurement behavior with parity + Bland–Altman agreement (bias and limits-of-agreement)
- Automated analysis outputs (tables + PNG exports) to keep results reproducible and reviewable
- Supported high-altitude balloon flight operations: payload integration, ground-station setup, flight monitoring, recovery, and post-flight data validation

---

<h2 align="center" style="margin-top:8px; margin-bottom:10px;">
  Interpretable Hemorrhage Detection on Head CT
</h2>

<p align="center" style="margin:0; font-weight:700; font-size:1.02rem; opacity:0.92;">
  StrokeNet: Hemorrhage Detection on Non-Contrast Head CT (Mofrad Lab-Mentored ML Project)
</p>

<p align="center" style="margin-top:4px; margin-bottom:14px; opacity:0.85;">
  <em>Medical Imaging • Applied Deep Learning • Interpretability + validation focus</em>
</p>


<p align="center">
  <img src="assets/gradcam_grid_imagenet_maskedcrop (1).png" width="86%">
</p>

Rapid identification of intracranial hemorrhage on non-contrast head CT can accelerate triage because hemorrhagic findings drive time-critical decisions and differ from ischemic pathways. This project was motivated by Mofrad Lab discussions on stroke imaging and a concrete question that came up in mentorship feedback: whether CT-native self-supervised pretraining can provide better representations than standard ImageNet pretraining for CT. I built a reproducible slice-level hemorrhage detection baseline and compared three initialization strategies, random initialization (scratch), ImageNet pretraining, and CT-native student/teacher self-supervised pretraining (JEPA), using a fixed supervised training pipeline and interpretability checks with Grad-CAM.

### 1-page summary + validation results

<p align="center">
  📄 <a href="assets/CT_Hemorrhage_1page_summary.pdf">Open the 1-page project summary (PDF)</a>
</p>


**Validation (held-out 20% split, n = 240 slices)**  
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



**What this shows**
- On this small RSNA subset and a lightweight JEPA run, ImageNet pretraining preserved the best overall AUC and specificity.
- CT-native JEPA increased sensitivity (fewer missed hemorrhage slices) but traded off specificity, which is useful as a baseline and a pointer toward longer pretraining and tighter SSL tuning.

**Engineering contributions**
- Built an end-to-end CT preprocessing and training pipeline (HU conversion/windowing, normalization, augmentation, stratified splits)
- Implemented balanced training for class imbalance and stable fine-tuning
- Produced interpretability visuals (Grad-CAM grids with artifact-aware cropping) to sanity-check model behavior
- Implemented and tested student/teacher self-supervised pretraining and compared initialization strategies

---
<!-- ===================== Wind Turbine Project ===================== -->

<h2 align="center" style="margin-top:8px; margin-bottom:10px;">
  Improving Small Wind-Turbine Power Through Iterative Testing
</h2>

<p align="center" style="margin:0; font-weight:700; font-size:1.02rem; opacity:0.92;">
  Wind Turbine Design–Build–Test (E26: 3D Modeling for Design)
</p>

<p align="center" style="margin-top:4px; margin-bottom:14px; opacity:0.85;">
  <em>Rapid prototyping • Wind-tunnel testing • Power characterization • FEA-informed structural check</em>
</p>



<p align="center">
  Result: Ranked #1 / 40 teams in measured electrical power output (final course test).
</p>

<p>
In a 4-person team project, we designed and tested a small wind turbine under manufacturability and performance constraints.
We compared candidate blade concepts, fabricated prototypes via 3D printing, and evaluated designs in a wind-tunnel-style setup
using voltage/current measurements to quantify electrical power output. Structural sanity checks were performed with linear-static
FEA (led by a teammate) and reviewed by the team.
</p>

<p>My contributions (team of 4)</p>
<ul>
  <li>Measurement owner: captured and hand-logged most of the voltage/current data during testing across runs and iterations.</li>
  <li>Performance characterization: converted V–I measurements into comparable power results (curves/peak power) to rank iterations and support the final configuration.</li>
  <li>Design input: conducted independent blade/airfoil research and contributed to group selection of blade geometry (airfoil/twist/profile tradeoffs).</li>
  <li>Verification review: double-checked a teammate’s linear-static FEA assumptions/results to confirm stiffness/strength constraints were reasonable.</li>
</ul>

<hr>

<p align="center">Selected figures</p>

<!-- FEA (full width) -->
<p align="center">
  <img src="assets/windturbine_fea_triptych.png" width="92%" alt="FEA results: displacement, stress, and factor of safety">
</p>
<p align="center"><em>Linear-static FEA sanity check on the tower: displacement, von Mises stress, and factor of safety under representative loading.</em></p>

<!-- Power + test setup (2-up) -->
<div style="max-width: 980px; margin: 12px auto; display:flex; gap:16px; justify-content:center; align-items:center; flex-wrap:wrap;">
  <img src="assets/windturbine_power_vs_current.png"
       style="height:320px; width:auto; max-width:58%; object-fit:contain; display:block;"
       alt="Power vs current">
  <img src="assets/windturbine_test_setup.png"
       style="height:320px; width:auto; max-width:38%; object-fit:cover; object-position:50% 35%; display:block;"
       alt="Wind turbine test setup">
</div>
<p align="center"><em>Measured electrical output (power vs current) and the wind-tunnel-style test setup used to capture voltage/current under controlled airflow.</em></p>


---
<!-- ===================== Trading System Project ===================== -->

<h2 align="center" style="margin-top:8px; margin-bottom:10px;">
  Reliability-First Automation Under Real-World Constraints
</h2>

<p align="center" style="margin:0; font-weight:700; font-size:1.02rem; opacity:0.92;">
  Automated Market-Open Execution Bot (UPRO/SPXU): Reliability-First Automation
</p>

<p align="center" style="margin-top:4px; margin-bottom:14px; opacity:0.85;">
  <em>Systems engineering • Deterministic state machine • Cloud-ready execution</em>
</p>


<p align="center">
  <em>Paper-trading implementation focused on robust execution, constraints, and monitoring.</em>
</p>

<p>
I built a reliability-first automation system that runs at the U.S. market open, briefly observes two leveraged S&amp;P 500 ETFs (UPRO, SPXU), makes a deterministic winner/leader decision, and executes a single cash-only order with explicit safety checks. The goal is to demonstrate robust automation: clear state transitions, fail-closed behavior, and auditability—so the system behaves predictably even when external APIs or market conditions are imperfect.
</p>

<!-- ===== System diagram ===== -->
<p align="center"><strong>System diagram (end-to-end execution flow)</strong></p>
<p align="center">
  <img src="assets/trading_system_diagram(2).png" width="96%" alt="Reliability-first execution flow diagram">
</p>


<!-- ===== Highlights (engineering bullets) ===== -->
<p><strong>Highlights</strong></p>
<ul>
  <li>Deterministic decision logic: fixed open-time observation window + threshold-based winner selection with an explicit end-of-window tie-break.</li>
  <li>Constraint-aware execution: whole-share sizing, cash-only allocation, and a dynamic PDT guard that <em>fails closed</em> if account checks can’t be verified.</li>
  <li>Reliability guardrails: cancel-stale-orders, fill confirmation with timeouts, and “morning cleanup” to flatten leftover positions safely before a new run.</li>
  <li>Auditability: timestamped logs at each state transition (open → observe → decide → route order → confirm fill → hold/exit) for post-run traceability.</li>
</ul>

<!-- ===== Engineering notes (kept readable) ===== -->
<p><strong>Engineering notes</strong></p>
<ul>
  <li>State machine design: the script is structured as discrete states with explicit pass/fail branches rather than “one long script,” which makes failure modes predictable.</li>
  <li>Fail-closed philosophy: when critical checks fail (market closed, API unreachable, fill not confirmed), the system exits without trading and logs why.</li>
  <li>Reproducible evidence: logs are designed to be “audit trails” (what the system believed, what it did, and when).</li>
</ul>

<!-- ===================== End Trading System Project ===================== -->
>

