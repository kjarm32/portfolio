# Engineering Portfolio

Mechanical Engineering student focused on aerospace systems, thermal modeling, and applied machine learning. Hands-on experience across CubeSat payload testing, aerodynamic analysis, and medical image modeling.

---

<h2 align="center">Validated Low-Speed CFD of a Blended-Wing-Body Aircraft </h2>

<p align="center"><em>Aerodynamics • CFD verification (mesh/domain) • Coefficient extraction + clean post-processing</em></p>

<p align="center">
  <a href="assets/BWB%20Executive%20Summary (2).pdf">
    <img src="assets/BWB_Plane_RelPresIso4deg.png" width="82%">
  </a>
</p>

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

<h2 align="center">HyCUBE: CubeSat Thermal &amp; Instrumentation Payload</h2>

<p align="center"><em>Aerospace Systems + Instrumentation • Sensor calibration + validation • Flight-readiness testing</em></p>

<p align="center">
  <strong>Program:</strong> NASA Minnesota Space Grant Consortium × University of Minnesota SmallSat Program<br>
  <strong>Role:</strong> Aerospace Systems Research Intern
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

<h2 align="center">StrokeNet: Hemorrhage Detection on Non-Contrast Head CT (Mofrad Lab-Mentored ML Project)</h2>

<p align="center"><em>Medical Imaging • Applied Deep Learning • Interpretability + validation focus</em></p>

<p align="center">
  <img src="assets/gradcam_grid_imagenet_maskedcrop (1).png" width="86%">
</p>

Rapid identification of intracranial hemorrhage on non-contrast head CT can accelerate triage because hemorrhagic findings drive time-critical decisions and differ from ischemic pathways. This project was motivated by Mofrad Lab discussions on stroke imaging and a concrete question that came up in mentorship feedback: whether CT-native self-supervised pretraining can provide better representations than standard ImageNet pretraining for CT. I built a reproducible slice-level hemorrhage detection baseline and compared three initialization strategies, random initialization (scratch), ImageNet pretraining, and CT-native student/teacher self-supervised pretraining (JEPA), using a fixed supervised training pipeline and interpretability checks with Grad-CAM.

### 1-page summary + validation results

<p align="center">
  📄 <a href="assets/_CT%20(Non-Contrast)%20Hemorrhage%20Detection%20with%20CT-Native%20Self-Supervised%20Pretraining%20(JEPA)%20vs%20ImageNet%20(1).pdf"><strong>Open the 1-page project summary (PDF)</strong></a>
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
</table>>



**What this shows**
- On this small RSNA subset and a lightweight JEPA run, ImageNet pretraining preserved the best overall AUC and specificity.
- CT-native JEPA increased sensitivity (fewer missed hemorrhage slices) but traded off specificity, which is useful as a baseline and a pointer toward longer pretraining and tighter SSL tuning.

**Engineering contributions**
- Built an end-to-end CT preprocessing and training pipeline (HU conversion/windowing, normalization, augmentation, stratified splits)
- Implemented balanced training for class imbalance and stable fine-tuning
- Produced interpretability visuals (Grad-CAM grids with artifact-aware cropping) to sanity-check model behavior
- Implemented and tested student/teacher self-supervised pretraining and compared initialization strategies
