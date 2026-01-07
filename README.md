# Engineering Portfolio

Mechanical Engineering student focused on aerospace systems, thermal modeling, and applied machine learning. Hands-on experience across CubeSat payload testing, aerodynamic analysis, and medical image modeling.

---

<h2 align="center">Blended-Wing-Body CFD: Concept-to-Coefficients (SOLIDWORKS Flow Simulation 2024)</h2>

<p align="center"><em>Aerodynamics • CFD verification (mesh/domain) • Coefficient extraction + clean post-processing</em></p>

<p align="center">
  <a href="assets/BWB%20Executive%20Summary.pdf">
    <img src="assets/BWB_Plane_RelPresIso4deg.png" width="82%">
  </a>
</p>

<p align="center">
  <em>Relative static pressure on the BWB upper surface (α = 4°, V∞ ≈ 40 mph).</em><br>
  📄 <a href="assets/BWB%20Executive%20Summary.pdf"><strong>Open the executive summary (PDF)</strong></a>
</p>

Concept-level aerodynamic characterization of a blended-wing-body (BWB) using steady-state CFD in SOLIDWORKS Flow Simulation 2024, with disciplined verification (convergence, domain independence, mesh sensitivity) and an AoA sweep at ~40 mph.

**Highlights**
- AoA sweep: −2°, 0°, 2°, 4°, 6°, 8° at V∞ ≈ 40 mph
- Verification workflow: convergence (+100-iteration stability window), domain sensitivity, mesh sensitivity
- Post-processing standard: consistent views + fixed legend scales for clean visual comparisons

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
  <em>NASA’s Minnesota Space Grant Consortium &amp; University of Minnesota SmallSat Program</em><br>
  <strong>Role:</strong> Aerospace Systems Research Intern (Mechanical / Thermal Engineering — Instrumentation &amp; Data)
</p>

<p align="center">
  <img src="assets/HyCubeINAir.png" width="48%">
  <img src="assets/hycube_mission_graphic.webp" width="48%">
</p>

Thermocouple calibration + validation workflow to support sensor selection and flight-readiness checks for HyCUBE testing (including high-altitude balloon operations). The pipeline converts raw voltage/temperature logs into regression-based calibration fits with confidence bounds and evaluates measurement agreement using parity and Bland–Altman analysis.

**Results snapshot**
- Estimated sensitivity (slope): 19 in ≈ 44.51 µV/°C (R² ≈ 0.499), 25 in ≈ 33.84 µV/°C (R² ≈ 0.377), 30 in ≈ 45.05 µV/°C (R² ≈ 0.542)
- Agreement vs reference: overall bias ≈ 0.00°C with limits of agreement ≈ ±3.60°C (Bland–Altman)
- Deliverable: calibration summary + figures exported as PNGs suitable for reports and review decks

### Selected figures

<p align="center"><strong>Centered calibration fits + 95% confidence bands (shared axes)</strong></p>
<p align="center">
  <img src="assets/hycube_centered_fit_ci_shared_axes.png" width="86%">
</p>

<p align="center"><strong>Validation views (parity + error)</strong></p>
<p align="center">
  <img src="assets/hycube_parity_plot.png" width="47%">
  <img src="assets/hycube_error_vs_reference.png" width="47%">
</p>

<p align="center"><strong>Agreement + sensitivity</strong></p>
<p align="center">
  <img src="assets/hycube_bland_altman_all.png" width="47%">
  <img src="assets/hycube_sensitivity_vs_length.png" width="47%">
</p>

**Key contributions**
- Designed thermocouple calibration experiments and produced decision-ready plots for sensor selection
- Implemented cold-junction compensation and regression-based calibration with confidence bounds
- Validated measurement behavior with parity + Bland–Altman agreement (bias and limits-of-agreement)
- Automated analysis outputs (tables + PNG exports) to keep results reproducible and reviewable
- Supported flight-readiness testing workflows, including high-altitude balloon operations and post-flight validation

---

<h2 align="center">StrokeNet: Hemorrhage Detection from Non-Contrast Head CT (Mofrad Lab-Mentored ML Project)</h2>

<p align="center"><em>Medical Imaging • Applied Deep Learning • Interpretability + validation focus</em></p>

<p align="center">
  <img src="assets/gradcam_grid_imagenet_maskedcrop (1).png" width="86%">
</p>

A reproducible slice-level baseline for hemorrhage detection from head CT. Compared initialization strategies (scratch vs ImageNet vs CT-native student/teacher self-supervision) and evaluated performance with ROC behavior plus interpretability checks.

### Results snapshot (ROC curves)

<p align="center">
  <img src="assets/ROC_curve_scratch.png" height="240" style="width:auto; margin:0 6px;" />
  <img src="assets/ROC_curve_imagenet.png" height="240" style="width:auto; margin:0 6px;" />
  <img src="assets/ROC_curve_jepa.png" height="240" style="width:auto; margin:0 6px;" />
</p>

**Engineering contributions**
- Built an end-to-end CT preprocessing + training pipeline (HU conversion/windowing, normalization, augmentation, stratified splits)
- Implemented balanced training for class imbalance and stable fine-tuning
- Produced interpretability visuals (Grad-CAM grids with artifact-aware cropping) to sanity-check model behavior
- Implemented and tested student/teacher self-supervised pretraining and compared initialization strategies
